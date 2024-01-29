// Imports
import { useState } from 'react';

// Componentes
import Modal from './component/Modal';
import TaskForm from './component/TaskForm';
import TaskList from './component/TaskList';
import Header from './component/Header';
import Footer from './component/Footer';

// Interface
import { ITask } from './interface/task';

// Css
import './App.css';

function useApp(){

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [task, setTask] = useState<ITask>({id: 0, title: "", difficulty: 0})
  const openModal: boolean = !!task.title && !!task.difficulty

  function editTask(task_id: number){
    const taskToEdit = taskList.find(task => task.id === task_id)
    if(taskToEdit){
      setTask(taskToEdit)
    }
  }

  function deleteTask(task_id: number){
    setTaskList(prev => {
        const newTaskList = prev.filter(task => task.id !== task_id)
        return newTaskList
    })
  }

  return{
    task,
    taskList,
    setTaskList,
    setTask,
    openModal,
    editTask,
    deleteTask,
  }

}

function App() {

  const { task, taskList, setTask, setTaskList, openModal, deleteTask, editTask } = useApp()

  return (
    <section className='app_container'>
      <Modal
        open={openModal}
      >
        <h1>Editar tarefa</h1>
        <TaskForm 
          btnText='Atualizar'
          taskList={taskList}
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
        />
      </Modal>
      <Header title='React + TS Todo' />
      <main className='app_content'>
        <h2>O que você vai fazer?</h2>
        <TaskForm 
          btnText='Cadastrar'
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <h2>Suas tarefas!</h2>
        <TaskList taskList={taskList} editF={editTask} deleteF={deleteTask} />
      </main>
      <Footer title='React + TS Todo' />
    </section>
  );
}

export default App;
