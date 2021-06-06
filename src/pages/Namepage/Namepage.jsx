import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import NamepageCSS from './NamepageCSS.module.css'

const Namepage = () => {
    const [name,setName] = useState('')

    function inputChange(e){
        setName(e.target.value);
        console.log(name)
    }
    function onClickHandler(){
        localStorage.setItem('username',name)
    }

    return (
        <div className={`container ${NamepageCSS.container}`}>
            <div className={`card ${NamepageCSS.card}`}>
                <h1 className={NamepageCSS.h1}>What's Your Name?</h1>
                <input type="text" onChange={inputChange} value={name} className={`form-control mt-2 mb-3 ${NamepageCSS.input}`} placeholder="Enter your name" />
                <Link to='/'>
                    <button onClick={onClickHandler} className={`btn btn-primary ${NamepageCSS.btn}`}>Remember Me</button>
                </Link>
            </div>
        </div>
    )
}

export default Namepage
