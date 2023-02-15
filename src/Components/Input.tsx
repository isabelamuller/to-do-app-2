import React from "react";
import Button from "./Button";
import styled from "styled-components";

    const InputStyle = styled.input `
        width:60%;
        margin-right: 1rem;
        height:36px;
        border:1px solid black;
        border-radius: 4px;
        font-size: 1.1rem;
        outline: none;
        font-family: 'Poppins', sans-serif;
    `

    const Container = styled.div `
        display: flex;
        justify-content:center;
        align-items:center;
    `

const Input: React.FC = () => {


    return (
        <Container>
        <InputStyle placeholder="Enter a task"/>
            <Button name='Add task' />
        </Container>
    )
}

export default Input;