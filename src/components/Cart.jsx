import React, { useState } from "react";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);
  console.log(cart);
  return (
    <div>
      <h1>Carts</h1>
      <div>
        {cart?.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} />
              <p>{item.title}</p>
            </div>
            <div>
              <button> + </button>
              <button>{item.amount}</button>
              <button> - </button>
            </div>
            <div>
              <span>{item.price}</span>
              <button>Remove</button>
            </div>
          </div>
        ))}
        <div>
          <p>Total Price of your cart</p>
          <span>Rs - {price}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
