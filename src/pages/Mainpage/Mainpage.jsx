import React from 'react'
import HomepageCSS from '../Homepage/HomepageCSS.module.css'

const Mainpage = () => {
    const username = localStorage.getItem('username')
    return (
        <div className={`container ${HomepageCSS.container}`}>
            <div className={`card ${HomepageCSS.card}`}>
                <div className={HomepageCSS.imgdiv}>
                    
                </div>
                <h1 className={HomepageCSS.h1}>Brain Wave</h1>
                
            </div>
        </div>
    )
}

export default Mainpage
