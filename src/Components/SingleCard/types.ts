import { ITodo } from "../../view/types";

export interface CardProps {
    todoContent: ITodo["content"],
    todoList: ITodo[],
    todo: ITodo
}