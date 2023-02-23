import React, { useState } from 'react';
import { InterfaceContent, Container, TextBeforeRendering } from './styles';
import Title from '../Components/Title';
import Input from '../Components/Input';
import { ITodo } from './types';
import CardList from '../Components/CardList';
import Button from '../Components/Button';

const TodoPage = () => {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState<ITodo[]>([])


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTodoList([...todoList, { id: Date.now(), todo: todo, isFinished: false }])
    setTodo('')
  }

  const clearAllTasks = () => {
    setTodoList([])
  }
  
  
  return (
    <InterfaceContent>
      <Title title='TO-DO LIST' />
      <Input todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <Container>
        <Button type="clear" name="Clear tasks" handleClick={clearAllTasks}/>
        {todoList.length === 0 ?
          <TextBeforeRendering>Your tasks will appear here! 😄</TextBeforeRendering> :
          <CardList todoList={todoList} setTodoList={setTodoList} />
        }
      </Container>
    </InterfaceContent >

  )
}

export default TodoPage;