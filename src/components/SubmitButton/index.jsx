import * as Styled from "../SubmitButton/styles";


export const SubmitButton = ({title, onSubmit}) => {
    return(
        <Styled.ButtonSubmit onSubmit={onSubmit}>
            {title}
        </Styled.ButtonSubmit>
    )
}