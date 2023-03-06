import { CardProps } from "./types";
import { CardStyle, TodoContainer, CardStyleDone, DoneText, CardContent, InputEdit, EmojiContainer } from "./styles";
import Emoji from "../Emoji";
import React, { useState } from "react";
import OptionsMenu from "../EditMenu";



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

    const editTodo = (e: React.FormEvent, id: number) => {
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
                    <OptionsMenu date={todo.date} />
                    <CardContent>
                        <TodoContainer >
                            {todoContent}
                        </TodoContainer>

                        <EmojiContainer>
                            <Emoji name="completed" />
                            <Emoji name="complete" handleClick={() => completeTodo(todo.id)} />
                            <Emoji name="edit" handleClick={() => setEdit(true)} />
                            <Emoji name="remove" handleClick={() => removeTodo(todo.id)} />
                        </EmojiContainer>

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
                                    <InputEdit type="input" value={editContent} onChange={(e) => setEditContent(e.target.value)} />
                                </form>
                            </TodoContainer>
                            <EmojiContainer>
                                <Emoji name="complete" handleClick={() => completeTodo(todo.id)} />
                                <Emoji name="edit" handleClick={() => setEdit(true)} />
                                <Emoji name="remove" handleClick={() => removeTodo(todo.id)} />
                            </EmojiContainer>
                        </CardContent>
                    </CardStyle>
                ) : (
                    (
                        <CardStyle>
                                <OptionsMenu date={todo.date} />
                            <CardContent>
                                <TodoContainer >
                                    {todoContent}
                                </TodoContainer>
                                <EmojiContainer>
                                    <Emoji name="complete" handleClick={() => completeTodo(todo.id)} />
                                    <Emoji name="edit" handleClick={() => setEdit(true)} />
                                    <Emoji name="remove" handleClick={() => removeTodo(todo.id)} />
                                </EmojiContainer>
                            </CardContent>
                        </CardStyle>
                    )
                )
    )
}

export default Card;