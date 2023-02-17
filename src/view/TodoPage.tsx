import React, { useState } from 'react';
import { InterfaceContent } from './styles';
import Title from '../Components/Title';
import Input from '../Components/Input';
import { ITodo } from './types';
import Card from '../Components/Card';

const TodoPage = () => {
const [todo, setTodo] = useState('')
const [todoList, setTodoList] = useState<ITodo[]>([])


const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  setTodoList([...todoList, {id: Date.now(), todo:todo, isFinished:false}])
  setTodo('')
  console.log(todoList)
}



  return (
    <InterfaceContent>
      <Title title='TO-DO LIST' />
      <Input todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <Card todo={todo} todoList={todoList}/> {/* esse card vai entrar em um cardList. so ta aqui p fins de teste. */}
    </InterfaceContent>

  )
}

export default TodoPage;