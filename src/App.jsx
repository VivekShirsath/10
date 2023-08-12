
import { Route,Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import './App.css'

function App() {
  
  return (
    <>
    <h3 className='bg-red-400'>asa</h3>
    <Routes>
      <Route>
          <Route path="/" element={<Home/>}/>
      </Route>
    </Routes>
     
    </>
  )
}

export default App
