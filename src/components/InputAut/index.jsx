import * as Styled from "../InputAut/styles";

export const InputAut = ({ htmlfor, title, placeholder, type, name, value, onChange }) => {
    return (
        <Styled.GeneralInputContainer>
            <label htmlFor={htmlfor}>{title}</label>
            <Styled.InputAut
                id={htmlfor}
                required
                name={name}
                placeholder={placeholder}
                type={type}
                value={value || ""}
                onChange={onChange}
            />
        </Styled.GeneralInputContainer>
    );
};
