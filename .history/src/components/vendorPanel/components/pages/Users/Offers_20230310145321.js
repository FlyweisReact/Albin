import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HOC from '../../layout/HOC'

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

    useEffect(() => {
        fetchData()
    },[])

  return (
    <>
        <p style={{color : 'black' , fontSize :' 2rem'}}>All Offers</p>

                <div  className='BannerImg'>
                    {data?.data?.map((i , index) => (
                        <div key={index}  style={{border : '1px solid black' , marginTop : '40px'}}>
                        <img src={i.image} alt='' />
                        <p style={{color : 'black'}}>{i.desc}</p>
                        </div>
                    ))}
                </div>

    </>
   )
}

export default HOC(Offers)