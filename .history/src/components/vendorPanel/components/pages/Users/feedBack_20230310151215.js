import React from 'react'
import { Table} from 'react-bootstrap'

const feedBack = () => {
  return (
    <>
    <p style={{color : 'red' , fontSize : '18px'}}> All Feedbacks </p>

    <Table striped bordered hover >
        <thead>
            <th>Rating</th>
            <th>Description</th>
        </thead>
    </Table>
    </>
  )
}

export default feedBack