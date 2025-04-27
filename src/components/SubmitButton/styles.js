import styled from "styled-components";

export const ButtonSubmit = styled.button`
    padding: 18px 0;
    border: none;
    border-radius: 6px;
    color: white;
    font-size: 20px;
    font-weight: 500;
    background-color: #0f62fe;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    transition: 300ms;
    &:hover {
        transform: scale(1.02);
    }
`;
