import React from 'react'
import {Container, Row, Col,Figure, Image} from 'react-bootstrap';
import TodoForm from './TodoForm';
import { Router, Route, Link } from 'react-router-dom';
import create from '../figures/create.png'
import list from '../figures/List.png'
export default function CreateButton() {


    return(
        <div>
            <button><Link to="/TodoForm"><Figure>
                <Figure.Image
                    width={120}
                    height={120}
                    src={create}
                />
                <Figure.Caption>
                    
                </Figure.Caption>
                    <h1>Create a list</h1>
                </Figure>
            </Link></button>
            <button> <Link to="/Todo"><Figure>
                <Figure.Image
                    width={120}
                    height={120}
                    src={list}
                />
                <Figure.Caption>
                <h1>See your List</h1>
                </Figure.Caption>
                </Figure>
            </Link></button>
        </div>
    )
}
