import { ICardList } from './../types';

export interface IList extends ICardList {
    type: "allTasks" | "completed" | "nonCompleted"
}