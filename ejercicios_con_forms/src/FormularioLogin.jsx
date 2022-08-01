import { useState } from "react";
import Login from "./Login";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormularioLogin(){
/*     const [name, setName] = useState("");
    const [password, setPassword] = useState(""); */
    const [form, setForm] = useState({
        user:"",
        password:""
    })
    const {user, password} = form;
    /* 
    function changeName(e){
        setName(e.target.value);
    }

    function changePass(e){
        setPassword(e.target.value)
    } */

    function inputChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        
    }

    return (
        <div className="mt-5 w-25">
            <h3>Formulario Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="user" onChange={inputChange} type="email" placeholder="Enter email" value={user} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" onChange={inputChange} placeholder="Password" value={password} />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
            <Login />
        </div>
    )
}

export default FormularioLogin;