import styled from "styled-components";
import { NavLink, Link } from "react-router";

export const GeneralContainer = styled.section`
    display: flex;
    .SideImage {
        width: 50vw;
        height: 100vh;
        object-fit: cover;
    }
    .active {
        background-color: #cfddec;
    }
`;

export const GeneralAutDiv = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AutDiv = styled.div`
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 48px;
`;

export const TituloAut = styled.h1`
    font-weight: bold;
    font-size: 42px;
`;

export const AutForm = styled.form`
    display: flex;
    gap: 16px;
    flex-direction: column;
    width: 40vw;
`;

export const DoubleInputDiv = styled.div`
    display: flex;
    gap: 16px;
    width: 100%;
    align-items: center;
`;

export const PageLink = styled(Link)`
    color: #001d6c;
    font-size: 14px;
    text-decoration: none;
    transition: 300ms;
`;

export const NavContainerLink = styled.nav`
    display: flex;
    gap: 16px;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #dde1e6;
    padding-bottom: 48px;
`;

export const NavLinkSt = styled(NavLink)`
    padding: 16px 0px;
    border: 2px solid #0f62fe;
    color: #0f62fe;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    flex: 1;
`;
