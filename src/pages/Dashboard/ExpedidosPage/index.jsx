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
  
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://54.209.45.121/products/dispatched", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const dispatchedData = response.data.map((item, index) => ({
        id: index + 1,
        prod: item.productName,
        func: item.employee,
        fab: new Date(item.fabricationDate).toISOString().split('T')[0],
        val: new Date(item.expiredDate).toISOString().split('T')[0],
        rec: new Date(item.dispatchedDate).toISOString().split('T')[0],
        peso: `${item.peso.toFixed(2)}kg`,
        tpPeso: item.typePeso === "fixo" ? "Fixo" : "Variável",
        status: "expedido",
      }));
  
      setAllData(dispatchedData);
    } catch (error) {
      console.error('Erro ao buscar produtos recebidos:', error);
      alert('Erro ao carregar produtos recebidos.');
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchProducts();
  }, []);

  const [colDefs] = useState([
    { field: "prod", headerName: "Produto", sortable: true, filter: true, },
    { field: "func", headerName: "Expedidor", sortable: true, filter: true },
    { field: "rec", headerName: "Data de expedimento", sortable: true, filter: true },
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