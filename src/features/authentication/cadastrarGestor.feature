Funcionalidade: Cadastro de Gestor
  Como administrador do sistema
  Quero cadastrar um novo gestor
  Para que ele possa gerenciar funcionários e estoque

  Cenário: Cadastro bem-sucedido de gestor
    Dado que estou na página de cadastro de gestor
    Quando preencho os campos:
      | Campo         | Valor             |
      | Nome          | João Silva        |
      | CPF           | 123.456.789-00    |
      | Email         | joao@empresa.com  |
      | Senha         | Senha@123         |
      | Confirma Senha| Senha@123         |
    E clico no botão "Cadastrar"
    Então o gestor deve ser registrado no sistema
    E devo ver a mensagem "Gestor cadastrado com sucesso"

  Cenário: Tentativa de cadastro com email já existente
    Dado que existe um gestor com email "joao@empresa.com"
    Quando tento cadastrar um novo gestor com o mesmo email
    Então devo ver a mensagem "Email já cadastrado"
    E o gestor não deve ser registrado
