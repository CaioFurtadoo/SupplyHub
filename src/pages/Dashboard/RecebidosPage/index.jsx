import { StrictMode, useRef, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { themeAlpine } from 'ag-grid-community';
import axios from 'axios';

ModuleRegistry.registerModules([AllCommunityModule]);

const PageContainer = styled.div`
  padding: 26px;
`;

const ButtonList = styled.ul`
  display: flex;
  padding-top: 26px;
  gap: 26px;
  list-style: none;
`;

const ButtonItem = styled.li``;

const BaseButton = styled.button`
  color: white;
  padding: 16px 16px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 6px;
  border: none;
  font-weight: bold;
`;

const DeleteButton = styled(BaseButton)`
  background-color: #939CA5;
`;

const AddButton = styled(BaseButton)`
  background-color: #adb2b8; 
  color: #ffffff
`;

const CreateButton = styled(BaseButton)`
  background-color: #49535E;
`;

const GridContainer = styled.div`
  height: 700px;
  width: 100%;
`;

export const RecebidosPage = () => {
  const gridRef = useRef();
  const navigate = useNavigate();
  
  // Dados de exemplo (simulando o que viria do backend)
  const exampleProducts = [
    { id: 1, prod: "banana", func: "João Silva", rec: "01/01/2025", fab: "01/12/2024", val: "01/06/2025", peso: "10.00kg", tpPeso: "Variável", status: "recebido" },
    { id: 2, prod: "maçã", func: "Maria Souza", rec: "02/01/2025", fab: "15/12/2024", val: "10/06/2025", peso: "11.00kg", tpPeso: "Variável", status: "recebido" },
    { id: 3, prod: "notebook", func: "Carlos Oliveira", rec: "03/01/2025", fab: "20/11/2024", val: "01/01/2026", peso: "2.50kg", tpPeso: "Fixo", status: "recebido" },
    { id: 4, prod: "cadeira", func: "Ana Santos", rec: "04/01/2025", fab: "10/12/2024", val: "01/01/2030", peso: "8.00kg", tpPeso: "Fixo", status: "recebido" },
    { id: 5, prod: "mouse", func: "Pedro Costa", rec: "05/01/2025", fab: "01/01/2025", val: "01/01/2027", peso: "0.30kg", tpPeso: "Fixo", status: "recebido" },
    { id: 6, prod: "teclado", func: "Fernanda Lima", rec: "06/01/2025", fab: "05/01/2025", val: "01/01/2028", peso: "0.80kg", tpPeso: "Fixo", status: "recebido" },
    { id: 7, prod: "monitor", func: "Ricardo Alves", rec: "07/01/2025", fab: "15/12/2024", val: "01/01/2029", peso: "5.50kg", tpPeso: "Fixo", status: "recebido" },
    { id: 8, prod: "café", func: "Juliana Pereira", rec: "08/01/2025", fab: "01/12/2024", val: "01/12/2025", peso: "1.00kg", tpPeso: "Variável", status: "recebido" },
    { id: 9, prod: "leite", func: "Marcos Rocha", rec: "09/01/2025", fab: "20/12/2024", val: "20/02/2025", peso: "1.50kg", tpPeso: "Variável", status: "recebido" },
    { id: 10, prod: "arroz", func: "Patrícia Nunes", rec: "10/01/2025", fab: "01/11/2024", val: "01/11/2026", peso: "5.00kg", tpPeso: "Variável", status: "recebido" },
    { id: 11, prod: "feijão", func: "Gustavo Mendes", rec: "11/01/2025", fab: "15/11/2024", val: "15/11/2026", peso: "2.00kg", tpPeso: "Variável", status: "expedido" },
    { id: 12, prod: "óleo", func: "Camila Freitas", rec: "12/01/2025", fab: "01/10/2024", val: "01/10/2025", peso: "0.90kg", tpPeso: "Variável", status: "expedido" },
    { id: 13, prod: "açúcar", func: "Lucas Barbosa", rec: "13/01/2025", fab: "01/09/2024", val: "01/09/2026", peso: "5.00kg", tpPeso: "Variável", status: "expedido" },
    { id: 14, prod: "sal", func: "Amanda Castro", rec: "14/01/2025", fab: "01/08/2024", val: "01/08/2027", peso: "1.00kg", tpPeso: "Variável", status: "expedido" },
    { id: 15, prod: "farinha", func: "Roberto Dias", rec: "15/01/2025", fab: "01/07/2024", val: "01/07/2026", peso: "2.50kg", tpPeso: "Variável", status: "expedido" },
  ];

  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false); // Simulando que não está carregando pois usaremos dados locais

  // Simulando a chamada ao backend
  const fetchProducts = async () => {
    setLoading(true);
    try {
      // Em uma aplicação real, seria: const response = await axios.get('/api/products');
      // Simulando delay de rede
      await new Promise(resolve => setTimeout(resolve, 500));
      setAllData(exampleProducts);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [colDefs] = useState([
    { field: "prod", headerName: "Produto", sortable: true, filter: true, checkboxSelection: true, headerCheckboxSelection: true },
    { field: "func", headerName: "Recebidor", sortable: true, filter: true },
    { field: "rec", headerName: "Data de recebimento", sortable: true, filter: true },
    { field: "fab", headerName: "Data de fabricação", sortable: true, filter: true },
    { field: "val", headerName: "Data de validade", sortable: true, filter: true },
    { field: "peso", headerName: "Peso", sortable: true, filter: true },
    { field: "tpPeso", headerName: "Tipo de peso", sortable: true, filter: true },
  ]);

  const defaultColDef = {
    flex: 1,
    minWidth: 100,
    resizable: true,
  };

  const rowHeight = 45;

  const handleExpedirProduto = async () => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    
    try {
      // Simulando chamada ao backend para cada produto selecionado
      await Promise.all(selectedData.map(product => {
        // Em uma aplicação real, seria: axios.put(`/api/products/${product.id}`, { status: "expedido" })
        console.log(`Produto ${product.id} (${product.prod}) marcado como expedido`);
        return new Promise(resolve => setTimeout(resolve, 200));
      }));
      
      // Atualiza o estado local
      setAllData(prevData => 
        prevData.map(item =>
          selectedData.some(selected => selected.id === item.id)
            ? { ...item, status: "expedido" }
            : item
        )
      );
      
      // Mostra feedback para o usuário
      alert(`${selectedData.length} produto(s) marcado(s) como expedido(s) com sucesso!`);
    } catch (error) {
      console.error('Erro ao expedir produtos:', error);
      alert('Ocorreu um erro ao expedir os produtos. Por favor, tente novamente.');
    }
  };

  const handleExportCSV = () => {
    gridRef.current.api.exportDataAsCsv();
  };

  const handleCadastrarProduto = () => {
    navigate("/produtos/receber");
  };

  if (loading) {
    return <PageContainer>Carregando produtos...</PageContainer>;
  }

  return (
    <PageContainer>
      <GridContainer className="ag-theme-alpine">
        <AgGridReact
          ref={gridRef}
          rowHeight={rowHeight}
          rowData={allData.filter((item) => item.status === "recebido")}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={10}
          rowSelection="multiple"
        />
      </GridContainer>
      <ButtonList>
        <ButtonItem>
          <AddButton onClick={handleCadastrarProduto}>Cadastrar Produto</AddButton>
        </ButtonItem>
        <ButtonItem>
          <DeleteButton onClick={handleExpedirProduto}>Expedir Produto</DeleteButton>
        </ButtonItem>
        <ButtonItem>
          <CreateButton onClick={handleExportCSV}>Exportar CSV</CreateButton>
        </ButtonItem>
      </ButtonList>
    </PageContainer>
  );
};