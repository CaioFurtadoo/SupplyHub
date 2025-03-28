import { useState } from "react";
import * as Styled from "../InputAut/styles";

export const InputAut = ({htmlfor, title, placeholder, type}) => {

    const [value, setValue] = useState("");
    console.log(value);

    return(
        <Styled.GeneralInputContainer>
            <label htmlFor={htmlfor}>{title}</label>
            <Styled.InputAut
                id={htmlfor}
                required
                name={htmlfor}
                placeholder={placeholder}
                type={type}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
        </Styled.GeneralInputContainer>
    )
}