import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export const NewTask = () => {
    function handleSubmit(e){
      e.preventDefault();
    }

    return (
        <Form onSubmit={handleSubmit} className="p-3">
            <Form.Group className="mb-3">
                <Form.Label>Tasca</Form.Label>
                <Form.Control type="text" placeholder="Escriu una nota" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    );
};
