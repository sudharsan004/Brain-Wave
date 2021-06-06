import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.svg'
import HomepageCSS from './HomepageCSS.module.css'

const Homepage = () => {
    const name = localStorage.getItem('username')
    return (
        <div className={`container ${HomepageCSS.container}`}>
            <div className={`card ${HomepageCSS.card}`}>
                <div className={HomepageCSS.imgdiv}>
                    <img src={logo} alt="logo" className={HomepageCSS.img} />
                </div>
                <h1 className={HomepageCSS.h1}>Brain Wave</h1>
                
                <Link to={`${name ? '/main' : '/name'}`}>
                    <button className={`btn btn-primary ${HomepageCSS.btn}`}>Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default Homepage
