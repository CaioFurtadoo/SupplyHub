Funcionalidade: Cadastro de Produto Recebido
  Como usuário do sistema
  Quero cadastrar produtos recebidos
  Para manter o estoque atualizado

  Cenário: Cadastro bem-sucedido
    Dado que estou na página de produtos recebidos
    Quando clico no botão "Novo Recebimento"
    E preencho o modal com:
      | Campo             | Valor            |
      | Nome do Produto   | Arroz Integral   |
      | CPF do Recebidor  | 123.456.789-00   |
      | Data Recebimento  | 01/01/2024       |
      | Data Fabricação   | 01/12/2023       |
      | Data Validade     | 01/12/2024       |
      | Peso              | 5                |
      | Tipo de Peso      | Fixo             |
    E clico em "Confirmar"
    Então o produto deve aparecer na tabela de recebidos
    E o modal deve ser fechado

  Cenário: Tentativa com campos obrigatórios em branco
    Dado que abri o modal de novo recebimento
    Quando deixo o campo "Nome do Produto" em branco
    E tento confirmar
    Então devo ver a mensagem "Nome do Produto é obrigatório"
    E o modal não deve fechar
