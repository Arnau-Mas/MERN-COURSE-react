import { useState } from "react";
import Login from "./Login";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormularioLogin(){
    const [form, setForm] = useState({
        user:"",
        pass1:"",
        pass2:"",
    })
    const [show, setShow] = useState(false);
    /* const [option, setOption] = useState(false) */
    
    const {user, pass1, pass2} = form;

    function inputChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        if(user.length>3 && pass1.length>0 && pass1===pass2){
            setShow(true);
        }else{
            setShow(false);
        }
    }

    return (
        <div className="mt-5 w-25">
            <h3>Formulario Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail2">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="user" onChange={inputChange} type="email" placeholder="Enter email" value={user} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword1">
                <Form.Label>Password</Form.Label>
                <Form.Control pattern="^[A-Za-z0-9_-]*$" name="pass1" type="password" onChange={inputChange} placeholder="Password" value={pass1} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control pattern="^[A-Za-z0-9_-]*$" name="pass2" type="password" onChange={inputChange} placeholder="Password" value={pass2} />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
            {show && <p>Correcte!</p>}
        </div>
    )
}

export default FormularioLogin;