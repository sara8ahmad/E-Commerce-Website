useEffect( ()=>{
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);
  let dataFromLocalStorage = JSON.parse(localStorage.getItem("basket") || "[]");

  const str = `{"name": "abc","messages":["msg 1","msg 2","msg 3"],"age":100}
  `;
  
  const myObject = JSON.parse(str);
  
    console.log(myObject);
  

  
  const data = ()=>{

    let dataFromLocalStorage = JSON.parse(localStorage.getItem("basket"));
    if( dataFromLocalStorage != null){
     setBasket(dataFromLocalStorage);
    }}



  if( localStorage.basket != null){
    dataFromLocalStorage= JSON.parse(localStorage.getItem("basket"));
}
else{
    dataFromLocalStorage=[];
}

<div className='total' >
        
        
<video className="video" autoPlay loop muted>
  <source src={video} type="video/mp4" />
</video>
</div>


       /*
         <div className="col-6" key={item.id}>
         <div className="card card-basket">
  <img src={item.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary" onClick={()=>{removeItem(item.id) ; dicrementCounter()}}>Remove</a>
         </div>
         </div>
    
    </div>*/

    const handelItems = (item , id) =>{
      item.quantity = 1;
      item.total = 0;
     const productExist = products.find(product => product.id === item.id );
     const basketExist = basket.find(item => item.id === id);
      if(productExist && !basketExist){
          setBasket([...basket,item])
      }
  
  /*
      else{ return setBasket([{ ...basket, quantity: item.quantity + 1 }]); }  */
      else {
        setBasket((basket)=>{
        return basket.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
    })})}}
      /*
      else {
        return basket.map((item) => {
          if (item.id === id) {
            return setBasket({ ...item, quantity: item.quantity + 1 }); }})
    
    } */
      console.log(basket);
      
    /*
      const handelItems = (item) =>{
        const {items =[]} = basket
        const productExist =  products.findIndex(product => product.id === item.id );
        if(productExist === -1){
            items.push(
              {...item , qyt:1}
            )
        }*/
        /*
        else{basket[productExist].qyt++;}
        }*/
        
  
  
  
    const getQuantity = (id)=> {
      return(basket.find(item => item.id === id)?.quantity || 0 );
    }
    /*
    const increaseQuantity = (id) =>{
      setBasket((prev)=>{
        if(prev.find(item => item.id === id) == null){
          return [...prev , {quantity :1}]
        }
        else if(prev.map(item =>(item.id === id))){
            return{...item , quantity : item.quantity+1}}
            else{return item;}
        }
    
      )}*/
      /*
      const increaseQuantity = (id) => {
        setBasket((basket) => {
          if (basket.find((item) => item.id === id) == null) {
            return [...basket, { id, quantity: 1 }];
          } else {
            return basket.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
              } else {
                return item;
              }
            });
          }
        });
      };*/


      /*
<div className='row'>
<section className="vh-100 start">
<div className="container h-100">
<div className="row d-flex justify-content-center align-items-center h-100">
<div className="col">
<p><span className="h2">Shopping Cart </span><span className="h2">{counter}</span></p>

{
basket.map(item => { return(
<div className="card mb-4">
<div className="card-body p-4">

  <div className="row align-items-center">
    <div className="col-md-4">
      <img src={item.image}
        className="img-fluid" alt="Generic placeholder image"/>
    </div>
    <div className="col-md-2 d-flex justify-content-center">
      <div>
        <p className="small text-muted mb-4 pb-2">Name</p>
        <p className="lead fw-normal mb-0">{item.title}</p>
      </div>
    </div>
 
    <div className="col-md-2 d-flex justify-content-center">
      <div>
        <p className="small text-muted mb-4 pb-2">Quantity</p>
        <p className="lead fw-normal mb-0">1</p>
      </div>
    </div>
    <div className="col-md-2 d-flex justify-content-center">
      <div>
        <p className="small text-muted mb-4 pb-2">Price</p>
        <p className="lead fw-normal mb-0">$799</p>
      </div>
    </div>
    <div className="col-md-2 d-flex justify-content-center">
      <div>
      <a href="#" className="btn btn-primary" onClick={()=>{removeItem(item.id) ; dicrementCounter()}}>Remove</a>
      </div>
    </div>
  </div>

</div>
</div>
)} )}
<div className="card mb-5">
<div className="card-body p-4">

  <div className="float-end">
    <p className="mb-0 me-5 d-flex align-items-center">
      <span className="small text-muted me-2">Order total:</span> <span
        className="lead fw-normal">$799</span>
    </p>
  </div>

</div>
</div>

<div className="d-flex justify-content-end">
<Link to={"/products"}>
<button type="button" className="btn">Continue Shopping</button>
</Link>

</div>

</div>
</div>
</div>
</section>
</div>*/