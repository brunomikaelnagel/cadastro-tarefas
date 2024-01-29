// Components
import TaskCard from "./TaskCard"

// Interface
import { ITask } from "../interface/task"

// Css
import "./TaskList.css"

type TTaskListProps = {
    taskList: ITask[]
    editF: (task_id: number) => void
    deleteF: (task_id: number) => void
}

export default function TaskList( { taskList, editF, deleteF } : TTaskListProps ){
    return(
        <div className='task_list'>
            {
                taskList.length > 0 && taskList.map((task, index) => {
                return(
                    <TaskCard key={index} task={task} editF={editF} deleteF={deleteF} />
                )
                })
            }
            {
                taskList.length === 0  && <span className='task_list_empty text_center'>Não ha tarefas cadastras!</span>
            }
        </div>
        
    )
}