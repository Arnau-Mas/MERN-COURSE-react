import { useEffect, useState } from "react"
import {Col, Row} from "react-bootstrap"
import { NewTask } from "./components/NewTask"
import TaskControllers from "./components/TaskControllers"
import { TasksList } from "./components/TasksList"

const localTasks = TaskControllers.getTasks(); //esto no seria posible si fuera async

function App() {
  const [tasks, setTasks] = useState(localTasks || []);

  function addTask(task){
    setTasks([...tasks, task])
  }

  function deleteTask(id){
    const newTasks = tasks.map(task => task.id!=id);
    setTasks(newTasks);
  }

  // useEffect(() => {
  //   // const localTasks = TaskControllers.getTasks();
  //   setTasks(localTasks);
  // /* per borrar totes les notes TaskControllers.saveAll([]) */
  // }, [])
  

  return (
    <div className="h-100 mx-5 p-5">
      <h1>To Do List</h1>
        <Row className="mx-auto g-0">
          <Col><NewTask addTask={addTask} /></Col>
          <Col><TasksList tasks={tasks} deleteTask={deleteTask} setTasks={setTasks} /></Col>
        </Row>
    </div>
  )
}

export default App
