import React from 'react'
import PuuzCard from './PuuzCard'
import '../Css/puuz.css'
import im1 from '../Data/image1.png'
import im2 from '../Data/image2.png'
import im3 from '../Data/image3.png'
import im4 from '../Data/image4.png'
import im5 from '../Data/image5.png'
import im6 from '../Data/image6.png'

const Puuz = () => {
    const datas = [{name:'Nike', desc:'Adidas', img:im1},
    {name:'Nike', desc:'Adidas', img:im2},
    {name:'Nike', desc:'Adidas', img:im3},
    {name:'Nike', desc:'Adidas', img:im4},
    {name:'Nike', desc:'Adidas', img:im5},
    {name:'Nike', desc:'Adidas', img:im6},] 
  return (
    <div className='body'>
        {datas.map((data) => <PuuzCard data={data} />)}
    </div>
  )
}

export default Puuz