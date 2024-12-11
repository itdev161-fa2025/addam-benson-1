import React, {useState} from 'react'
import { ListGroupItem } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'

export const List = () => {

    const [items, setItems] = useState([
        {
            name: "test",
            description: "test"
        }
    ])

    const mapItems = (item) =>{
        return <ListGroupItem>{item.description}</ListGroupItem>
    }
  return (
    <>
    <ListGroup>
        {items && items.map((item) => mapItems(item))}
    </ListGroup>
  </>
  )
}
