import styled from 'styled-components';

export const FuncionarioCardContainer = styled.div`
  margin: 1.2rem 0;
  padding: 30px;
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
  top: 30px;
  right: 30px;
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

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const FuncionarioCard = ({ funcionario, onRemover }) => {
  return (
    <FuncionarioCardContainer>
      <DivInfo>
        <p><strong>Nome:</strong> {funcionario.username}</p>
        <p><strong>CPF:</strong> {funcionario.cpf}</p>
        <p><strong>Email:</strong> {funcionario.email}</p>
        <p><strong>Senha:</strong> {funcionario.password}</p>
      </DivInfo>

      <RemoverButton onClick={() => onRemover(funcionario.id)}>
        remover
      </RemoverButton>
    </FuncionarioCardContainer>
  );
};