import {Col, Row} from "react-bootstrap"
import { NewTask } from "./components/NewTask"
import { TasksList } from "./components/TasksList"
function App() {
  return (
    <div className="h-100 mx-5 p-5">
      <h1>To Do List</h1>
        <Row className="mx-auto g-0">
          <Col><NewTask/></Col>
          <Col><TasksList/></Col>
        </Row>
    </div>
  )
}

export default App
