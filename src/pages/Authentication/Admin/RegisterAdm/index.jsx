import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "../../../../GlobalStyles/Authetication";
import { InputAut } from "../../../../components/InputAut";
import { SubmitButton } from "../../../../components/SubmitButton";

export const RegisterAdm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: "",
        cpf: "",
        email: "",
        senha: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/adm/submit", { state: formData }); // envia dados para a próxima rota
    };

    return (
        <Styled.AutDiv>
            <Styled.TituloAut>Cadastro</Styled.TituloAut>
            <Styled.AutForm onSubmit={handleSubmit}>
                <Styled.DoubleInputDiv>
                    <InputAut type="text" title="Nome" placeholder="Digite seu nome" name="nome" onChange={handleChange} value={formData.nome}/>
                    <InputAut type="text" title="CPF / RG" placeholder="Digite seu CPF / RG" name="cpf" onChange={handleChange} value={formData.cpf}/>
                </Styled.DoubleInputDiv>
                <InputAut type="email" title="Email" placeholder="Digite seu email" name="email" onChange={handleChange} value={formData.email}/>
                <InputAut type="password" title="Senha" placeholder="Digite sua senha" name="senha" onChange={handleChange} value={formData.senha}/>
                <SubmitButton title="Avançar"/>
            </Styled.AutForm>
            <Styled.NavContainerLink>
                <Styled.NavLinkSt to="/">Funcionario</Styled.NavLinkSt>
                <Styled.NavLinkSt to="/adm">Admin</Styled.NavLinkSt>
            </Styled.NavContainerLink>
            <Styled.PageLink to="/login">Já possui conta?</Styled.PageLink>
        </Styled.AutDiv>
    );
};
