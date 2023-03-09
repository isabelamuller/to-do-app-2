import { useState } from "react";
import { ICardList } from "./types";
import List from "./ListType";
import { ButtonContainer, ListContainer, FilterTitle } from "./styles";
import Button from "../Button";

const CardList = ({ todoList, setTodoList, completedTodos, setCompletedTodos, nonCompletedTodos, setNonCompletedTodos }: ICardList) => {
    const [completedTasksShow, setCompletedTasksShow] = useState<boolean>(false)
    const [nonCompletedTasksShow, setNonCompletedTasksShow] = useState<boolean>(false)
    const [allTasksShow, setAllTasksShow] = useState<boolean>(false)

    const showCompletedTasks = () => {
        setNonCompletedTasksShow(false)
        setAllTasksShow(false)
        setCompletedTasksShow(!completedTasksShow)
    }

    const showNonCompletedTasks = () => {
        setCompletedTasksShow(false)
        setAllTasksShow(false)
        setNonCompletedTasksShow(!nonCompletedTasksShow)
    }

    const showAllTasks = () => {
        setCompletedTasksShow(false)
        setNonCompletedTasksShow(false)
        setAllTasksShow(!allTasksShow)
    }


  const clearAllTasks = () => {
    setTodoList([])
  }


    return (
        <ListContainer>
            <ButtonContainer>
                <FilterTitle>
                    filter by:
                </FilterTitle>
                <Button type="filter" name="All" handleClick={showAllTasks} />
                <Button type="filter" name="Completed" handleClick={showCompletedTasks} />
                <Button type="filter" name="Uncompleted" handleClick={showNonCompletedTasks} />
                <Button type="clear" name="Clear tasks" handleClick={clearAllTasks} />
            </ButtonContainer>
            {completedTasksShow ? (
                <List type="completed" todoList={todoList} setTodoList={setTodoList} nonCompletedTodos={nonCompletedTodos} setNonCompletedTodos={setNonCompletedTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
            ) : (nonCompletedTasksShow ? (
                <List type="nonCompleted" todoList={todoList} setTodoList={setTodoList} nonCompletedTodos={nonCompletedTodos} setNonCompletedTodos={setNonCompletedTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
            ) :
                (
                    <List type="allTasks" todoList={todoList} setTodoList={setTodoList} nonCompletedTodos={nonCompletedTodos} setNonCompletedTodos={setNonCompletedTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
                )
            )}
        </ListContainer>
    )
}

export default CardList;