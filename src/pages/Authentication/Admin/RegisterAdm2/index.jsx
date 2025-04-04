import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Styled from "../../../../GlobalStyles/Authetication";
import { InputAut } from "../../../../components/InputAut";
import { SubmitButton } from "../../../../components/SubmitButton";

export const RegisterAdm2 = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const previousData = location.state;

    const [formData, setFormData] = useState({
        ...previousData,
        empresa: "",
        cnpj: "",
        endereco: "",
        campo: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados completos do admin:", formData);

        // Aqui você pode enviar os dados para seu backend com fetch ou axios
        // Exemplo:
        // fetch("/api/cadastrar-admin", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(formData),
        // });

        // Após o envio:
        navigate("/login");
    };

    return (
        <Styled.AutDiv>
            <Styled.TituloAut>Cadastro</Styled.TituloAut>
            <Styled.AutForm onSubmit={handleSubmit}>
                <Styled.DoubleInputDiv>
                    <InputAut type="text" title="Empresa" placeholder="Digite sua empresa" name="empresa" value={formData.empresa} onChange={handleChange}/>
                    <InputAut type="text" title="CNPJ" placeholder="Digite seu CNPJ" name="cnpj" value={formData.cnpj} onChange={handleChange}/>
                </Styled.DoubleInputDiv>
                <InputAut type="text" title="Endereço" placeholder="Digite seu endereço" name="endereco" value={formData.endereco} onChange={handleChange}/>
                <InputAut type="text" title="Campo de atuação" placeholder="Digite seu campo de atuação" name="campo" value={formData.campo} onChange={handleChange}/>
                <SubmitButton title="Cadastrar-se"/>
            </Styled.AutForm>
            <Styled.NavContainerLink>
                <Styled.NavLinkSt to="/">Funcionario</Styled.NavLinkSt>
                <Styled.NavLinkSt to="/adm">Admin</Styled.NavLinkSt>
            </Styled.NavContainerLink>
            <Styled.PageLink to="/login">Já possui conta?</Styled.PageLink>
        </Styled.AutDiv>
    );
};
