import './home.css';
import HomeImage from '../assets/Brain_NoBackground.png'
import { useEffect, useRef } from 'react';


function Home(){

    const myRef = useRef(null)

    useEffect(()=>{
        const observer = new IntersectionObserver((entries, observer)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    entry.target.classList.add("visible")
                    observer.unobserve(entry.target)
                }
            })
        })
        
        if(myRef.current){
            observer.observe(myRef.current)
        }

        
    }, [])

    


    return(<div className="home" >
        <div className="home_image_container" ref={myRef}>
            <p className='home_paragraph'>Psicóloga Especialista en<br></br>Psicoterapia Cognitiva Integrativa<br></br>
            <label style={{fontSize: "20px"}}>M.P. 667</label></p>
            
            <img className='home_image' src={HomeImage}></img>
        </div>
    </div>)
}


export default Home