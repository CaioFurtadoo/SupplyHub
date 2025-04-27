import { useState } from "react";
import { InputAut } from "../../../components/InputAut";
import { SubmitButton } from "../../../components/SubmitButton";
import { FuncionarioCard } from "../../../components/FuncionarioCard";
import * as Styled from "./Admin";

export const AdminPage = () => {
    const [formData, setFormData] = useState({
        nome: "",
        cpf: "",
        email: "",
        senha: ""
    });

    const [funcionarios, setFuncionarios] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.nome && formData.cpf && formData.email && formData.senha) {
            setFuncionarios([...funcionarios, { ...formData, id: Date.now() }]);
            setFormData({
                nome: "",
                cpf: "",
                email: "",
                senha: ""
            });
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
                        htmlfor="nome"
                        name="nome"
                        title="Nome do funcionário"
                        placeholder="Digite o nome do funcionário"
                        type="text"
                        value={formData.nome}
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
                    htmlfor="senha"
                    name="senha"
                    title="Senha"
                    placeholder="Digite a senha do funcionário"
                    type="text"
                    value={formData.senha}
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
