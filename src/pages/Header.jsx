import './header.css'
import logo from '../assets/Logo-removebg-preview.png'
import { useState } from "react"

function Header(){

    const [seeMenuActive, setSeeMenuActive] = useState(false)


    return (<div className="header">

        {!seeMenuActive && 
        <div className='header_logo_container'>
            <img className='header_logo' src={logo}></img>
        </div>}
        


        <div className={`header_menuActive_options ${seeMenuActive ? 'activa' : ''}`}>
            
            <div className='header_menuActive_options_home'>
                <a className='header_menuActive_option' href='/'>Inicio</a>
            </div>
            <div className='header_menuActive_options_about'>
                <a className='header_menuActive_option' href='/terapia'>Terapia</a>
            </div>
            <div className='header_menuActive_options_appointment'>
                <a className='header_menuActive_option' href='/turnos'>Turnos</a>
            </div>
            
            

            
            <button className='menu_icon_x' onClick={()=>{setSeeMenuActive(!seeMenuActive)}}>X</button>
    
            </div>

            {!seeMenuActive && 
                <button className='menu_icon' onClick={()=>{setSeeMenuActive(!seeMenuActive)}}>☰</button>
            }

            
        

        {!seeMenuActive && 
        <div className='header_options_container'>
        <div className='header_options_home'>
            <a className='header_option' href='/'>Inicio</a>
        </div>
        <div className='header_options_about'>
            <a className='header_option' href='/terapia'>Terapia</a>
        </div>
        <div className='header_options_appointment'>
            <a className='header_option' href='/turnos'>Turnos</a>
        </div>
        
        
    </div>}

    </div>)
}


export default Header