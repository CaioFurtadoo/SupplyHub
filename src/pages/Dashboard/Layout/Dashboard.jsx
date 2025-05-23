import * as Styled from "./Styles/Dashboard";
import { Outlet } from "react-router-dom";
import dots from "../../../assets/dots.svg";
import logo from "../../../assets/logo.svg";
import profile from "../../../assets/profile.svg";
import config from "../../../assets/config.svg";
import alerts from "../../../assets/alerts.svg";
import products from "../../../assets/folders.svg";
import tags from "../../../assets/tags.svg";
import users from "../../../assets/users.svg";
import logout from "../../../assets/logout.svg";
import { NavLink, Link } from "react-router";

export const Dashboard = () => {
    return(
        <Styled.GeneralContainer>
            <Styled.SideBarDiv>
                <Styled.SideBarContainer>
                    <Styled.GeneralIconsContainer>
                        <img className="logo" src={logo} alt="logo img" />
                        <Styled.IconsDiv>
                            <li><img src={profile} alt="profile img" /></li>
                            <li><img src={config} alt="config img" /></li>
                            <li><Link to="/alertas"><img src={alerts} alt="alerts img" /></Link><Styled.NumberLiSideBar>9</Styled.NumberLiSideBar></li>
                        </Styled.IconsDiv>
                    </Styled.GeneralIconsContainer>
                    <Styled.DashboardMenu>
                        <Styled.SideBarLink to="/produtos">
                            <img src={products} alt="" />
                            Produtos
                        </Styled.SideBarLink>

                        <Styled.SideBarLink to="/alertas">
                            <img src={tags} alt="" />
                            Alertas
                        </Styled.SideBarLink>

                        <Styled.SideBarLink to="/gestor">
                            <img src={users} alt="" />
                            Gestor
                        </Styled.SideBarLink>
                    </Styled.DashboardMenu>                    
                </Styled.SideBarContainer>
                <Styled.LogOutSideBar to="/">
                    <img src={logout} alt="logout img" />Sair
                </Styled.LogOutSideBar>
            </Styled.SideBarDiv>
            <Styled.DashboardDiv>
                <Styled.Header>
                    <h1>Dashboard</h1>
                    <Styled.UlHeader>
                    <Link className="link" to="produtos/expedidos"><li>Produtos Expedidos<Styled.NumberLiHeader>2</Styled.NumberLiHeader></li></Link>
                    <Link className="link" to="produtos"><li>Produtos recebidos<Styled.NumberLiHeader>2</Styled.NumberLiHeader></li></Link>
                        <li>Alertas</li>
                        <li><img src={dots} alt="" /></li>
                    </Styled.UlHeader>
                </Styled.Header>
                <Styled.Content>
                    <Outlet/>
                </Styled.Content>
            </Styled.DashboardDiv>
        </Styled.GeneralContainer>
    )
}