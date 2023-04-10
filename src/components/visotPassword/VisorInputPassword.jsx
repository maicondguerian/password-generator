import React, { useContext } from 'react'
import { MdContentCopy } from "react-icons/md";
import styled from 'styled-components';
import { MyContext } from '../../context/Mycontext';

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-bottom: solid 1rem;
    color: ${props => props.theme.primaryColors.bgContainer};

    input{
        width: 100%;
        height: 50px;
        background-color: transparent;
        font-size: 16px;
        letter-spacing: 0.1rem;
        color: ${props => props.theme.primaryColors.fColor};
 
        &::placeholder{
            font-size: 22px;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 0.1rem;
        }
    }
    button{
        background-color: transparent;
        cursor: pointer;
    }
`
export const VisorInputPassword = ({id=new Date().getTime()}) => {
    const { password } = useContext(MyContext);
    // toLocaleTimeString():
  return (
    <StyledDiv>
        <input type="text" id={id} placeholder="p4$5w0rD!"  disabled value={password}/>
        <button><MdContentCopy size={25} color='#A4FFAF'/> </button>
    </StyledDiv>
  )
}
