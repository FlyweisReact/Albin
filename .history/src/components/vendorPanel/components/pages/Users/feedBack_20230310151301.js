import React, { useState } from 'react'
import { Table} from 'react-bootstrap'

const feedBack = () => {

    const [ data , setData ] = useState([])

    const fetchData = async () => {
        try{

        }catch(e) {
            console.log(e)
        }
    }

  return (
    <>
    <p style={{color : 'red' , fontSize : '18px'}}> All Feedbacks </p>

    <Table striped bordered hover >
        <thead>
            <th>Rating</th>
            <th>Description</th>
        </thead>
        <tbody>
            
        </tbody>
    </Table>
    </>
  )
}

export default feedBack