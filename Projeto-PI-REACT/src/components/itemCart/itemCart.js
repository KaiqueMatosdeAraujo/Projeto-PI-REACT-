import { Link } from "react-router-dom";
import CartContext from "../../context/cart.provider";
import React, { useContext, useState } from "react";
import './itemCart.css'

import lixeira from "../../pages/cart/imgs/lixeira.png";


function ItemCart(props) {
    const { deleteCart } = useContext(CartContext);
    

  return (
    <>
      <div className="cart-product">
        <div className="cart-image">
          <img
            src={props.doll1}
            className="doll1"
            width="100px"
            height="100px"
          />
        </div>
        <div className="cart-product-info">
          <p className="cart-product-name">{props.name}</p>
          <p className="cart-price-sm">R$ {props.price}</p>
          <small>x 1</small>
        </div>
      </div>
      <div className="remove-1">
        <button type="button" onClick={() => deleteCart(props.id)}>
          <img src={lixeira} alt="lixeira" width="30px" height="30px" />
        </button>
      </div>
      <div className="cart-quantity-md">
        <div className="cart-quantity-controls">
          <button className="btn-menos btn-CustomCart" >-</button>
            <div><strong>85</strong></div>
          <button className="btn-mais btn-CustomCart" >+</button>
        </div>
      </div>
      <div className="cart-unit-price">
        <h4>R${props.price}</h4>
      </div>
      <div className="cart-product-total">
        <h4>R${props.total}</h4>
      </div>

    
    </>
    
  );
}

export default ItemCart;
