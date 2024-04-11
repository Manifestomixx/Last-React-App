import React from "react";
import reactLogo from '../assets/react.svg'

const Products = ({cartItem}) => {
  console.log(cartItem);
  let color = "blue";
  if(color === "red"){
console.log('na red');
  }else{
    console.log('nr be red');
  }
  return (
    <>
    {/* {cartItem.map()} */}
      <main className="container text-center">
        <h2 className=""> My products</h2>
        <img src={reactLogo} alt="react-logo" />
        <div className="container row justify-content-center">
          {cartItem.map((item)=>{
            const {id,img,title,price} = item
            return(
              <div key={id} className="col-6">
                <h2> {title} </h2>
                <img src={img} alt="" />
                <p> {price} </p>
                <button>add to cart</button>
              </div>
            )
          })}
        </div>
        {/* <div> {cartItem.map((item,itx)=>{
          return(
              <div key={itx}>
                <h2> {item} </h2>
              </div>
          )
        })} 
        </div> */}
      </main>
    </>
  );
};

export default Products;