import React, { useState } from 'react'
// import {Link} from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"

const Header = () => {
    const [nav, setNav] = useState(false)
    const [head, setHead] = useState(false)
    const navBar = () => {
        if (window.scrollY > 16) {
            setNav(true)
        } else {
            setNav(false)
        }
    }
    window.addEventListener("scroll", navBar)

    const headClick = () => {
        setHead(!head)
    }
    const headClick2 = () => {
        setHead(false)
    }

    return (
        <>
            <div className='header' id={nav ? 'active' : null}>
                <ul>
                    <Link smooth to="#home"> <li className='icon'><i className="fa-solid fa-house"></i> Home</li></Link>
                    <Link smooth to="#about" > <li className='icon'><i className="fa-solid fa-user"></i> About</li></Link>
                    <Link smooth to="#skills" > <li className='icon'><i className="fa-solid fa-user-tie"></i> Skills</li></Link>
                    <Link smooth to="#project" > <li><span className="material-symbols-outlined icon">storage</span> Projects</li></Link>
                    <Link smooth to="#resume" > <li><span className="material-symbols-outlined icon">description</span> Resume</li></Link>
                </ul>
                <ul>
                    <a target="blank" href='https://github.com/pankajborhade7389'><i className="fa-brands fa-github git"></i></a>
                </ul>
            </div>
            <div id='head' className={head ? 'headers' : "heads" }>
                <ul>
                    <Link onClick={headClick2} smooth to="#home"> <div className='icon'><i className="fa-solid fa-house"></i> Home</div></Link>
                    <Link onClick={headClick2} smooth to="#about" > <div className='icon'><i className="fa-solid fa-user"></i> About</div></Link>
                    <Link onClick={headClick2} smooth to="#skills" > <div className='icon'><i className="fa-solid fa-user-tie"></i> Skills</div></Link>
                    <Link onClick={headClick2} smooth to="#project" > <div className='icon'><span className="material-symbols-outlined icon">storage</span> Projects</div></Link>
                    <Link onClick={headClick2} smooth to="#resume" > <div className='icon'><span className="material-symbols-outlined icon">description</span> Resume</div></Link>
                </ul>
                <ul>
                    <a target="blank" href='https://github.com/pankajborhade7389'><i className="fa-brands fa-github git"></i></a>
                </ul>
            </div>
            <i onClick={headClick} className="fa-solid fa-bars fixmobile"></i>
        </>
    )
}

export default Header;