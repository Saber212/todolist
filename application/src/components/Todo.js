import React,{useState, useEffect} from 'react'
import { Router, Route, Link } from 'react-router-dom';
import {ListGroup,Badge,Container,Button, Pagination} from 'react-bootstrap'
import update from './Update';
import CreateButton from './CreateButton';
function Todo(props){
    const {data, setData} = props;

       function deleteTask(id){
      fetch(`/api/task/${id}`, {
        method:"DELETE"
      })
      window.location.reload(false);
    }

    return data.map( (item, i) => (
      <Container>
      <ListGroup as="ol" key={i}>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.title}</div>
              {item.description}
            </div>
          <Badge size="sm" variant="primary" pill>
            {item.date}
          </Badge>
          <Badge variant="primary" pill>
            <Button onClick={() => deleteTask(item.id)}size="sm">Delete</Button>
          </Badge>
          <Badge variant="primary" pill>
            <Button href = "/update" element={<update data={data}/>}size="sm">Update</Button>
          </Badge>
        </ListGroup.Item>
      </ListGroup>
      </Container>
  ))
}

export default Todo;