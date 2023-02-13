import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({product , handelItems}) => {
  return (

   
  <div className="card">
  <img src={product.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title">{product.title}</h4>
    <div class="price">{product.price}$  <span> $800.99 </span> </div>
    <div className='align'>
    <Link to = {`/product/${product.id}`}>
    <button className="btn btn-primary">Details</button>
    </Link>
    <button  className="btn btn-primary" onClick={()=>{ handelItems(product,product.id)}}>Add to Card</button>
</div>
</div>
</div>


  )
}

export default Card;