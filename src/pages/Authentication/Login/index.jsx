import { useState } from "react";
import * as Styled from "../../../GlobalStyles/Authetication";
import { CheckboxAut } from "../../../components/CheckboxAut";
import { useLocation, useNavigate } from "react-router-dom";
import { InputAut } from "../../../components/InputAut";
import { SubmitButton } from "../../../components/SubmitButton";
import axios from "axios";

export const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        lembrar: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckbox = () => {
        setFormData((prev) => ({ ...prev, lembrar: !prev.lembrar }));
    };

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post("http://54.209.45.121/api/auth/login", {
            email: formData.email,
            password: formData.password
        });

        const token = response.data.token; 
        localStorage.setItem("token", token);
        window.location.href = "/produtos";

        console.log("Login bem-sucedido:", token);
        navigate("/produtos");
    } catch (error) {
        console.error("Erro no login:", error.response?.data || error.message);
        alert("Credenciais inválidas.");
    }
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
                    name="password"
                    value={formData.password}
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
