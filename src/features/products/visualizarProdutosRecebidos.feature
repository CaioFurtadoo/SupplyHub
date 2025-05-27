Funcionalidade: Visualização de Produtos Recebidos
  Como usuário do sistema
  Quero visualizar produtos recebidos
  Para acompanhar as entradas no estoque

  Cenário: Visualizar lista completa
    Dado que estou na página de produtos recebidos
    Quando a página é carregada
    Então devo ver uma tabela com as colunas:
      | Nome do Produto |
      | Recebidor       |
      | Data Recebimento|
      | Data Fabricação |
      | Data Validade   |
      | Peso            |
      | Tipo de Peso    |
    E pelo menos 10 itens por página

  Cenário: Ordenar por data de recebimento
    Dado que estou na página de produtos recebidos
    Quando clico no cabeçalho "Data Recebimento"
    Então os itens devem ser ordenados por data (mais recente primeiro)
