Funcionalidade: Cadastro de Produto Expedido
  Como usuário do sistema
  Quero cadastrar produtos expedidos
  Para registrar as saídas do estoque

  Cenário: Expedição bem-sucedida
    Dado que estou na página de produtos recebidos
    Quando seleciono os produtos:
      | Nome do Produto |
      | Arroz Integral  |
      | Feijão Preto    |
    E clico no botão "Expedir Selecionados"
    E preencho o CPF do expedidor "987.654.321-00"
    E confirmo a ação
    Então os produtos devem ser movidos para a tabela de expedidos
    E devem ter a data de expedição atual
    E o expedidor deve ser o usuário logado

  Cenário: Tentativa sem produtos selecionados
    Dado que estou na página de produtos recebidos
    Quando não seleciono nenhum produto
    E clico no botão "Expedir Selecionados"
    Então devo ver a mensagem "Selecione ao menos um produto para expedir"
    E nenhum produto deve ser movido