import React from "react";
import { CardProps } from "./types";
import { Container, CardStyle, Emoji, TodoContainer } from "./styles";


const Card: React.FC<CardProps> = ({ todo }) => {

    return (
        <Container>
            <CardStyle>
            <TodoContainer>
            {todo}
            </TodoContainer>
            <div>
            <Emoji role="img" aria-label="trash-can">🗑</Emoji>
            <Emoji role="img" aria-label="pencil-and-paper">📝</Emoji>
            </div>
            </CardStyle>
        </Container>
        )
}

export default Card;