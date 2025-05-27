import { useState, useEffect } from "react";
import { InputAut } from "../../../components/InputAut";
import { SubmitButton } from "../../../components/SubmitButton";
import { FuncionarioCard } from "../../../components/FuncionarioCard";
import * as Styled from "./Admin";
import axios from "axios";

export const AdminPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        cpf: "",
        email: "",
        password: ""
    });

    const [usuarios, setUsuarios] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post("http://54.209.45.121/employees", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUsuarios([...usuarios, { ...response.data, tipo: "funcionario" }]);
            setFormData({ username: "", cpf: "", email: "", password: "" });
        } catch (error) {
            console.error("Erro ao criar funcionário:", error.response?.data || error.message);
            alert("Erro ao criar funcionário.");
        }
    };

    const removerFuncionario = async (id, tipo) => {
        try {
            const token = localStorage.getItem("token");
    
            const urlBase = tipo === "gerente"
                ? "http://54.209.45.121/managers"
                : "http://54.209.45.121/employees";
    
            await axios.delete(`${urlBase}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    
            // Remove do estado após sucesso
            setUsuarios(usuarios.filter(user => user.id !== id));
        } catch (error) {
            console.error("Erro ao remover:", error.response?.data || error.message);
            alert("Erro ao remover o usuário.");
        }
    };
    

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("token");

                const [employeesRes, managersRes] = await Promise.all([
                    axios.get("http://54.209.45.121/employees", {
                        headers: { Authorization: `Bearer ${token}` }
                    }),
                    axios.get("http://54.209.45.121/managers", {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                ]);

                const employees = employeesRes.data.map(emp => ({ ...emp, tipo: "funcionario" }));
                const managers = managersRes.data.map(manager => ({ ...manager, tipo: "gerente" }));

                setUsuarios([...employees, ...managers]);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error.response?.data || error.message);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <Styled.FuncionarioContainer>
                <Styled.Form onSubmit={handleSubmit}>
                    <Styled.InfoFuncionario>
                        <InputAut
                            htmlfor="username"
                            name="username"
                            title="Nome do funcionário"
                            placeholder="Digite o nome do funcionário"
                            type="text"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <InputAut
                            htmlfor="cpf"
                            name="cpf"
                            title="CPF"
                            placeholder="Digite seu CPF"
                            type="text"
                            mask="999.999.999-99"
                            value={formData.cpf}
                            onChange={handleChange}
                        />
                    </Styled.InfoFuncionario>

                    <InputAut
                        htmlfor="email"
                        name="email"
                        title="Email"
                        placeholder="Digite o e-mail do funcionário"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <InputAut
                        htmlfor="password"
                        name="password"
                        title="Senha"
                        placeholder="Digite a senha do funcionário"
                        type="text"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <SubmitButton title="Criar Funcionário" type="submit" />
                </Styled.Form>

                <Styled.FuncionariosList>
                    {usuarios.map((usuario) => (
                        <FuncionarioCard
                            key={usuario.id}
                            funcionario={usuario}
                            onRemover={() => removerFuncionario(usuario.id, usuario.tipo)}
                        />
                    ))}
                </Styled.FuncionariosList>
            </Styled.FuncionarioContainer>
        </div>
    );
};
