import React from 'react'
import im1 from '../Data/download.png'
import im2 from '../Data/469881-avatar.jpg'
import icon6 from '../Data/i6.png'
import icon7 from '../Data/i7.png'
import icon8 from '../Data/i8.png'
import icon9 from '../Data/i9.png'

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <button><img src={icon9} alt='icon'/></button>
                <div className="search-box">
                    <input type="text" placeholder='Search...'/>
                </div>
                <div className='search-button'><img src={icon6} alt='icon'/></div>
                
            </div>
            <div className='header-action'>
                <div className="user-xp">
                    <div className="user-xp-info">
                        <div className='medku'><img src={icon7} alt='icon'/></div>
                        <span>6000 xp</span>
                    </div>
                    <div className="user-xp-info-link">
                        <img src={im1} alt="logo" />
                        <span>0</span>
                    </div>
                </div>
                <div className="header-profile">
                    <div className='user-control'>
                        <img className='pro' src={im2} alt="pro" />
                        <div className="user-info">
                            <span>Khsblg</span>
                            <strong>
                                <i><img src={icon8} alt='icon'/></i>
                                <p>469881</p>
                            </strong>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Header
