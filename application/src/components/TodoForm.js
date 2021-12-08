import React,{useState} from 'react'
import {Form, Row, Col, Container,button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Todo from './Todo'
export default function TodoForm() {
    const [post, setPost] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const todo = {title, description, date}; 
        fetch('/api/task', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(todo)
    }).then(() => {console.log("new blog added")})}
    
    return (
        <div>
        <Container>    
           <Form onSubmit={handleSubmit}>
                <Row style={{width: "30%"}} className="mb-3">
                <Form.Group as={Col} >
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                </Form.Group>
                </Row>
                <Row style={{width: "30%"}} className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                </Form.Group>
                </Row>
                <Row style={{width: "30%"}}>
                <Form.Group as={Col}>
                    <Form.Label>Due date</Form.Label>
                    <Form.Control type="date" value={date} onChange={e => setDate(e.target.value)}/>
                </Form.Group>
                <button variant="primary" type="submit"><Link to={"/todo"}>Submit</Link></button>
                </Row>
            </Form>
            </Container>
        </div>
    )
}
