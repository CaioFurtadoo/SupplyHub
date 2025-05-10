import { StrictMode, useRef, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { themeAlpine } from 'ag-grid-community';
import axios from 'axios';

ModuleRegistry.registerModules([AllCommunityModule]);

// Reutilizando os mesmos estilos da RecebidosPage
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

const AddButton = styled(BaseButton)`
  background-color: #939CA5;
`;

const CreateButton = styled(BaseButton)`
  background-color: #49535E;
`;

const GridContainer = styled.div`
  height: 700px;
  width: 100%;
`;

export const ExpedidosPage = () => {
  const gridRef = useRef();
  const navigate = useNavigate();
  
  // Dados de exemplo (os mesmos da RecebidosPage)
  const exampleProducts = [
    { id: 1, prod: "banana", func: "João Silva", rec: "01/01/2025", fab: "01/12/2024", val: "01/06/2025", peso: "10.00kg", tpPeso: "Variável", status: "recebido" },
    { id: 2, prod: "maçã", func: "Maria Souza", rec: "02/01/2025", fab: "15/12/2024", val: "10/06/2025", peso: "11.00kg", tpPeso: "Variável", status: "recebido" },
    { id: 11, prod: "feijão", func: "Gustavo Mendes", rec: "11/01/2025", fab: "15/11/2024", val: "15/11/2026", peso: "2.00kg", tpPeso: "Variável", status: "expedido" },
    { id: 12, prod: "óleo", func: "Camila Freitas", rec: "12/01/2025", fab: "01/10/2024", val: "01/10/2025", peso: "0.90kg", tpPeso: "Variável", status: "expedido" },
    { id: 13, prod: "açúcar", func: "Lucas Barbosa", rec: "13/01/2025", fab: "01/09/2024", val: "01/09/2026", peso: "5.00kg", tpPeso: "Variável", status: "expedido" },
    { id: 14, prod: "sal", func: "Amanda Castro", rec: "14/01/2025", fab: "01/08/2024", val: "01/08/2027", peso: "1.00kg", tpPeso: "Variável", status: "expedido" },
    { id: 15, prod: "farinha", func: "Roberto Dias", rec: "15/01/2025", fab: "01/07/2024", val: "01/07/2026", peso: "2.50kg", tpPeso: "Variável", status: "expedido" },
  ];

  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);

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
    { field: "prod", headerName: "Produto", sortable: true, filter: true, },
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
          rowData={allData.filter((item) => item.status === "expedido")}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={10}
        />
      </GridContainer>
      <ButtonList>
        <ButtonItem>
          <AddButton onClick={handleCadastrarProduto}>Cadastrar Produto</AddButton>
        </ButtonItem>
        <ButtonItem>
          <CreateButton onClick={handleExportCSV}>Exportar CSV</CreateButton>
        </ButtonItem>
      </ButtonList>
    </PageContainer>
  );
};