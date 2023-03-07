import { IList } from "./types"
import Card from "../../SingleCard"
import { ListStyle } from "./styles"

const List = ({ type, todoList, setTodoList, completedTodos, setCompletedTodos, nonCompletedTodos, setNonCompletedTodos }: IList) => {
    const getList = () => {
        switch (type) {
            case "allTasks":
            default:
                return (
                    <ListStyle>
                        {todoList.map(todo => (
                            <Card nonCompletedTodos={nonCompletedTodos} setNonCompletedTodos={setNonCompletedTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} key={todo.id} todoContent={todo.content} todo={todo} todoList={todoList} setTodoList={setTodoList} />
                        ))}
                    </ListStyle>
                )
            case "completed":
                return (
                    <ListStyle>
                        {completedTodos.map(todo => (
                            <Card nonCompletedTodos={nonCompletedTodos} setNonCompletedTodos={setNonCompletedTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} key={todo.id} todoContent={todo.content} todo={todo} todoList={todoList} setTodoList={setTodoList} />
                        ))}
                    </ListStyle>
                )
            case "nonCompleted":
                return (
                    <ListStyle>
                        {nonCompletedTodos.map(todo => (
                            <Card nonCompletedTodos={nonCompletedTodos} setNonCompletedTodos={setNonCompletedTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} key={todo.id} todoContent={todo.content} todo={todo} todoList={todoList} setTodoList={setTodoList} />
                        ))}
                    </ListStyle>
                )
        }
    }
   return getList()
}

export default List;