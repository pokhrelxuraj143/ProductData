import React from 'react';
import ProductData from './ProductData';
import { Link } from 'react-router-dom';


export default function Product() {
    return (
        <>
            <div className="flex">
                {ProductData.map((a) => (
                    <div id='main'>
                        <img src={a.image} />
                        <h2><Link to={`/details/${a.id}`}>{a.title}</Link></h2>
                        <p>{a.price}</p>
                    </div>
                ))}
            </div>

        </>
    )
}
