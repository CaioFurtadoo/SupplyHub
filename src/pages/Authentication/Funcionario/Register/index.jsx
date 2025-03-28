import * as Styled from "../../../../GlobalStyles/Authetication";
import { CheckboxAut } from "../../../../components/CheckboxAut";
import { InputAut } from "../../../../components/InputAut";
import { SubmitButton } from "../../../../components/SubmitButton";


const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulário enviado!");
};

export const Register = () => {

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
                <InputAut type="text" title="Token da Empresa" placeholder="Digite o token gerado pela sua empresa" htmlfor="token"/>
                <CheckboxAut label="Lembrar-se"/>
                <SubmitButton onSubmit={handleSubmit} title="Cadastrar-se"/>
            </Styled.AutForm>
                <Styled.NavContainerLink>
                    <Styled.NavLinkSt to="/">Funcionario</Styled.NavLinkSt>
                    <Styled.NavLinkSt to="/adm">Admin</Styled.NavLinkSt>
                </Styled.NavContainerLink>
            <Styled.PageLink to="/login">Já possui conta?</Styled.PageLink>
        </Styled.AutDiv>
    )
}