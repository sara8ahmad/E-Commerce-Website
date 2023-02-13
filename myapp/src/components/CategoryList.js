import React from 'react'
import Category from "./Category";
import { useEffect , useState } from 'react';

const CategoryList = ({basket , setBasket,incrementCounter}) => {
    const [categorys , setCategory] = useState([]);

    /* handle category items in basket */

    const handelItem = (item , id) =>{
      item.quantity = 1;
      item.total = 0;
     const productExist = categorys.find(category => category.id === item.id );
     const basketExist = basket.find(item => item.id === id);
      if(productExist && !basketExist){
          setBasket([...basket,item])
      }
      else {
        setBasket((basket)=>{
        return basket.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
    })})}}

    const allCategory = () => {
        fetch("http://localhost:3000/categorys")
      .then(res=>res.json())
      .then(data=>setCategory(data))};

    useEffect (
        ()=>{
           allCategory()
            }
        ,[] )

  return (
    <div className='row'>
    {
        categorys.map(category => 
         <div className="col-lg-4 col-md-12 col-12 mb-3" key={category.id}>
         <Category category={category} handelItem={handelItem} />
         </div>)
    }
    </div>
  )
}

export default CategoryList;