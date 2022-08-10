import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import TaskControllers from "./TaskControllers";

export const NewTask = ({addTask}) => {
    const [newTask, setNewTask] = useState("");
    function handleSubmit(e){
      e.preventDefault();
      if(newTask){
        let task={
            id:Math.floor(Math.random() * (10000 - 2 + 1) + 10000),
            task:newTask
        }
        addTask(task);
        TaskControllers.addTask(task);
      }
      setNewTask("")
    }
    
    return (
        <Form onSubmit={handleSubmit} className="p-3">
            <Form.Group className="mb-3">
                <Form.Label>Tasca</Form.Label>
                <Form.Control value={newTask} onChange={(e) => setNewTask(e.target.value)} type="text" placeholder="Escriu una nota" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Afegir
            </Button>
        </Form>
    );
};
