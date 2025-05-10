// components/SelectAut.js
import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const SelectLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #49535E;
`;

export const SelectField = styled.select`
  padding: 12px 16px;
  border: 1px solid #C1C7CD;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #49535E;
  }
`;

export const SelectAut = ({ title, name, value, onChange, options, required = false }) => {
  return (
    <SelectContainer>
      <SelectLabel>{title}</SelectLabel>
      <SelectField 
        name={name} 
        value={value} 
        onChange={onChange}
        required={required}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectField>
    </SelectContainer>
  );
};