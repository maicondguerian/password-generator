import styled from "styled-components"
import { BsArrowRightShort } from "react-icons/bs";
import { useContext } from "react";
import { MyContext } from "../../context/Mycontext";
import { CheckBox } from "../checkbox/CheckBox";

const StyledDiv = styled.div`
    padding: 1.2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span{
        font-size: 22px;
        color:${props => props.theme.primaryColors.cGreen};
    }
`

const InputRangeWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    

    input[type='range'] {
        appearance: none !important;
        background-color: ${props => props.theme.primaryColors.bgContainer};
        height:7px;
        }   
    input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none !important;
        background-color: ${props => props.theme.primaryColors.fColor};
        height:20px;
        width:20px;
        border-radius: 100%;
    }

    input[type='range']{
        margin-bottom: 1rem;
    }
`
const StyledContainer = styled.div`
    padding: 0 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button{
        height: 50px;
        border: none;
        background-color:${props => props.theme.primaryColors.cGreen};
        text-transform: uppercase;
        cursor: pointer;
        
    }

`
const InputGroupWrapper = () => {
    const { passwordLength, handlePasswordLengthChange } = useContext(MyContext);
    return (
        <InputRangeWrapper>
            <input type="range"  min={6} max={30} value={passwordLength} onChange={handlePasswordLengthChange} />
            <CheckBox labelFor={'Include Uppercase Letters'} htmlFor={'UpperCase'}/>
            <CheckBox labelFor={'Include lowerCase Letters '} htmlFor={'lowerCase'}/>
            <CheckBox labelFor={'Include Numbers'} htmlFor={'Numbers'}/>
            <CheckBox labelFor={'Include Simbols'} htmlFor={'Simbols'}/>
        </InputRangeWrapper>
    )
}
const StyledDivStrength = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${props => props.theme.primaryColors.bgContainer};
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:  0.8rem 1rem;

    p{
        text-transform: uppercase;
    }

    ul{
        list-style: none;
        display: flex;
        height: 100%;
       
        li{
            border: solid 1px white;
            width: 10px;
            height: 100%;
            margin: 0 .2rem;
        }
    }
`
const StrenghtBars = () => {
    const listStrength = [];
    for(let i = 0; i <4; i++){
        listStrength.push(<li key={i}/>)
    }
    return (
        <StyledDivStrength>
            <p>strenght</p>
            <ul>
                {listStrength}
            </ul>
        </StyledDivStrength>
    )
}
export const PasswordGenerator = () => {
    const {  passwordLength, handleGeneratePassword } = useContext(MyContext);
    return (
        <StyledContainer>
            <StyledDiv>
                <p>Character Length</p>
                <span> {passwordLength} </span>
            </StyledDiv>
            <InputGroupWrapper />
            <StrenghtBars />
            <button onClick={handleGeneratePassword}>generate <BsArrowRightShort /></button>
        </StyledContainer>
    )
}
