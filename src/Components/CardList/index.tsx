import React from "react";
import Card from "../SingleCard";
import { ICardList } from "./types";

const CardList: React.FC<ICardList> = ({ todoList }) => {
    return (
        <div>
            {todoList.map(todo => (
                <Card todo={todo.todo} todoList={todoList} />
            ))}
        </div>
    )
}

export default CardList;