import './terapia.css'
import imagen_terapia from '../assets/brain-picture-z79vxhgnvw9myvyw-removebg-preview.png'


export default function Terapia(){

    return (<div className="terapia">

        {/* <div className='border_top'></div> */}
        <div className='text_image_container'>
            
            <div className='p_container'>
                <label>¿De qué trata la terapia?</label>
                <p>Cuando una persona decide iniciar un tratamiento psicoterapéutico se busca que cada
                encuentro lo sienta como un espacio en el seguro donde puede expresar lo que le sucede,
                contar cuestiones que hacen a lo más íntimo de su ser, como su historia, miedos,
                preocupaciones, como así también lo que lo hace feliz. Es un espacio de trabajo que está
                orientado, mediante las palabras, reflexiones y actividades de acuerdo a la necesidad y
                procesos de cada quien, a mejorar su calidad de vida.</p>
                <p id='p_2'>Duración de la sesión: 50 minutos</p>
            </div>
            
            <div className='image_container'>
                <img className='imagen_terapia' src={imagen_terapia}></img>
            </div>
        
        </div>
    </div>)
}