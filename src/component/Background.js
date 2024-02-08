import React, { useState } from 'react'
import '../Css/background.css'

const Background = () => {
    const [like, setLike] = useState('On')
  return (
    <div className={like}>
        <button onClick={() => setLike(like==='On'? 'Off': 'On')}>{like} </button>
    </div>
  )
}

export default Background