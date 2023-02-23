import { CardProps } from "./types";
import { CardStyle, TodoContainer } from "./styles";
import Emoji from "../Emoji";
import { ICardList } from "../CardList/types";


const Card = ({ todoContent, todo }: CardProps, { todoList, setTodoList }: ICardList) => {

    const removeTodo = (id:number) => {
        console.log("entrou no remove")
        console.log(todoList)
        setTodoList(
           todoList.filter((todo) => todo.id !== id)
        )
    }

    return (
        <CardStyle>
            <TodoContainer>
                {todoContent}
            </TodoContainer>
            <div>
                <Emoji name="remove" handleClick={() => removeTodo(todo.id)} />
                <Emoji name="edit" />
                <Emoji name="complete" />
            </div>
        </CardStyle>
    )
}

export default Card;