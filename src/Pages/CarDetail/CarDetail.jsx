import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import './CarDetail.css'
import axios from 'axios'
import { Link } from 'react-router-dom'




const CarDetail = () => {
    const {id} = useParams()
    console.log(id)

    const [findCar, setFindCar] = useState([])
    const getdata = async () =>{
        let data = await axios.get("https://freetestapi.com/api/v1/cars")
        let res = data.data;
        let fcar = res.find((item) => item.id == id)
        setFindCar([fcar])
    }
    useEffect(()=>{
        getdata()
    },[])
    console.log(findCar)
  return (
    <div className='crDet'>
      {
        
        findCar.map((item)=>{
                    const {model, make, year, price, id} = item
                    return(
                        <div class="card1">
            
            <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar-ROXX/8438/1723692413550/front-left-side-47.jpg?impolicy=resize&amp;imwidth=480" />
            <p>Name: {model}</p>
            <p>Company: {make}</p>
            <p>Year: {year}</p>
            <p>Price: {price}</p>
        <Link to="/" >   <button >GO Back</button> </Link>
        </div>
           
           
                    )
                })
            }
      
    </div>
  )
}

export default CarDetail
