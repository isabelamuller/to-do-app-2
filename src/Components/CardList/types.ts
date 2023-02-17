import { ITodo } from './../../view/types';

export interface ICardList {
    todoList: ITodo[],
    setTodoList:React.Dispatch<React.SetStateAction<ITodo[]>>;
}