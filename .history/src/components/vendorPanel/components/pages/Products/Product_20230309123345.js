/** @format */

import React, { useEffect, useState } from "react";
import { Table  , Modal  , Form , Button} from "react-bootstrap";
import axios from "axios";
import HOC from "../../layout/HOC";
import { toast } from "react-toastify";

const Product = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/ratingRouter/getallRating"
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
      const { data  } = await axios.delete(`https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/ratingRouter/deleteRating/${id}`)
      toast.success(data.message)
      fetchData()
    }catch(e){
      console.log(e)
    }
  }

  function MyVerticallyCenteredModal(props) {
    const [ add , setAdd ] = useState('')
    const [ balance , setBalance ] = useState("")

    const postData = async (e) => {
      e.preventDefault()
    
            const { data } = await axios.post('')
            console.log(data)
            fetchData()
            toast.success('Amount Added')
          console.log(data)
          fetchData()
          toast.success('Amount Deducted')
       props.onHide()
       
      
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add / Remove Balance
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postData}>
            <Form.Group className='mb-3'>
            <Form.Select aria-label="Default select example" onChange={(e) => setAdd(e.target.value)}>
    <option>Add or Remove</option>
    <option value="add">Add</option>
    <option value="remove">Remove</option>
  </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Amount</Form.Label>
                <Form.Control type='number' min={0} onChange={(e) => setBalance(e.target.value)}  />
            </Form.Group>

            <Button type='submit'>Submit</Button>
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
            All Ratings
          </span>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Rating</th>
                <th>Message</th>
                <th>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((i, index) => (
                <tr key={index}>
                 <td>
                  {i.rating}
                 </td>
                 <td>
                  {i.message}
                 </td>
                 <td>
                 <i class="fa-sharp fa-solid fa-trash" onClick={() => deleteHandler(i._id)} style={{color : 'red'}}></i>
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


export default HOC(Product);
