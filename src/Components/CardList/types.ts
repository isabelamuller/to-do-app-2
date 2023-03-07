import { ITodo } from './../../view/types';

export interface ICardList {
    todoList: ITodo[],
    setTodoList:React.Dispatch<React.SetStateAction<ITodo[]>>,
    completedTodos: ITodo[],
    setCompletedTodos: React.Dispatch<React.SetStateAction<ITodo[]>>,
    nonCompletedTodos: ITodo[],
    setNonCompletedTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}