import axios from 'axios'
import React from 'react'

const Offers = () => {

    const fetchData = async () => {
            try{    
                const { data } = await axios.get("https://5o53oluanh.execute-api.ap-south-1.amazonaws.com/development/offers/getalloffersByAdmin")
            }catch(e){
                console.log(e)
            }
    }

  return (
    <>
        <p style={{color : 'black' , fontSize :' 2rem'}}>All Offers</p>

        <div >
        <div>
            
        <img src={} alt=''  />
        <p></p>
        </div>
        </div>
    </>
   )
}

export default Offers