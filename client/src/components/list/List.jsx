import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router'
import { ListGroupItem } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios';
// import App from '../../App'

export const List = () => {
    const navigate = useNavigate();
    const [pageData, setPageData] = useState({
        arrayOfChores: [],
        choreComponents: []
        // {
        //     id: 0,
        //     name: "test",
        //     description: "test"
        // }
})

    useEffect(() => {
        getChores();

    }, [])

 const getChores = () =>{
   axios.get('http://localhost:5000/api/chore').then(response => getChoresSuccess(response));
   
 }

    const getChoresSuccess = (response) => {
        console.log(response)
        const listArray = response.data;
        setPageData((prev) => {
            const n = {...prev};
            n.arrayOfChores = listArray
            n.choreComponents = listArray.map(mapItems);
            return n; 
        })
    }

    const getChoresError = (response) => {
        console.warn(response);
    }


    const mapItems = (item) =>{
        return <ListGroupItem key={item.id}>{item.description}</ListGroupItem>
    }
  return (
    <>
    <ListGroup>
{pageData.choreComponents}
    </ListGroup>
  </>
  )
}
