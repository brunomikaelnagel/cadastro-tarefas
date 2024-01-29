// Interface
import { ITask } from "../interface/task"

// Css
import  "./TaskCard.css"

type TCardTaskProps = {
    task: ITask
    deleteF: (task_id: number) => void
    editF: (task_id: number) => void
} 

export default function TaskCard({ task, editF, deleteF } : TCardTaskProps){
    return(
        <div className="task_card_container">
            <div className="task_card_content">
                <h2>{task.title}</h2>
                <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className="task_card_buttons">
                <button onClick={() => editF(task.id)} className="task_card_button" >Editar</button>
                <button onClick={() => deleteF(task.id)} className="task_card_button" >Deletar</button>
            </div>
        </div>
    )
}