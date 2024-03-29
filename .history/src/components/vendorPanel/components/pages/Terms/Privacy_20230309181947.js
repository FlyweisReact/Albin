import HOC from "../../layout/HOC";
import { Table, Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


const Privacy = () => {
    const [data, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);
  
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/privacyRouter/getallPrivacy"
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
            const { data } = await axios.post(
              "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/privacyRouter/sendPrivacytouser",
              { message : name }
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

    const deleteHandler = async (id) => {
      try{
        const { data } = await axios.delete(`https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/privacyRouter/deletePrivacy/${id}`)
        console.log(data)
        alert('Privacy Policy Deleted')
        fetchData()
      }catch(e){
        console.log(e)

      }
    }

    return (
      <>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
  
        <section>
          <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
            <span className="tracking-widest text-slate-900 font-semibold uppercase ">
              All Privacy
            </span>
          </div>
  
          <div style={{ maxWidth: "100%", overflow: "auto" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th> Privacy Policy</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {data?.data?.map((i , index) => (
                <tr>
                    <td>{i.message} </td>
                    <td>
                    <i class="fa-solid fa-trash" style={{color : 'red'}} onClick={() => deleteHandler(i._id)}  ></i>
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
export default HOC(Privacy)