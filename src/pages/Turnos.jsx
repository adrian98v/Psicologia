import './turnos.css'
import { useState } from "react"
import figure from '../assets/iahnjjtnksodb51aruc5de7ihp.png'


function Turnos(){

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, settelefono] = useState("")
    const [modalidad, setModalidad] = useState("")
    const [edad, setEdad] = useState("")


    function handleSubmit(e){
        e.preventDefault();

        if(modalidad && nombre && apellido && telefono && edad){


            const mensaje = `Hola! Quiero agendar un turno ${modalidad}.\nMi nombre es ${nombre} ${apellido} y tengo ${edad} años.\nMi número de teléfono es ${telefono}`;
            
            const whatsappNumber = "5493624644293"
    
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`
    
            window.open(url, "_blank");
        }else{
            window.alert("Por favor ingrese todos los datos")
        }

        

    }


    return(<div className='turnos'>
       <img className='turnos_figure_left' src={figure}></img>
        <div className='turnos_form_container'>
            <form onSubmit={handleSubmit} className='turnos_form' >
                <label id='label_1'>Ingrese sus datos para pedir un turno</label>
          
                <input type="text" placeholder="Nombre" name="nombre" onChange={(e)=>{setNombre(e.target.value)}}/>
                
                <input type="text" placeholder="Apellido" name="apellido" onChange={(e)=>{setApellido(e.target.value)}}/>
             
                <input type="text" placeholder="Teléfono" name="telefono" onChange={(e)=>{settelefono(e.target.value)}}/>
                
                <input
                 type="number"
                 placeholder="Edad"
                 name="edad"
                 min="0"
                 onChange={(e) => setEdad(e.target.value)}/>
                
                <label id="modalidad">Modalidad</label>
                <div className='modalidad_button_container'>
                <label id="checkbox-label">
                    <input type="radio" name="modalidad" value="presencial" onChange={(e)=>{setModalidad(e.target.value)}} />
                        Presencial
                </label>
                <label id="checkbox-label">
                    <input type="radio" name="modalidad" value="virtual" onChange={(e)=>{setModalidad(e.target.value)}}/>
                        Virtual
                </label>
                </div>
                
           
                <button type='submit' className='turnos_button_enviar'>Enviar</button>
            </form>
        </div>
        
        <img className='turnos_figure_right' src={figure}></img>
    </div>

    )
}


export default Turnos