import React from 'react'
import HOC from '../layout/HOC'
import { Table , Button , Modal , Form} from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { AiFillDelete } from 'react-icons/ai';


const Transaction = () => {
    const [data, setData] = useState([]);
  
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/FindBusRouter/getBusesByAdmin"
        );
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const deleteHandler = async (id) => {
      try{
        const { data } = await axios.delete(`https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/FindBusRouter/DeleteBusesByIdByAdmin/${id}`)
        toast.success(data.message)
        fetchData()
      }catch(e){
        console.log(e)
      }
    }

    function MyVerticallyCenteredModal(props) {

        const [name , setName ] = useState("")
        const [arrival , setArrival ] = useState("")
        const [destination , setDestination ] = useState("")
        const [arrival_time , setArrivalTime ] = useState("")
        const [ destination_time , setDestinationTime] = useState("")
        const [date , setDate ] = useState("")
        const [NumberofSeats , setNumberofSeats ] = useState("")
        const [Pass , setPass ] = useState("")
        const [ ] = useState("")
        const [ ] = useState("")
        const [ ] = useState("")
        const [ ] = useState("")
        const [ ] = useState("")
        const [ ] = useState("")
        const [ ] = useState("")
        const [ ] = useState("")
        const [ ] = useState("")
        const [ ] = useState("")
        const [ ] = useState("")


      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
             Add Bus
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>  

            <Form>
              <Form.Group className='mb-3'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Arrival</Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Destination</Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Arrival time</Form.Label>
                <Form.Control type='time' />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Destination time</Form.Label>
                <Form.Control type='time' />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Date</Form.Label>
                <Form.Control type='date' />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Number of Seats</Form.Label>
                <Form.Control type='number' min={0} />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Pass</Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Boarding Point</Form.Label>
                <Form.Control type='number'  />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Droping Point</Form.Label>
                <Form.Control type='number' />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label></Form.Label>
                <Form.Control type='text' />
              </Form.Group>
            </Form>

          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      );
    }
    
  
  
    return (
      <>
    
  
        <section>
          <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
            <span className="tracking-widest text-slate-900 font-semibold uppercase ">
              All Buses
            </span>
            <Button>
              Add Bus
            </Button>
          
          </div>
  
          <div style={{ maxWidth: "100%", overflow: "auto" , margin : 'auto' }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th> Total Passenger</th>
                  <th> Wiating List</th>
                  <th>Name</th>
                  <th>Arrival</th>
                  <th>Destination</th>
                  <th>Date</th>
                  <th>No. of Seats</th>
                  <th>Pass</th>
                  <th>Boarding Points</th>
                  <th>Droping Point</th>
                  <th>arrival time</th>
                  <th>destination time</th>
                  <th>Why Book this</th>
                  <th>Driver Name</th>
                  <th>Ratings Review</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((i, index) => (
                  <tr key={index}>
                    <td> {i.totalPassenger} </td>
                    <td> {i.waitingList} </td>
                    <td> {i.name} </td>
                    <td> {i.arrival} </td>
                    <td> {i.destination} </td>
                    <td> {i.date} </td>
                    <td> {i.NumberofSeats} </td>
                    <td> {i.Pass} </td>
                    <td> {i.BoardingPoint?.map((item) => (
                      item
                    ))} </td>
                    <td> {i.DropingPoint?.map((item) => (
                      item
                    ))} </td>
                    <td>arrival_time</td>
                    <td>destination_time</td>
                    <td>whyBookThisBus</td>
                    <td>DriverName</td>
                    <td>Rating_Review</td>
                        <td>
                          <AiFillDelete onClick={() => deleteHandler(i._id)} style={{color : 'red'}} />
                        </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </section>
      </>
    );
  };


export default HOC(Transaction)