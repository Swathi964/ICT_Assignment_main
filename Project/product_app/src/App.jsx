import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Add from './components/Add'
import Home from './components/Home'

function App() {
  
  

  return (
    <>
      
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />}/>

          
        </Routes>
        
        
      
      
      
    </>
  )
}

export default App