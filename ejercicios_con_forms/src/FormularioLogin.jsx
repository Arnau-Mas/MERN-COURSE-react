import { useState } from "react";
import Login from "./Login";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; // o {Form} from 'react'
/* value es necessari per tenir dades sincronitzades */

function FormularioLogin(){
    const USER = "arnau@gmail.com";
    const PASS = "12345";
    const [form, setForm] = useState({
        user:"",
        password:""
    })
    const [show, setShow] = useState(false);
    const [option, setOption] = useState(false)
    const {user, password} = form;

    function inputChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault(); /* Si volguéssis gestionar un action es pot gestionar */
        setShow(true)
        if(user===USER && password===PASS){
            setOption(true);
        }else{
            setOption(false);
        }
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
            {show && <Login option={option} />}
        </div>
    )
}

export default FormularioLogin;