import React, { useEffect, useState } from 'react';
import { InterfaceContent, Container, TextBeforeRendering } from './styles';
import Title from '../Components/Title';
import Input from '../Components/Input';
import { ITodo } from './types';
import CardList from '../Components/CardList';

const TodoPage = () => {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState<ITodo[]>([])
  const [completedTodos, setCompletedTodos] = useState<ITodo[]>([])
  const [nonCompletedTodos, setNonCompletedTodos] = useState<ITodo[]>([])


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const fullDate = `${day}/${month}/${year}`
    const todoObject = { id: Date.now(), content: todo, isFinished: false, date: fullDate }
    setTodoList([...todoList, todoObject])
    setTodo('')
  }

  useEffect(() => {
    setCompletedTodos(
      todoList.filter((todo) =>
        todo.isFinished
      )
    )

    setNonCompletedTodos(
      todoList.filter((todo) =>
      todo.isFinished === false)
    )
  }, [todoList])




  return (
    <InterfaceContent>
      <Title title='TO-DO LIST' />
      <Input todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <Container>
        {todoList.length === 0 ?
          <TextBeforeRendering>Your tasks will appear here! 😄</TextBeforeRendering> :
          <CardList nonCompletedTodos={nonCompletedTodos} setNonCompletedTodos={setNonCompletedTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} todoList={todoList} setTodoList={setTodoList} />
        }
      </Container>
    </InterfaceContent >

  )
}

export default TodoPage;