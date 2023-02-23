import React from "react";
import Button from "../Button";
import { Container, InputStyle } from "./styles";
import { IInput } from "./types";

const Input: React.FC<IInput> = ({ handleSubmit, todo, setTodo }) => {

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <InputStyle type="input" placeholder="Enter a task" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <Button type="default" name='Add task' />
            </form>
        </Container>
    )
}

export default Input;