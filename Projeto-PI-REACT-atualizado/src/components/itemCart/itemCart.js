import CartContext from "../../context/cart.provider";
import React, { useContext, useState, useEffect } from "react";
import "./itemCart.css";
import lixeira from "../../pages/cart/imgs/lixeira.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ItemCart(props) {
  const notifyDelete = () => toast.success("Deletado com sucesso");

  const { deleteCart } = useContext(CartContext);

  var atual = props.price;
  var precoFormat = atual.toLocaleString("pt-br", { minimumFractionDigits: 2 });

  var atualTotal = props.total;
  var totalFormat = atualTotal.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });

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
          <p className="cart-price-sm">R$ {precoFormat}</p>
        </div>
      </div>
      <div className="remove-1">
        <button
          type="button"
          onClick={() => {
            deleteCart(props.id);
            notifyDelete();
          }}
        >
          <img src={lixeira} alt="lixeira" width="30px" height="30px" />
        </button>
        <ToastContainer autoClose={500} />

      </div>
      <div className="cart-quantity-md">
        <div className="cart-quantity-controls">
          <button
            className="btn-menos btn-CustomCart"
            onClick={() => props.decrementar("-", props.id)}
          >
            -
          </button>
          <div>{props.quantidade}</div>
          <button
            className="btn-mais btn-CustomCart"
            onClick={() => props.incrementar("+", props.id)}
          >
            +
          </button>
        </div>
      </div>
      <div className="cart-unit-price">
        <h4>R$ {precoFormat}</h4>
      </div>
      <div className="cart-product-total">

        <h4>R$ {totalFormat} </h4>
      </div>
    </>
  );
}

export default ItemCart;
