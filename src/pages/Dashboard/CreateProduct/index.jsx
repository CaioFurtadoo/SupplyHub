import * as Styled from "../../../GlobalStyles/Create";
import picture from "../../../assets/picture.svg";
import { useNavigate } from "react-router-dom";
import { InputAut } from "../../../components/InputAut";
import { SubmitButton } from "../../../components/SubmitButton";
import { useState } from "react";
import { CheckboxAut } from "../../../components/CheckboxAut";
import { SelectAut } from "../../../components/SelectAut";
import axios from "axios"; // certifique-se de que isso está importado


export const CreateProduct = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        produto: "",
        recebidor: "",
        dataRecebimento: "",
        dataFabricacao: "",
        dataValidade: "",
        peso: "",
        tipoPeso: "Fixo", 
        termos: false,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckbox = () => {
        setFormData((prev) => ({ ...prev, termos: !prev.termos }));
    };


const handleSubmit = async (event) => {
  event.preventDefault();

  const token = localStorage.getItem("token");

  const payload = {
    productName: formData.produto,
    cpf: formData.recebidor,
    receivedDate: formData.dataRecebimento,
    fabricationDate: formData.dataFabricacao,
    expiredDate: formData.dataValidade,
    peso: parseFloat(formData.peso),
    typePeso: formData.tipoPeso.toLowerCase(), // API espera lowercase
    terms: formData.termos,
  };

  try {
    console.log(payload);
    await axios.post("http://54.209.45.121/products", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    alert("Produto cadastrado com sucesso!");
    navigate("/produtos"); // Redireciona para a lista de produtos
  } catch (error) {
    console.error("Erro ao cadastrar produto:", error);
    alert("Erro ao cadastrar produto. Verifique os dados e tente novamente.");
  }
};

    // Função auxiliar para formatar datas
    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR');
    };

    return (
        <Styled.GeneralContainerCreate>
            <img src={picture} alt="Caixa de produtos" />
            <Styled.GeneralDivCreate>
                <Styled.TitleDiv>
                    <h1>Cadastrar Produto Recebido</h1>
                    <p>Preencha todas as informações do produto recebido</p>
                </Styled.TitleDiv>
                <Styled.CreateForm onSubmit={handleSubmit}>
                    <InputAut 
                        type="text" 
                        title="Nome do produto" 
                        placeholder="Ex: Notebook, Banana, Cadeira" 
                        name="produto" 
                        onChange={handleChange} 
                        value={formData.produto}
                        required
                    />
                    
                    <Styled.CreateDoubleInputDiv>
                        <InputAut 
                            type="text" 
                            title="CPF do recebidor" 
                            placeholder="Digite o CPF do recebidor" 
                            name="recebidor" 
                            onChange={handleChange} 
                            value={formData.recebidor}
                            required
                        />
                        <InputAut 
                            type="date" 
                            title="Data de recebimento" 
                            name="dataRecebimento" 
                            onChange={handleChange} 
                            value={formData.dataRecebimento}
                            required
                        />
                    </Styled.CreateDoubleInputDiv>
                    
                    <Styled.CreateDoubleInputDiv>
                        <InputAut 
                            type="date" 
                            title="Data de fabricação" 
                            name="dataFabricacao" 
                            onChange={handleChange} 
                            value={formData.dataFabricacao}
                            required
                        />
                        <InputAut 
                            type="date" 
                            title="Data de validade" 
                            name="dataValidade" 
                            onChange={handleChange} 
                            value={formData.dataValidade}
                        />
                    </Styled.CreateDoubleInputDiv>
                    
                    <Styled.CreateDoubleInputDiv>
                        <InputAut 
                            type="number" 
                            title="Peso (kg)" 
                            placeholder="Ex: 2.5" 
                            name="peso" 
                            onChange={handleChange} 
                            value={formData.peso}
                            step="0.01"
                            min="0"
                            required
                        />
                        <SelectAut
                            title="Tipo de peso"
                            name="tipoPeso"
                            value={formData.tipoPeso}
                            onChange={handleChange}
                            options={[
                                { value: "Fixo", label: "Fixo" },
                                { value: "Variável", label: "Variável" }
                            ]}
                            required
                        />
                    </Styled.CreateDoubleInputDiv>
                    
                    <CheckboxAut 
                        label="Confirmo que as informações estão corretas" 
                        checked={formData.termos} 
                        onChange={handleCheckbox}
                        required
                    />   
                    
                    <SubmitButton title="Cadastrar Produto"/>
                </Styled.CreateForm>
            </Styled.GeneralDivCreate>
        </Styled.GeneralContainerCreate>
    )
}