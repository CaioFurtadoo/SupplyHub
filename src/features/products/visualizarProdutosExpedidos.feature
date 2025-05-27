Funcionalidade: Visualização de Produtos Expedidos
  Como usuário do sistema
  Quero visualizar produtos expedidos
  Para acompanhar as saídas do estoque

  Cenário: Visualizar lista completa
    Dado que estou na página de produtos expedidos
    Quando a página é carregada
    Então devo ver uma tabela com as colunas:
      | Nome do Produto |
      | Expedidor       |
      | Data Expedição  |
      | Data Fabricação |
      | Data Validade   |
      | Peso            |
      | Tipo de Peso    |
    E pelo menos 10 itens por página

  Cenário: Filtrar por expedidor
    Dado que estou na página de produtos expedidos
    Quando aplico um filtro "Contains" equals "Maria Oliveira"
    Então a tabela deve mostrar apenas itens expedidos por "Maria Oliveira"
