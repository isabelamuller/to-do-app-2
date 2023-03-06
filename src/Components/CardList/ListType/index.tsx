import { IList } from "./types"
import Card from "../../SingleCard"

const List = ({ type, todoList, setTodoList, completedTodos, setCompletedTodos, nonCompletedTodos, setNonCompletedTodos }: IList) => {
    const getList = () => {
        switch (type) {
            case "allTasks":
            default:
                return (
                    <div>
                        {todoList.map(todo => (
                            <Card nonCompletedTodos={nonCompletedTodos} setNonCompletedTodos={setNonCompletedTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} key={todo.id} todoContent={todo.content} todo={todo} todoList={todoList} setTodoList={setTodoList} />
                        ))}
                    </div>
                )
            case "completed":
                return (
                    <div>
                        {completedTodos.map(todo => (
                            <Card nonCompletedTodos={nonCompletedTodos} setNonCompletedTodos={setNonCompletedTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} key={todo.id} todoContent={todo.content} todo={todo} todoList={todoList} setTodoList={setTodoList} />
                        ))}
                    </div>
                )
            case "nonCompleted":
                return (
                    <div>
                        {nonCompletedTodos.map(todo => (
                            <Card nonCompletedTodos={nonCompletedTodos} setNonCompletedTodos={setNonCompletedTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} key={todo.id} todoContent={todo.content} todo={todo} todoList={todoList} setTodoList={setTodoList} />
                        ))}
                    </div>
                )
        }
    }
   return getList()
}

export default List;