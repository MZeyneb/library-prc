import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants'
import axios from 'axios'
const Details = () => {

    const [good, setGood] = useState([])
    const {id} = useParams()

    const getGood = async()=>{
        const res = await axios.get(`${BASE_URL}/${id}`)
        setGood(res.data)
    }
    useEffect(() => {
      
    getGood()
    
    }, [id])
    

  return (
    <>
    {
        good && 
        <div className="product">
            <img src={good.image} alt="" />
            <h3>{good.name}</h3>
            <p>{good.description}</p>
            <p>{good.price}</p>

        </div>
    }
    
    </>
  )
}

export default Details
