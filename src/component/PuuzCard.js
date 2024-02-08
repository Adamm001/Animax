import React, { useState } from 'react'

const PuuzCard = ({data}) => {
    const [rate, setRate] = useState(0)
  return (
    <div className='card'>
        <img src={data.img} />
        <h1>{data.name}</h1>
        <h5>{data.name}</h5>
        <p>rating: {rate}</p>
        <div className='buttons' >
            <button onClick={() => setRate(rate+1)} >Like</button>
            <button onClick={() => setRate(rate === 0? 0: rate-1)}>Disike</button>
            <button onClick={() => setRate(0)}>Reset</button>
        </div>
    </div>
  )
}

export default PuuzCard