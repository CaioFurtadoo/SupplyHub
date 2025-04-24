import * as Styled from "../../../GlobalStyles/Create";
import picture from "../../../assets/picture.svg";
import { useNavigate } from "react-router-dom";
import { InputAut } from "../../../components/InputAut";
import { SubmitButton } from "../../../components/SubmitButton";
import { useState } from "react";
import { CheckboxAut } from "../../../components/CheckboxAut";


export const ExportProduct = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        expedidor: "",
        cpf: "",
        destino: "",
        registro: "",
        expedição: "",
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
        console.log("Dados do expedimento:", formData);
        navigate("/produtos");
    };

    return(
        <Styled.GeneralContainerCreate>
            <img src={picture} alt="picture box image" />
            <Styled.GeneralDivCreate>
                <Styled.TitleDiv>
                    <h1>Lote Expedido</h1>
                    <p>Informações gerais do lote expedido</p>
                </Styled.TitleDiv>
                <Styled.CreateForm onSubmit={handleSubmit}>
                    <Styled.CreateDoubleInputDiv>
                        <InputAut type="text" title="Nome do Expedidor" placeholder="Digite o nome do expedidor" name="expedidor" onChange={handleChange} value={formData.expedidor}/>
                        <InputAut type="text" title="CPF / RG" placeholder="Digite o CPF / RG do expedidor" name="cpf" onChange={handleChange} value={formData.cpf}/>
                    </Styled.CreateDoubleInputDiv>
                    <InputAut type="text" title="Destino de expedição" placeholder="Digite o destino de expedição" name="destino" onChange={handleChange} value={formData.destino}/>
                    <InputAut type="text" title="ID de registro do lote" placeholder="Digite o n de registro do lote" name="registro" onChange={handleChange} value={formData.registro}/>
                    <InputAut type="text" title="Data de expedição" placeholder="Digite a data de expedição" name="expedição" onChange={handleChange} value={formData.expedição}/>                      
                    <CheckboxAut label="Concordo com os termos" checked={formData.termos} onChange={handleCheckbox} />   
                    <SubmitButton title="Expedir"/>
                </Styled.CreateForm>
            </Styled.GeneralDivCreate>
        </Styled.GeneralContainerCreate>
    )
}