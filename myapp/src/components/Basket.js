import React from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Stack from 'react-bootstrap/Stack';


const Basket = ({removeItem,basket,show,handleClose,totalPrice}) => {
   

  return (
    <>
      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton onClick={handleClose}>
          <Offcanvas.Title>MY BASKET</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Stack gap={3} direction="vertical">
        {
           basket.map(item => { return(

            <Stack key={item.id} gap={2} direction="horizontal" className="d-flex align-items-center mt-3">
            
              <img src={item.image} alt="" style={{width : "150px" , height : "100px" , objectFit:"cover"}}/>
            
              <div className="me-auto">
                <div>x{item.quantity} </div>
                <div>{item.title}</div>
                <div className="text-muted" style={{fontSize:"1.2rem"}}>
                  {item.price*item.quantity}$
                </div>
              </div>
              <div>
              <a href="#" className="btn btn-primary" onClick={()=>{removeItem(item.id)}}>Remove</a>
              </div>
              </Stack>
           )})}

           <div className="d-flex justify-content-end align-items-center">
           <span className="text-muted" style={{fontSize:"1.2rem"}}>
            SubTotal :
           </span>
           <span className="text-muted" style={{fontSize:"2rem", fontWeight:"bold"}}>
            {totalPrice}$
           </span>
           </div>
           </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Basket;


