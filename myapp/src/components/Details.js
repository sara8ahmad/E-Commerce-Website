import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Card from './Card';
import { Link } from 'react-router-dom';

const Details = ({handelItems}) => {
    const [product,setProduct] = useState({});
    const {productId} = useParams();
 

    useEffect(
        ()=>{
            fetch(`http://localhost:3000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
        },[] )



  return (
    <div className='details-containter'> 
    <div className="card mb-3 mt-5" >
  <div className="row g-0">
    <div className="col-12 col-lg-6 col-md-6">
      <img src={product.image}  alt="..."/>
    </div>
    <div className="col-12 col-lg-6 col-md-6 d-flex align-items-center">
      <div className="card-body">
        <h5 className="card-title font-w">{product.title}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><h3 className="text-muted">Price :{product.price}$</h3><span> $800.99 </span></p>
        <Link to={"/products"}>
          <button type="button" className="btn">Back To Products</button>
        </Link>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Details