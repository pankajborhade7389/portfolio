import React from 'react'
import img from "../img/imgs.jpg"

const About = () => {
    return (
        <div className='about' id='about'>
            <h1>A little about <span>Myself</span></h1>
            <div className='about_me'>
                <div className='about_dis'>
                    <div className='myname'> Hi, I am <span>Pankaj Borhade</span> from Pune, Maharashtra, India. 
                    <span> Currently staying at </span>Mumbai.</div>
                    
                    <ul>
                        <li>
                            <i className="fa-regular fa-circle-check"></i> I am quite interested in IT field and curious to earn experience. Self Motivated, Always serious about work and very much interested to build web development Projects.
                        </li>
                        <li>
                            <i className="fa-regular fa-circle-check"></i> Whenever possible, I also apply my passion for developing products with Modern Javascript Library  like React.js.
                        </li>
                        <li>
                            <i className="fa-regular fa-circle-check"></i> Passionate learner and a developer in React, Javascript, Git , CSS and HTML.
                        </li>
                        <li>
                            <i className="fa-regular fa-circle-check"></i> I want to build my career and gain experience in IT field. I am therefore currently looking for an internship or a job as a frontend developer.
                        </li>
                    </ul>
                </div>
                <div>
                    <img src={img}  alt="Not Found"/>
                </div>
            </div>
        </div>
    )
}

export default About;