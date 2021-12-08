import {useState} from 'react'; 
import {Form, Row, Col, Container,Button} from 'react-bootstrap'
import Todo from './Todo'


function Update (props) {
    const {title, description, date, id, setTitle, setDescription, setDate} = props
    let [item, setItem] = useState([]);

    function updateUser(id) {
        let res = {id,title, description, date}
        console.log(res);
        fetch('/api/task', {
            method: 'PUT',
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(res)
        })
    }
    return (
        <div>
        <Container>    
           <Form>
                <Row style={{width: "30%"}} className="mb-3">
                <Form.Group as={Col} >
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" defaultValue={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </Form.Group>
                </Row>
                <Row style={{width: "30%"}} className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" defaultValue={description} onChange= {(e) => {setDescription(e.target.value)}}/>
                </Form.Group>
                </Row>
                <Row style={{width: "30%"}}>
                <Form.Group as={Col}>
                    <Form.Label>Due date</Form.Label>
                    <Form.Control type="date" defaultValue={date} onChange={(e) => {setDate(e.target.value)}}/>
                </Form.Group>
                </Row>
                <Button href={"/Todo"}onClick={() => updateUser(id)}>Update</Button>
            </Form>
            </Container>
        </div>)
}
export default Update; 