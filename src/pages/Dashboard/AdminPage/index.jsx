import { useState } from "react";
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

    const [funcionarios, setFuncionarios] = useState([]);

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
        const response = await axios.post("http://localhost:8080/employees", formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setFuncionarios([...funcionarios, response.data]);
        setFormData({ username: "", cpf: "", email: "", password: "" });
    } catch (error) {
        console.error("Erro ao criar funcionário:", error.response?.data || error.message);
        alert("Erro ao criar funcionário.");
    }
};

    const removerFuncionario = (id) => {
        setFuncionarios(funcionarios.filter(func => func.id !== id));
    };

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
                {funcionarios.map((funcionario) => (
                    <FuncionarioCard
                        key={funcionario.id}
                        funcionario={funcionario}
                        onRemover={removerFuncionario}
                    />
                ))}
            </Styled.FuncionariosList>
        </Styled.FuncionarioContainer>
        </div>
    );
};
