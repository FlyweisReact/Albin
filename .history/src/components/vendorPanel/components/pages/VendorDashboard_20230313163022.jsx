import React, { useState } from "react";
import HOC from "../../../vendorPanel/components/layout/HOC";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const dash = (data) => {
  console.log(data, "dsjkfhjkashfjk");
  return data;
};
const VendorDashboard = () => {

  const navigate = useNavigate()


  const [ passengerCount , setPassengerCount  ] = useState('')

  const fetchData = async () => {
    try{
      const { data } = await axios.get()
    }catch(e) { 
      console.log(e)
    }

  }




  const card = [
    {
      progress: "bg-blue-400",
      title: "All Passengers",
      number: "10",
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link : "/ven"
    },
    {
      progress: "bg-blue-400",
      title: "All Buses",
      number: "10",
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link : '/transaction'
    },
    {
      progress: "bg-blue-400",
      title: "All Bookings",
      number: "10",
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link : '/order'
    },
    {
      progress: "bg-blue-400",
      title: "All Transactions",
      number: "10",
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link : '/trans'
    },  
  ];
  return (
    <>
      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4">
        {/* Card */}
        {card.map((card) => {
          return (
            <div className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md" onClick={() => navigate(`${card.link}`)}>
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span className="tracking-widest text-gray-900">
                    {card.title}
                  </span>
                  <span className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold">
                    {card.number}
                  </span>
                </div>
                {/* Icons */}
                <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center">
                  {card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HOC(VendorDashboard);
