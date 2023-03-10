/** @format */

import axios from "axios";
import React, { useState } from "react";
import { Table } from "react-bootstrap";

const feedBack = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/feedback/getallfeedbackByAdmin"
      );
      setData(data)
    } catch (e) {
      console.log(e);
    }
  };


  useEff

  return (
    <>
      <p style={{ color: "red", fontSize: "18px" }}> All Feedbacks </p>

      <Table striped bordered hover>
        <thead>
          <th>Rating</th>
          <th>Description</th>
        </thead>
        <tbody></tbody>
      </Table>
    </>
  );
};

export default feedBack;
