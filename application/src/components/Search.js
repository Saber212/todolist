import React, {useState}from 'react';
import { Container,Form } from 'react-bootstrap';

export default function Search ({title, setTitle}) {
    const[element, setElement] = useState();

    function search(title){
        fetch(`/api/task/${title}`, {
          method:"GET"
        }).then(response => response.json().then(result => {
            setElement(result);
            console.log(result);
        }));
        window.location.reload(false);
      }
    return(
        <Container>
            <Form>
                <Form.Group className="mb-5" controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Search title"/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                    <button onClick={() => search(title)}>Search</button>
                </Form.Group>
                </Form>
        </Container>
    )
}
