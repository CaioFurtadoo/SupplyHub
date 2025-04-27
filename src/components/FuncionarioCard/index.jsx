import styled from 'styled-components';

export const FuncionarioCardContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
  background:white;
  border-radius:10px;
  p{
    color:#697077; 
  }
  
`;

export const RemoverButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  font-weight:bold;

  &:hover {
    color:red;
    text-decoration: underline;
  }
`;

export const FuncionarioCard = ({ funcionario, onRemover }) => {
  return (
    <FuncionarioCardContainer>
      <p><strong>Nome:</strong> {funcionario.nome}</p>
      <p><strong>CPF:</strong> {funcionario.cpf}</p>
      <p><strong>Email:</strong> {funcionario.email}</p>
      <p><strong>Senha:</strong> {funcionario.senha}</p>
      <RemoverButton onClick={() => onRemover(funcionario.id)}>
        remover
      </RemoverButton>
    </FuncionarioCardContainer>
  );
};