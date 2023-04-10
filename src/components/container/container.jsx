import styled from "styled-components"

const ContainerWrapper = styled.main`
    position: absolute;
    height: 500px;
    width: 400px;
    top: 50%;
    left: 50%;
    margin-top: calc((500px / 2) * -1);
    margin-left: calc((400px / 2) * -1);
    background-color: ${props => props.theme.primaryColors.bgColor};
`

export const Conatiner = ({children}) => {
    return(
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    )
}