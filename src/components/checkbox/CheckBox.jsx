import React from 'react'
import styled from 'styled-components'

const InputRangeWrapper = styled.div`
    list-style: none;
    display: flex;
    align-items: center;

    input[type="checkbox"] {
        -webkit-appearance: none;
        appearance: none;
        color: inherit;
        width: 1em;
        height: 1em;
        border: 1px solid currentColor;
        cursor: pointer;
        margin-right: 0.5rem;
    }

    input[type="checkbox"]:checked {
        background-color: #a4ffaf;
        border: 1px solid #a4ffaf;
    }
`

export const CheckBox = ({htmlFor, labelFor}) => {
  return (
    <InputRangeWrapper>
        <input type="checkbox" name="" id={htmlFor} />
        <label htmlFor={htmlFor}>{labelFor}</label>
    </InputRangeWrapper>
  )
}
