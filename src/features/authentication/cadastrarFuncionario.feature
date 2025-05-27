Funcionalidade: Cadastro de Funcionário por Gestor
  Como gestor do sistema
  Quero cadastrar novos funcionários
  Para que eles possam operar o sistema de estoque

  Cenário: Gestor cadastra funcionário com sucesso
    Dado que estou logado como gestor
    E estou na página de cadastro de funcionários
    Quando preencho os campos:
      | Campo         | Valor             |
      | Nome          | Maria Oliveira    |
      | CPF           | 987.654.321-00    |
      | Email         | maria@empresa.com |
      | Senha         | Senha@456         |
      | Confirma Senha| Senha@456         |
    E clico no botão "Cadastrar Funcionário"
    Então o funcionário deve ser registrado no sistema
    E devo ver a mensagem "Funcionário cadastrado com sucesso"

  Cenário: Usuário não-gestor tenta cadastrar funcionário
    Dado que estou logado como funcionário comum
    Quando tento acessar a página de cadastro de funcionários
    Então devo ver a mensagem "Acesso não autorizado"
    E não consigo visualizar o formulário de cadastro
