import * as Styled from "../../../GlobalStyles/Create";
import picture from "../../../assets/picture.svg";
import { useNavigate } from "react-router-dom";
import { InputAut } from "../../../components/InputAut";
import { SubmitButton } from "../../../components/SubmitButton";
import { useState } from "react";
import { CheckboxAut } from "../../../components/CheckboxAut";


export const CreateProduct = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        recebidor: "",
        cpf: "",
        produto: "",
        fabricação: "",
        vencimento: "",
        termos: false,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckbox = () => {
        setFormData((prev) => ({ ...prev, termos: !prev.termos }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Dados do recebimento:", formData);
        navigate("expedir");
    };

    return(
        <Styled.GeneralContainerCreate>
            <img src={picture} alt="picture box image" />
            <Styled.GeneralDivCreate>
                <Styled.TitleDiv>
                    <h1>Produto Recebido</h1>
                    <p>Informações gerais do produto recebido</p>
                </Styled.TitleDiv>
                <Styled.CreateForm onSubmit={handleSubmit}>
                    <Styled.CreateDoubleInputDiv>
                        <InputAut type="text" title="Nome do recebidor" placeholder="Digite o nome do recebidor" name="recebidor" onChange={handleChange} value={formData.recebidor}/>
                        <InputAut type="text" title="CPF / RG" placeholder="Digite o CPF / RG do recebidor" name="cpf" onChange={handleChange} value={formData.cpf}/>
                    </Styled.CreateDoubleInputDiv>
                    <InputAut type="text" title="Titulo do produto" placeholder="Digite o titulo do produto" name="produto" onChange={handleChange} value={formData.produto}/>
                    <InputAut type="text" title="Data de fabricação" placeholder="Digite a data de fabricação" name="fabricação" onChange={handleChange} value={formData.fabricação}/>
                    <InputAut type="text" title="Data de vencimento" placeholder="Digite a data de vencimento" name="vencimento" onChange={handleChange} value={formData.vencimento}/>                      
                    <CheckboxAut label="Concordo com os termos" checked={formData.termos} onChange={handleCheckbox} />   
                    <SubmitButton title="Receber"/>
                </Styled.CreateForm>
            </Styled.GeneralDivCreate>
        </Styled.GeneralContainerCreate>
    )
}