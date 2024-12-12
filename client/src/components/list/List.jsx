import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router'
import { ListGroupItem } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios';
// import App from '../../App'

export const List = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([
        {
            name: "test",
            description: "test"
        }
    ])

    useEffect(() => {
        getChores();

    })

    const getChores = () => {
       axios.get("/api/chore");
    }

    const getChoresSuccess = (response) => {
        console.log(response)
        const listItem = response.data;
        setItems((prev) => {
            const n = {...prev};
            n.name = listItem.name;
            n.description = listItem.description;
            return n; 
        })
    }

    const getChoresError = (response) => {
        console.warn(response);
    }


    const mapItems = (item) =>{
        return <ListGroupItem key={item.name}>{item.description}</ListGroupItem>
    }
  return (
    <>
    <ListGroup>
        {items && items.map((item) => mapItems(item))}
    </ListGroup>
  </>
  )
}
