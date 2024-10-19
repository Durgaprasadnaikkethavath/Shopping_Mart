import React from "react";
import { list } from "../Data";
import "./CSS/Am.css";
const Am = ({ handleClick }) => {
  return (
    <div>
      <h1>Am Shopping Mart</h1>
      <div className="am_container">
        {list.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.img} />
              <p>{item.title}</p>
              <p>{item.author}</p>
              <p>{item.price}</p>
              <button
                onClick={() => {
                  handleClick(item);
                }}
              >
                AddToCart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Am;
