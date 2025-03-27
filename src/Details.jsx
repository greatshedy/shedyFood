import React from 'react'
import { useLocation } from 'react-router-dom'
import "./App.css"
import Nav from '../componenet/Nav'

function Details() {
    const new_info=useLocation()
    const data=new_info.state.item
  return (
    <div className='detailsdiv'>
        <Nav/>
        <div className='detailsdiv5'>
        <div className='detailsdiv1'>
            <img src={data.strMealThumb} alt="" />
        </div>

        <div className='detailsdiv2'>
            <h1>{data.strMeal}</h1>
            <p>{data.strInstructions}</p>
            <h3>Category:- {data.strCategory}</h3>
            <h3>Area:- {data.strArea}</h3>
            <h3>Tags:- {data.strTags}</h3>
            <div>
                <button><a href={data.strYoutube}>Watch on Youtube</a></button>
                <button><a href={data.strSource}>Source</a></button>
            </div>
            
        </div>
        </div>
        
    </div>
  )
}

export default Details