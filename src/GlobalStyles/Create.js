import styled from "styled-components";
import { NavLink, Link } from "react-router";

export const GeneralContainerCreate = styled.section`
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
    height: 100%;
    img {
        width: 460px;
    }
`;

export const GeneralDivCreate = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: #21272a;

    h1 {
        font-weight: bold;
        font-size: 42px;
    }
    p {
        font-size: 18px;
    }
`;

export const CreateForm = styled.form`
    display: flex;
    gap: 16px;
    flex-direction: column;
    width: 45vw;
`;

export const CreateDoubleInputDiv = styled.div`
    display: flex;
    gap: 16px;
    width: 100%;
    align-items: center;
`;
