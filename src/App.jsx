import Header from './components/Header/Header'
import CarDetail from './Pages/CarDetail/CarDetail'
import CartPage from './Pages/CartPage/CartPage'
import { Routes, Route } from 'react-router'
const App = () => {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<CartPage />} />
      <Route path='/cardetal/:id' element={<CarDetail />} />
    </Routes>
     
    </>
  )
}

export default App
