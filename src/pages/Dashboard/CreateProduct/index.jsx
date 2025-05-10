import * as Styled from "../../../GlobalStyles/Create";
import picture from "../../../assets/picture.svg";
import { useNavigate } from "react-router-dom";
import { InputAut } from "../../../components/InputAut";
import { SubmitButton } from "../../../components/SubmitButton";
import { useState } from "react";
import { CheckboxAut } from "../../../components/CheckboxAut";
import { SelectAut } from "../../../components/SelectAut";

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

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Formatar datas para o padrão exibido nas tabelas
        const formattedData = {
            ...formData,
            status: "recebido", // Status padrão para novos produtos
            // rec: formatDate(formData.dataRecebimento),
            // fab: formatDate(formData.dataFabricacao),
            // val: formatDate(formData.dataValidade),
            tpPeso: formData.tipoPeso,
            peso: `${formData.peso}` // Adiciona 'kg' ao peso
        };
        
        console.log("Dados do produto:", formattedData);
        // Aqui você faria a chamada para a API para criar o produto
        // await axios.post('/api/products', formattedData);
        
        navigate("/produtos"); // Redireciona para a lista de recebidos
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
                            title="Nome do recebidor" 
                            placeholder="Digite o nome do recebidor" 
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