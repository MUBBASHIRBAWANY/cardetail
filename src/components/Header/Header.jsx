import { useEffect, useState } from 'react'
import './Header.css'
import Cart from '../Cart/Cart'
import axios from 'axios'
const Header = () => {
  const [cars, setcars] = useState([])
  const [itemCars, setItemCars ] = useState([])
  const [search , setSearch] = useState('')
  const handelVal = (val) =>{
    if(val == "All"){
      setItemCars(cars) 
    }
    else{
      const filterVal = cars.filter((item)=> item.make == val)
      setItemCars(filterVal)
     
    }
    
  }

  const getdata = async () =>{
      let data = await axios.get("https://freetestapi.com/api/v1/cars")
      let res = data.data;
      setcars(res)
  }
  useEffect(()=>{
      getdata()
  },[])
  const drp = [... new Set(cars.map((item)=> item.make)) ]
  
  const dataSearch = () =>{
    
  if(itemCars.length == 0) {
      const filterVal = cars.filter((item)=>item.model.toLowerCase().includes(search.toLowerCase()))
      filterVal.length == 0 ? setItemCars(false) : setItemCars(filterVal)
  }else if(search == ''){
    setItemCars(cars)
  }
  else{
    const filterVal = itemCars.filter((item)=>item.model.toLowerCase().includes(search.toLowerCase()))
    filterVal.length == 0 ? setItemCars(false) : setItemCars(filterVal)
  }
    
  }

  
  return (
    <div>
    <div className='He-warp'>
        <div >
        <h1>CarsDetail.com</h1>
        </div>
        <div>
        <select onChange={(e)=>handelVal(e.target.value)}>
        <option value="All">All</option>

            {
                drp.map((item,key)=>{
                    return(
                    <option key={item} value={item}>{item}</option>
                    )
                })
            }
        </select>
        </div>

    <div className='Name'>
    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
    <button onClick={()=>dataSearch()}>Search</button>

    </div>
    </div>
    <Cart cars={itemCars.length == 0 ? cars : itemCars }  />

</div>

  )
}

export default Header
