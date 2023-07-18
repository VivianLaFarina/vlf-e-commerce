
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/login'
import Purchases from './pages/Purchases'
import Product from './pages/Product'
import Header from './components/layout/Header'
import NotFound from './pages/NotFound'

function App() {

  return (
    <section className=' grid grid-rows-[auto_1fr] font-["Rubik Pixels"] min-h-screen '>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/purchases' element={<Purchases />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/*' element={<NotFound />} />

      </Routes>
    </section>
  )
}

export default App
