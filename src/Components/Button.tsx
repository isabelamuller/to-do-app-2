import React from "react";
import styled from "styled-components";


interface IButton {
    name:string;
}

    const ButtonStyle = styled.button`
    max-width:120px;
    padding: 1rem 1.5rem 1rem 1.5rem;
    border-radius: 4px;
    background-color:#EF7C8E;
    font-size: 1rem;
    color:white;
    border:none;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    cursor: pointer;
    transition-property: background-color;
    transition-duration: 300ms;
    &:hover {
    background-color: #ffdba2;
    transition-duration: 300ms;
  }
    `

const Button:React.FC<IButton> = ({name}) => {

    return(
        <ButtonStyle>
            {name}
        </ButtonStyle>
    )
}

export default Button;