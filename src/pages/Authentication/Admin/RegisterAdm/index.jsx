import * as Styled from "../../../../GlobalStyles/Authetication";
import { InputAut } from "../../../../components/InputAut";
import { SubmitButton } from "../../../../components/SubmitButton";
import { NavLink, Link } from "react-router";


const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulário enviado!");
};

export const RegisterAdm = () => {

    return(
        <Styled.AutDiv>
            <Styled.TituloAut>Cadastro</Styled.TituloAut>
            <Styled.AutForm onSubmit={handleSubmit}>
                <Styled.DoubleInputDiv>
                    <InputAut type="text" title="Nome" placeholder="Digite seu nome" htmlfor="nome"/>
                    <InputAut type="text" title="CPF / RG" placeholder="Digite seu CPF / RG" htmlfor="cpf"/>
                </Styled.DoubleInputDiv>
                <InputAut type="email" title="Email" placeholder="Digite seu email" htmlfor="email"/>
                <InputAut type="password" title="Nome" placeholder="Digite sua senha" htmlfor="senha"/>
                <SubmitButton onSubmit={handleSubmit} title="Avançar"/>
            </Styled.AutForm>
                <Styled.NavContainerLink>
                    <Styled.NavLinkSt to="/">Funcionario</Styled.NavLinkSt>
                    <Styled.NavLinkSt to="/adm">Admin</Styled.NavLinkSt>
                </Styled.NavContainerLink>
            <Styled.PageLink to="/login/adm">Já possui conta?</Styled.PageLink>
        </Styled.AutDiv>
    )
}