Funcionalidade: Exportação de Tabelas para CSV
  Como usuário do sistema
  Quero exportar tabelas para CSV
  Para analisar os dados em planilhas

  Cenário: Exportar produtos recebidos
    Dado que estou na página de produtos recebidos
    Quando clico no botão "Exportar para CSV"
    Então um arquivo chamado "produtos_recebidos_[data].csv" deve ser baixado
    E o arquivo deve conter todas as colunas visíveis na tabela

  Cenário: Exportar produtos filtrados
    Dado que apliquei um filtro para produtos com validade em "2024"
    Quando clico no botão "Exportar para CSV"
    Então o arquivo deve conter apenas os produtos que atendem ao filtro
