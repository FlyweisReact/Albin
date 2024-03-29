/** @format */
import React, { useEffect, useState } from "react";
import { Table} from "react-bootstrap";
import axios from "axios";
import HOC from "../../layout/HOC";



const Complaint = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/helpAndSupportRouter/gethelpByAdmin"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [name, setName] = useState("");

    const postData = async (e) => {
      e.preventDefault();
        try {
          const { data } = await axios.put(
            "https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/privacyRouter/updateprivacy/63ec9f3778fc16e1742d9822",
            { privacy : name }
          );
          console.log(data)
          toast.success("privacy updated");
          props.onHide();
          fetchData();
        } catch (err) {
          console.log(err);
        }
     
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Privacy Policy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postData}>
            <Form.Group className="mb-3">
              <Form.Label>Privacy Policy</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }





  return (
    <>
   
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Help & Support
          </span>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Email</th>
                <th> Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {data?.terms?.map((i, index) => (
               <tr key={index}>
               <td> {i.email} </td>
               <td> {i.name} </td>
               <td>

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


export default HOC(Complaint);