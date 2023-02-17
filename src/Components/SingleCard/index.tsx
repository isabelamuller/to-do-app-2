import React from "react";
import { CardProps } from "./types";
import { CardStyle, Emoji, TodoContainer } from "./styles";


const Card: React.FC<CardProps> = ({ todo }) => {

    return (
            <CardStyle>
            <TodoContainer>
            {todo}
            </TodoContainer>
            <div>
            <Emoji role="img" aria-label="trash-can">🗑</Emoji>
            <Emoji role="img" aria-label="pencil-and-paper">📝</Emoji>
            <Emoji role="img" aria-label="done">✅</Emoji>
            </div>
            </CardStyle>
        )
}

export default Card;