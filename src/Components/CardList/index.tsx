import React from "react";
import Card from "../SingleCard";
import { ICardList } from "./types";

const CardList: React.FC<ICardList> = ({ todoList, setTodoList }) => {

    return (
        <div>
            {todoList.map(todo => (
                <Card key={todo.id} todoContent={todo.content} todo={todo} todoList={todoList}  setTodoList={setTodoList}/>
                ))}
        </div>
    )
}

export default CardList;