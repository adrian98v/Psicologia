import './home.css';
import HomeImage from '../assets/Brain_NoBackground.png'


function Home(){
    
    return(<div className="home">
        <div className="home_image_container">
            <p className='home_paragraph'>Psicóloga Especialista en<br></br>Psicoterapia Cognitiva Integrativa<br></br>
            <label style={{fontSize: "20px"}}>M.P. 667</label></p>
            
            <img className='home_image' src={HomeImage}></img>
        </div>
    </div>)
}


export default Home