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

  useEffect(() => { //manera de veure el valor real un cop ha acabat la asincronia de l'state. Si fas console log en el handleClick d'afegir, et mostrarà l'anterior array.
    console.log(tasks)
  }, [tasks])

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
          <Col><TasksList tasks={tasks} setTasks={setTasks} /></Col>
        </Row>
    </div>
  )
}

export default App
