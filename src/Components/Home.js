import React from 'react'
import Header from './Header'
import { Typewriter, useTypewriter } from 'react-simple-typewriter'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Footer from './Footer'
// import img1 from "../img/imag.png"

const Home = () => {


    useTypewriter({
        words: ['Hello'],
        loop: 0 // Infinit
    })


    return (
        <div className='container'>
            <Header />
            <div className='home' id='home'>
                <div className='home_main'>
                    <div className='hii'>
                        <h1>Hi,</h1>
                        <h1>I am <span className='name'>Pankaj Borhade</span></h1>
                    </div>

                    <div className='writer'>
                        <Typewriter
                            words={["Front End Developer", "Pursuing MERN Stack Development"]}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /><br />
                        <a href='https://www.linkedin.com/in/pankaj-borhade-a33307215/' target="blank"><i className="fa-brands fa-linkedin"></i></a>
                        <a target="blank" href='https://github.com/pankajborhade7389'><i className="fa-brands fa-github "></i>
                        </a>
                        <a target="blank" href='https://www.instagram.com/_punk_7389__/'><i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className='img'></div>
            </div>
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}


export default Home