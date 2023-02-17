export interface IInput {
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: (e: React.FormEvent) => void,  
}