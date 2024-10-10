import './Cart.css'
import { useNavigate } from 'react-router'



const Cart = ({cars ,allCars}) => {
    console.log(cars)
    const navigate = useNavigate()
  return (
    
<>
{
    cars == false ? <div className='main'><p id='NoD'>No Data Found</p> </div> : <div className='main'>
    {
        cars.map((item)=>{
            const {model, make, year, price, id} = item
            return(
                <div class="card">
    
    <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar-ROXX/8438/1723692413550/front-left-side-47.jpg?impolicy=resize&amp;imwidth=480" />
    <p>Name: {model}</p>
    <p>Company: {make}</p>
    <p>Year: {year}</p>
    <p>Price: {price}</p>
    <button onClick={()=>navigate(`/cardetal/${id}`)}>View Detail</button></div>
   
   
            )
        })
    }
   
   </div>
}




   
</>    

  )
}

export default Cart
