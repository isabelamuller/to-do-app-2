import { CardProps } from "./types";
import { CardStyle, TodoContainer, CardStyleDone, DoneText, CardContent } from "./styles";
import Emoji from "../Emoji";
import React, { useState } from "react";



const Card = ({ todoContent, todo, todoList, setTodoList }: CardProps) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editContent, setEditContent] = useState("")

    const removeTodo = (id: number) => {
        setTodoList(todoList.filter((todo) => todo.id !== id))
    }

    const completeTodo = (id: number) => {
        setTodoList(
            todoList.map((todo) =>
                todo.id === id ? { ...todo, isFinished: !todo.isFinished } : todo))
    }

    const editTodo = (e:React.FormEvent, id:number) => {
        e.preventDefault()
        setEdit(true)
        setTodoList(todoList.map((todo) => (
            todo.id === id ? { ...todo, content: editContent } : todo
        )))
        setEdit(false)
    }

    return (
        todo.isFinished ? (
            <>
                <CardStyleDone>
                    <DoneText>
                        done!
                    </DoneText>
                    <CardContent>
                        <TodoContainer >
                            {todoContent}
                        </TodoContainer>
                        <div>
                            <Emoji name="remove" handleClick={() => removeTodo(todo.id)} />
                            <Emoji name="edit" handleClick={() => setEdit(true)}/>
                            <Emoji name="complete" handleClick={() => completeTodo(todo.id)} />
                            <Emoji name="completed" />
                        </div>

                    </CardContent>
                </CardStyleDone>
            </>
        )
            : edit ?
            (
                <CardStyle>
                <CardContent>
                    <TodoContainer >
                        <form onSubmit={(e) => editTodo(e, todo.id)}>
                        <input type="input" value={editContent} onChange={(e) => setEditContent(e.target.value)}/>
                        </form>
                    </TodoContainer>
                    <div>
                        <Emoji name="remove" handleClick={() => removeTodo(todo.id)} />
                        <Emoji name="edit" handleClick={() => setEdit(false)} />
                        <Emoji name="complete" handleClick={() => completeTodo(todo.id)} />
                    </div>
                </CardContent>
            </CardStyle>
            ) : (
                (
                    <CardStyle>
                        <CardContent>
                            <TodoContainer >
                                {todoContent}
                            </TodoContainer>
                            <div>
                                <Emoji name="remove" handleClick={() => removeTodo(todo.id)} />
                                <Emoji name="edit" handleClick={() => setEdit(true)} />
                                <Emoji name="complete" handleClick={() => completeTodo(todo.id)} />
                            </div>
                        </CardContent>
                    </CardStyle>
            )
            )
    )
}

export default Card;