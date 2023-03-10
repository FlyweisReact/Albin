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
              </tr>
            </thead>
            <tbody>
            {data?.terms?.map((i, index) => (
               <tr key={index}>
               <td> {i.email} </td>
               <td> {i.name} </td>
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