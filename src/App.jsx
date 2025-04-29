import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './pages/Header.jsx'
import Home from './pages/Home.jsx'
import Turnos from './pages/Turnos.jsx'
import Terapia from './pages/Terapia.jsx'

function App() {

  return(
    <Routes>
       <Route path="/" element={<>
        <Header/>
        <Home /></>} />

        <Route path="/turnos" element={<>
          <Header/>
          <Turnos /></>} />
        
        <Route path='/terapia' element={<>
        <Header></Header>
        <Terapia></Terapia>
        </>}></Route>
    </Routes>
    

  )
    
}

export default App
