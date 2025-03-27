import React from 'react'
import "./FoodCard.css"
import { useNavigate } from 'react-router-dom'

function FoodCard({img,name,desc,cat,data}) {
  const navigate=useNavigate()
  return (
    <div className='FoodCarddiv' onClick={()=>navigate("/details",{state:{item:data}})}>
        <img className='FoodCardimg' src={img} alt="" />
        <h2>{name}</h2>
        <p>{desc.length >50 ? desc.slice(0,20)+"...":desc}</p>
        <h3>Category:- {cat}</h3>
    </div>
  )
}

export default FoodCard