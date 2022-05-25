import React, { useState,useEffect, useContext } from 'react'
import './MiniCartButton.css'
import Cart from '../header/imgs/cart.png'
import CartContext from '../../context/cart.provider'

function MiniCartButton() {


    const { cartQty, getCartQty } = useContext(CartContext)

    useEffect(()=> {
        getCartQty()
    }, []) 


    return (
        <>
            <div className="headerCart">
                <a className="nav-link active cartContentHeader" aria-current="page" href="#">
                    <div className="row rowCentralized justify-content-around">
                        <img src={Cart} alt="Imagem Carrinho" className="col-2 minicartPng" />
                        <div className=" col-7 cartPriceItems ">{cartQty}</div>
                        <div className=" col-2 cartPriceItems" >R$</div>
                    </div>

                </a>
            </div>
        </>
    )
}

export default MiniCartButton

