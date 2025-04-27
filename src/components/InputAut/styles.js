import styled from "styled-components";

export const GeneralInputContainer = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
    width: 100%;

    label {
        font-size: 14px;
        color: #21272a;
    }
`;

export const InputAut = styled.input`
    padding: 16px 13px;
    border-radius: 6px 6px 0px 0px;
    box-shadow: 0px 2px 6px #e3d6d6;
    background-color: #f2f4f8;
    border: none;
    font-size: 16px;
    border-bottom: 1px solid #c1c7cd;
    outline-style: none;
    flex: 1;
`;
