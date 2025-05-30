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
  
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false); // Simulando que não está carregando pois usaremos dados locais

  // Simulando a chamada ao backend
  const fetchProducts = async () => {
  setLoading(true);
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://54.209.45.121/products/received", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const receivedData = response.data.map((item, index) => ({
      idOriginal: item.id,
      prod: item.productName,
      func: item.employee,
      fab: item.fabricationDate,
      val: item.expiredDate,
      rec: item.receivedDate,
      peso: `${item.peso.toFixed(2)}kg`,
      tpPeso: item.typePeso === "fixo" ? "Fixo" : "Variável",
      status: "recebido",
    }));

    setAllData(receivedData);

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

  if (selectedData.length === 0) {
    alert("Selecione pelo menos um produto para expedir.");
    return;
  }

  try {
    const token = localStorage.getItem("token");

    const idsParaExpedir = selectedData.map((produto) => produto.idOriginal);
    console.log(idsParaExpedir);
    await axios.put(
      "http://54.209.45.121/products/dispatch",
      idsParaExpedir,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Atualiza localmente os produtos para status "expedido"
    setAllData((prevData) =>
      prevData.map((item) =>
        selectedData.some((sel) => sel.id === item.id)
          ? { ...item, status: "expedido" }
          : item
      )
    );

    alert("Produtos expedidos com sucesso!");
    navigate("/produtos/expedidos");
  } catch (error) {
    console.error("Erro ao expedir produtos:", error);
    alert("Erro ao expedir os produtos. Verifique sua conexão ou tente novamente.");
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