import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartActions";

export default function Cartscreen() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;

  const subtotal = cartItems.reduce((x, item) => x+item.price, 0)
  const dispatch = useDispatch();

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>My Cart</h2>
          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="text-left m-1 w-100">
                  <h2>
                    {item.name} [{item.varient}]
                  </h2>
                  <h1>
                    {}
                    Price : {item.quantity} * {item.prices[0][item.varient]} = {" "}
                    {item.price}
                  </h1>
                  <h1 style={{ display: "inline" }}>Quantity : </h1>
                  <i className="fa-solid fa-plus" aria-hidden="true" onClick={() => dispatch(addToCart(item, item.quantity+1, item.varient))}></i>
                  <b>{item.quantity}</b>
                  <i className="fa-solid fa-minus" aria-hidden="true" onClick={() => dispatch(addToCart(item, item.quantity-1, item.varient))}></i>
                  <hr />
                </div>
                <div className="m-1 w-100">
                  <img
                    src={item.image}
                    style={{ height: "100px", width: "100px" }}
                  />
                </div>
                <div className="m-1 w-100">
                    <i className="fa fa-trash mt-5" aria-hidden="true" onClick={() => dispatch(deleteFromCart(item))}></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4">
          <h2 style={{fontSize: '55px' }}>Subtotal: {subtotal} /$</h2>
          <button className="btn">CHECK OUT</button>
        </div>
      </div>
    </div>
  );
}
