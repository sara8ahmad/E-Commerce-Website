
import Card from './Card';

const CardList = ({products,setProduct,handelItems}) => {

   
  return (
    
    <div className='row'>
    {
        products.map(product => 
         <div className="col-lg-4 col-md-12 col-12 mb-4" key={product.id}>
         <Card product={product} setProduct={setProduct} handelItems={handelItems} />
         </div>)
    }
    </div>
  
       
  )
}

export default CardList;