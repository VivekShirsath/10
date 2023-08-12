
import { Route,Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { SideBar } from './components/SideBar'
import { Department } from './pages/Department'
import { Product } from './pages/Product'
import { NewProduct } from './pages/NewProduct'
import './App.css'
import { Specific } from './pages/Specific';

function App() {
  
  return (
    <div className='flex gap-3'>
   <SideBar/>
    <Routes>
      <Route>
          <Route path="/" element={<Home/>}/>
          <Route path="/department" element={<Department/>}/>
          <Route path="/dep/:name" element={<Product/>}/>
          <Route path="/new" element={<NewProduct/>}/>
          <Route path="/specific/:id" element={<Specific/>}/>
      </Route>
    </Routes>
     
    </div>
  )
}

export default App
