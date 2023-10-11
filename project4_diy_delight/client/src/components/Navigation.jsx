import React from 'react'
import '../App.css'
import '../css/Navigation.css'
import logo from '../assets/logo.png'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><h1>logiCustom</h1></li>
            </ul>

            <ul>
                <li><a href='/' role='button'>Customize</a></li>
                <li><a href='/viewmice' role='button'>View Mice</a></li>
            </ul>
            
        </nav>
    )
}

export default Navigation