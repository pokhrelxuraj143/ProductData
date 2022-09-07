import React from 'react'
import { useParams } from 'react-router-dom'
import ProductData from './ProductData';

export default function Details() {
    let {id}=useParams();
    let ProductDisplay=ProductData.find((e)=>e.id==id);
  return (
   <>
    <div>Product Details</div>
    {ProductDisplay.title}
    <p>{ProductDisplay.description}</p>
   </>
  )
}
