// Imports
import { Dispatch, FormEvent, SetStateAction, useRef } from "react"

// Componentes
import InputPers from "./InputPers"
import ButtonPers from "./ButtonPers"

// Interface
import { ITask } from "../interface/task"

// Css
import "./TaskForm.css"

interface ITaskFormProps {
    btnText: string
    taskList: ITask[]
    setTaskList: Dispatch<SetStateAction<ITask[]>>
    task?: ITask
    setTask?: Dispatch<SetStateAction<ITask>>
}

function useTaskForm( { taskList, setTaskList, task, setTask } : ITaskFormProps ){
    const taskIdRef = useRef<number>(task?.id??0)

    function taskIsValid(task: ITask){
        return task.title !== "" && task.difficulty > 0
    }

    function getFormData({ currentTarget }: FormEvent<HTMLFormElement>): ITask{
        
        return {
            id: taskIdRef.current,
            title: currentTarget.title_task.value as string,
            difficulty: parseInt(currentTarget.difficulty.value as string)??0
        }
    }

    function clearForm({ currentTarget }: FormEvent<HTMLFormElement>): void{
        currentTarget.title_task.value = ""
        currentTarget.difficulty.value = ""
    }

    function handleFormTypeAction(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        const task = getFormData(e)
        if(taskIsValid(task)){
            if(task.id && task.id > 0 && setTask){
                handleUpdateTask(task)
                setTask({id: 0, title: "", difficulty: 0})
            }else{
                handleAddTask(task)
            }
            clearForm(e)
        }
    }

    function handleAddTask(task: ITask){
        const id = Math.floor(Math.random() * 1000)
        task.id = id
        setTaskList(prev => [...prev, task])
    }

    function handleUpdateTask(task: ITask){
        const indexUpdate = taskList.findIndex(value => value.id === task.id)
        setTaskList(prev => {
            const newTaskList = [...prev]
            newTaskList[indexUpdate] = task
            return newTaskList
        })
    }

    return {
        handleFormTypeAction
    }

}

export default function TaskForm(props: ITaskFormProps){

    const { btnText, task } = props
    const { handleFormTypeAction } = useTaskForm(props)

    return(
        <form onSubmit={handleFormTypeAction} className='form_task'>
            <InputPers label='Título' type='text' name='title_task' defaultValue={task?.title} />
            <InputPers label='Dificuldade' type='number' name='difficulty' defaultValue={task?.difficulty} />
            <ButtonPers type="submit">{btnText}</ButtonPers>
        </form>
    )
}