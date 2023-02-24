import { ICardList } from './../CardList/types';
import { ITodo } from "../../view/types";

export interface CardProps extends ICardList {
    todoContent: ITodo["content"],
    todo: ITodo
}