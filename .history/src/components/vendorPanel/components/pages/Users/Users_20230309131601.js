/** @format */

import React, { useEffect, useState } from "react";
import { Table , Modal , Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import HOC from "../../layout/HOC";

const Users = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/DailyPassRouter/getPassByAdmin"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const deleteData = async (id) => {
    try{
      const { data } = await axios.delete(`https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/customerRouter/deleteAdmin/${id}`)
      console.log(data.message)
      toast.success('User Deleted')
      fetchData()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
   
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Users (Total : {data.length})
          </span>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Pass</th>
               
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {i.Pass} </td>
                  <td>
                    <i
                      class="fa-sharp fa-solid fa-trash"
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => deleteData(i._id)}
                    ></i>
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


export default HOC(Users);
