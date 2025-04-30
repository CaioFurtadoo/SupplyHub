import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Styled from "../../../../GlobalStyles/Authetication";
import { InputAut } from "../../../../components/InputAut";
import { SubmitButton } from "../../../../components/SubmitButton";

export const RegisterAdm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        cpf: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/api/auth/register", formData, {
                headers: {
                    "Content-Type": "application/json", 
                }
            });
            console.log("Cadastro realizado com sucesso:", response.data);
            navigate("/"); 
        } catch (error) {
            console.error("Erro no cadastro:", error.response?.data || error.message);
            
        }
    };

    return (
        <Styled.AutDiv>
            <Styled.TituloAut>Cadastro</Styled.TituloAut>
            <Styled.AutForm onSubmit={handleSubmit}>
                <Styled.DoubleInputDiv>
                    <InputAut
                        type="text"
                        title="Nome de usuário"
                        placeholder="Digite seu nome de usuário"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <InputAut
                        type="text"
                        title="CPF"
                        placeholder="Digite seu CPF"
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
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <SubmitButton title="Cadastrar-se" />
            </Styled.AutForm>
            <Styled.PageLink to="/">Já possui conta?</Styled.PageLink>
        </Styled.AutDiv>
    );
};
