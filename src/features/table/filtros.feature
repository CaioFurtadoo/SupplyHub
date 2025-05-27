Funcionalidade: Filtro e Redimensionamento de Tabelas
  Como usuário do sistema
  Quero filtrar e redimensionar tabelas de produtos
  Para visualizar os dados da maneira mais conveniente

  Cenário: Filtrar produtos por nome contendo
    Dado que estou na página de produtos recebidos
    Quando seleciono o filtro "Nome do Produto"
    E escolho a condição "contains"
    E insiro o valor "arroz"
    E clico em "Aplicar Filtro"
    Então a tabela deve mostrar apenas produtos cujo nome contenha "arroz"

  Cenário: Redimensionar coluna
    Dado que estou na página de produtos expedidos
    Quando arrasto a borda da coluna "Data de Expedição"
    E solto após aumentar em 50 pixels
    Então a coluna deve ter sua largura aumentada em 50 pixels
