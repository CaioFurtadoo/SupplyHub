import { useState } from "react";
import styled from "styled-components";
import { Check } from "lucide-react";

const CheckboxContainer = styled.label`
  display: flex;
  margin-top: 24px;
  margin-bottom: 4px;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  color: #1d1f21;
  gap: 8px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledCheckbox = styled.div`
  width: 14px;
  height: 14px;
  border: 1px solid #1d1f21;
  display: flex;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  ${(props) =>
    props.checked &&
    `
      background-color: #007bff;
      border-color: #007bff;
      color: white;
    `}
`;

export const CheckboxAut = ({ label }) => {
    
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxContainer>
      <HiddenCheckbox
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <StyledCheckbox checked={checked}>
        {checked && <Check size={14} color="white" />}
      </StyledCheckbox>
      {label}
    </CheckboxContainer>
  );
}
