import React from "react";
import Button from "../Button";
import { Container, InputStyle } from "./styles";


const Input: React.FC = () => {
    
    return (
        <Container>
        <InputStyle placeholder="Enter a task"/>
            <Button name='Add task' />
        </Container>
    )
}

export default Input;