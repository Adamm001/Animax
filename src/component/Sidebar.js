import React from 'react'
import miniLogo from '../Data/logo-mini.png'
import icon1 from '../Data/i1.png'
import icon2 from '../Data/i2.png'
import icon3 from '../Data/i3.png'
import icon4 from '../Data/i4.png'
import icon5 from '../Data/i5.png'

const Sidebar = () => {
  return (
    <div className='sideBar'>
        <div className='sideLogo'>
        <img className='miniLogo' src={miniLogo} alt='icon' />
        </div>
        
        <ul className='sideMenu'>
            <li>
                <div className='a'>
                    <img src={icon1} alt='icon'/>
                </div>
            </li>
            <li>
                <div className='a'>
                    <img src={icon2} alt='icon'/>
                </div>
            </li>
            <li>
                <div className='a'>
                    <img src={icon3} alt='icon'/>
                </div>
            </li>
            <li>
                <div className='a'>
                    <img src={icon4} alt='icon'/>
                </div>
            </li>
            <li>
                <div className='a'>
                    <img src={icon5} alt='icon'/>
                </div>
            </li>

        </ul>
    </div>
  )
}

export default Sidebar