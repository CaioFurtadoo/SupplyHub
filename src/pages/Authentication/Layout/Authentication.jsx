import * as Styled from "../../../GlobalStyles/Authetication";
import sideImage from "../../../assets/SideImage.svg"
import { Outlet } from "react-router-dom";

const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulário enviado!");
};

export const Authentication = () => {

    return(
        <Styled.GeneralContainer>
            <Styled.GeneralAutDiv>
                <Outlet/>
            </Styled.GeneralAutDiv>
            <img className="SideImage" src={sideImage} alt="side image" />
        </Styled.GeneralContainer>
    )
}