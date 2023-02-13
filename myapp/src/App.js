import React from "react";
import { useEffect,useState } from "react";
import './App.css';
import {Route,Routes,BrowserRouter} from "react-router-dom";
import Details from "./components/Details";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";
import CategoryList from "./components/CategoryList";
import Basket from "./components/Basket";
import Form from "./components/Form";
import FormIn from "./components/FormIn";
import CardSlider from "./components/CardSlider";
import About from "./components/About";
import ContactUs from "./components/ContactUs";


function App() {
  const [products , setProduct] = useState([]);
  let dataFromLocalStorage = JSON.parse(localStorage.getItem("basket"));
  const [basket , setBasket] = useState(dataFromLocalStorage? dataFromLocalStorage : []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const allProduct = () => {
      fetch("http://localhost:3000/products")
    .then(res=>res.json())
    .then(data=>setProduct(data))
  };

  const handelItems = (item , id) =>{
    item.quantity = 1;
    item.total = 0;
   const productExist = products.find(product => product.id === item.id );
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
   
    console.log(basket);
    
  

    const cartQuantity = basket.reduce(
      (quantity, item) => item.quantity + quantity,
      0
    );

    const totalPrice = basket.reduce((total,item) =>
     {return total + item.price*item.quantity},0
    )


    useEffect( ()=>{
      window.localStorage.setItem("basket", JSON.stringify(basket));
     }, [basket]);  


     const removeItem = (id) => {
      console.log(id);
      const newList = basket.filter((item) => item.id !== id);
      setBasket(newList);
     }

  useEffect(()=>{

 allProduct() } ,[] );

  return (
    <div className="body">
      <div className="container">
        <div className="contain-padding">
        <BrowserRouter>

        <Navbar cartQuantity={cartQuantity} handleShow={handleShow} />

        <Basket products={products} basket={basket} setBasket={setBasket} 
        removeItem={removeItem} 
        show={show} handleClose={handleClose} handleShow={handleShow} totalPrice={totalPrice} /> 

     <Routes>
      <Route path ="/" element={
        <> 
     
      <h2 className="title">Modern Furntiure</h2>
      <Slider /> 
      <CardSlider />
      </> }/>
      <Route path="/products" element={
        <>
       
      <div className="row"> 
        <div className="col-2">
      <Sidebar />
      </div>
      <div className="col-10">
      <p className='head'>Shop By Room</p>
      <CardList products = {products} setProduct = {setProduct} handelItems={handelItems}/>
      <p className='head'>Featured Category</p>
      <CategoryList products = {products} setProduct = {setProduct} handelItems={handelItems} basket={basket} setBasket={setBasket} />
      </div>
      </div>
      
      </> } />
      <Route path="product/:productId" element={<Details />}/>
      <Route path="/form" element={<>
      <Form/>
      </>}/>
      <Route path="/formIn" element={<>
      <FormIn/>
      </>}/>
      <Route path="/about" element ={
        <>
      <About />
      </>}/>
      <Route path="/contactUs" element ={
        <>
      <ContactUs />
      </>}/>
      </Routes>
      </BrowserRouter>
    </div>
   
     <Footer />

     </div>
     </div>
  );
}

export default App;
