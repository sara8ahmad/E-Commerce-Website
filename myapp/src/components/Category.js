import React from 'react'

const Category = ({category,handelItem}) => {
  return (
    <div className="card">
    <img src={category.image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{category.title}</h5>
      <div class="price">  {category.price}$ <span> $800.99 </span> </div>
      <a href="#" className="btn btn-primary" onClick={()=>{handelItem(category,category.id)}}>Add to Card</a>
  </div>
  </div>
  )
}

export default Category;