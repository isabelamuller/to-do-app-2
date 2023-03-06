import { ICardList } from './../CardList/types';
import { ITodo } from "../../view/types";

export interface CardProps extends ICardList {
    todoContent: ITodo["content"],
    todo: ITodo
}

export interface ICompleted extends ICardList{
    completedTodos: ITodo[],
    setCompletedTodos: React.Dispatch<React.SetStateAction<ITodo[]>>,
}