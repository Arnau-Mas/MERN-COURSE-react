import Alert from 'react-bootstrap/Alert';
import {AiOutlineDelete} from "react-icons/ai"
import TaskControllers from './TaskControllers';
export const TasksList = ({tasks, setTasks, deleteTask}) => {

  function handleDelete(id){
    let actualizedTasks = TaskControllers.deleteTask(id);
    console.log(actualizedTasks);
    setTasks(actualizedTasks);
  }

  return (
    <div className="mx-auto p-3">
      <p className="mb-2">Tasques</p>
       {tasks.map(task => (
        <Alert style={{height:"3.5rem", display:"flex", justifyContent:"space-between", alignItems:"center"}} key={task.id} variant="primary">
        <p style={{marginTop:"1rem"}}>{task.task}</p>
        <button onClick={() => handleDelete(task.id)} style={{display:"flex", alignItems:"center", height:"1rem", width:"3rem"}} className="btn btn-danger p-3"><AiOutlineDelete/></button>
        </Alert>
       ))}
    </div>
  )
}
