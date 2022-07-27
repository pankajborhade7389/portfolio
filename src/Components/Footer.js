import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='footer' id='resume'>
                <h1>Pankaj Borhade</h1>
                <div className='contact'>
                    <div>Mobile : 7045802210 --</div>
                    <div><a href="mailto:https://www.pankajborhade333@gmail.com" target="blank">Mail To : <div className='email'> pankajborhade333@gmail.com</div> </a></div>
                </div>
                <div id='resume2'><button>Resume</button> <div></div></div>
                <div className='footer_icon'>
                    <a href='https://www.linkedin.com/in/pankaj-borhade-a33307215/' target="blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a target="blank" href='https://github.com/pankajborhade7389'><i className="fa-brands fa-github "></i></a>
                    <a target="blank" href='https://www.instagram.com/_punk_7389__/'><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer