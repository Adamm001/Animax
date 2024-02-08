import React from 'react'
import miniLogo from '../Data/logo-mini.png'

const Sidebar = () => {
  return (
    <div className='sideBar'>
        <a href='#' className='sideLogo'>
        <img src={miniLogo} />
        </a>
        
        <ul className='sideMenu'>
            <li>
                <link to="/">Home</link>
            </li>
            <li>
                <link to="/">Anime</link>
            </li>
            <li>
                <link to="/">Movie</link>
            </li>
            <li>
                <link to="/">Teatr</link>
            </li>
            <li>
                <link to="/">Erkh sungah</link>
            </li>

        </ul>
    </div>
  )
}

export default Sidebar