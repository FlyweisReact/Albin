import axios from 'axios'
import React, { useState } from 'react'

const Offers = () => {

    const [ data , setData ] = useState([])

    const fetchData = async () => {
            try{    
                const { data } = await axios.get("https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/offers/getalloffersByAdmin")
                setData(data)
            }catch(e){
                console.log(e)
            }
    }

  return (
    <>
        <p style={{color : 'black' , fontSize :' 2rem'}}>All Offers</p>

                <div >
                    {data?.data?.map((i , index) => (
                        <div key={index} >
                        <img src={i.image} alt='' />
                        <p>descriptino</p>
                        </div>
                    ))}
                </div>

    </>
   )
}

export default Offers