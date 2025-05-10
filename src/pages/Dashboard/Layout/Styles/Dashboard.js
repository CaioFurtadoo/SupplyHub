import styled from "styled-components";
import { NavLink, Link } from "react-router";

export const GeneralContainer = styled.section`
    display: flex;
    gap: 24px;
`;

export const SideBarDiv = styled.div`
    position: fixed;
    padding: 24px 16px;
    left: 0;
    top: 0;
    height: 100vh;
    width: 333px;
    border-left: 1px solid #dde1e6;
    box-shadow: inset -5px 0 10px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const LogOutSideBar = styled(NavLink)`
    display: flex;
    gap: 12px;
    align-items: center;
    font-size: 16px;
    margin-left: 12px;
    margin-bottom: 24px;
    text-decoration: none;
    color: #21272a;

    &:hover {
        cursor: pointer;
    }

    img {
        width: 24px;
    }
`;

export const GeneralIconsContainer = styled.div`
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .logo {
        width: 180px;
    }
`;

export const IconsDiv = styled.ul`
    display: flex;
    list-style: none;

    img {
        width: 24px;
    }

    :nth-child(1) img {
        width: 20px;
        border-radius: 0;
    }

    li {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 300ms;
    }

    li:hover {
        transform: translateY(-2px);
        cursor: pointer;
    }

    :nth-child(1) {
        background-color: #f2f4f8;
        border-radius: 100%;
    }

    :nth-child(3) {
        position: relative;
    }
`;

export const DashboardMenu = styled.ul`
    display: flex;
    list-style: none;
    flex-direction: column;
    align-items: center;

    li {
        display: flex;
        padding: 16px 8px;
        gap: 12px;
        width: 100%;
        transition: 200ms;
        color: rgb(45, 50, 53);
        font-size: 18px;
        font-weight: bold;
        align-items: center;
        border-top: 1px solid #f2f4f8;
    }

    :nth-child(3) {
        border-bottom: 1px solid #f2f4f8;
    }

    li img {
        width: 30px;
    }
    li:hover {
        background-color: #f2f4f8;
        cursor: pointer;
    }
`;

export const SideBarLink = styled(NavLink)`
    display: flex;
    padding: 16px 8px;
    gap: 12px;
    width: 100%;
    color: rgb(45, 50, 53);
    font-size: 18px;
    font-weight: bold;
    align-items: center;
    text-decoration: none;
    border-top: 1px solid #f2f4f8;
    transition: background-color 200ms;

    img {
        width: 30px;
    }

    &:hover {
        background-color: #f2f4f8;
    }

    &.active {
        background-color: #f2f4f8;
    }
`;

export const DashboardDiv = styled.div`
    margin-left: 332px;
    width: calc(100% - 332px);
    display: flex;
    height: 100vh;
    flex-direction: column;
    background-color: #f2f4f8;
`;

export const Header = styled.header`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 332px;
    flex-grow: 1;
    width: calc(100% - 332px);
    z-index: 1000;
    display: flex;
    padding: 24px;
    flex-direction: column;
    gap: 24px;
    background-color: #f2f4f8;

    h1 {
        color: #21272a;
        font-weight: bold;
        font-size: 42px;
        letter-spacing: -1px;
    }
    .link {
        text-decoration: none;
        color: #21272a;
    }

    .link.active {
        color: #001d6c;
        border-bottom: 2px solid #001d6c;
        cursor: pointer;
    }
`;

export const UlHeader = styled.ul`
    display: flex;
    gap: 24px;
    list-style: none;
    align-items: center;
    font-weight: 600;
    color: rgb(45, 50, 53);
    border-bottom: 1px solid #dde1e6;

    li {
        padding: 16px 0px;
        font-size: 18px;
        display: flex;
        gap: 5px;
        align-items: center;
    }

    li:hover {
        color: #001d6c;
        border-bottom: 2px solid #001d6c;
        cursor: pointer;
    }

    :nth-child(3) {
        margin: 0 25px;
    }

    :nth-child(4) {
        padding: 0;
        padding-bottom: 2px;
    }

    :nth-child(4):hover {
        border: none;
    }
`;

export const NumberLiHeader = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #697077;
    color: white;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 200;
`;

export const NumberLiSideBar = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #da1e28;
    color: white;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 200;
    position: absolute;
    top: 11px;
    right: 11px;
`;

export const Content = styled.main`
    margin-top: 150px;
    height: 100%;
`;
