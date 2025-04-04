import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "../../../../GlobalStyles/Authetication";
import { InputAut } from "../../../../components/InputAut";
import { SubmitButton } from "../../../../components/SubmitButton";

export const Register = () => {
    const navigate = useNavigate(); // Hook para navegação
    const [formData, setFormData] = useState({
        nome: "",
        cpf: "",
        email: "",
        senha: "",
        token: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Dados de cadastro (funcionário):", formData);

        // Redireciona para a tela de login após o cadastro
        navigate("/login");
    };

    return (
        <Styled.AutDiv>
            <Styled.TituloAut>Cadastro</Styled.TituloAut>
            <Styled.AutForm onSubmit={handleSubmit}>
                <Styled.DoubleInputDiv>
                    <InputAut
                        type="text"
                        title="Nome"
                        placeholder="Digite seu nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                    <InputAut
                        type="text"
                        title="CPF / RG"
                        placeholder="Digite seu CPF / RG"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                    />
                </Styled.DoubleInputDiv>
                <InputAut
                    type="email"
                    title="Email"
                    placeholder="Digite seu email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <InputAut
                    type="password"
                    title="Senha"
                    placeholder="Digite sua senha"
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                />
                <InputAut
                    type="text"
                    title="Token da Empresa"
                    placeholder="Digite o token gerado pela sua empresa"
                    name="token"
                    value={formData.token}
                    onChange={handleChange}
                />

                <SubmitButton title="Cadastrar-se" />
            </Styled.AutForm>
            <Styled.NavContainerLink>
                <Styled.NavLinkSt to="/">Funcionário</Styled.NavLinkSt>
                <Styled.NavLinkSt to="/adm">Admin</Styled.NavLinkSt>
            </Styled.NavContainerLink>
            <Styled.PageLink to="/login">Já possui conta?</Styled.PageLink>
        </Styled.AutDiv>
    );
};