import { useState } from "react";
import * as Styled from "../../../GlobalStyles/Authetication";
import { CheckboxAut } from "../../../components/CheckboxAut";
import { InputAut } from "../../../components/InputAut";
import { SubmitButton } from "../../../components/SubmitButton";

export const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        senha: "",
        lembrar: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckbox = () => {
        setFormData((prev) => ({ ...prev, lembrar: !prev.lembrar }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Dados de login:", formData);
    };

    return (
        <Styled.AutDiv>
            <Styled.TituloAut>Login</Styled.TituloAut>
            <Styled.AutForm onSubmit={handleSubmit}>
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
                <Styled.DivRemember>
                    <CheckboxAut label="Lembrar-se" checked={formData.lembrar} onChange={handleCheckbox} />
                    <Styled.RememberLink to="#">Esqueceu a senha?</Styled.RememberLink>
                </Styled.DivRemember>
                <SubmitButton title="Logar-se" />
            </Styled.AutForm>
            <Styled.PageLink to="/adm">Sem empresa ainda? Cadastre-se!</Styled.PageLink>
        </Styled.AutDiv>
    );
};
