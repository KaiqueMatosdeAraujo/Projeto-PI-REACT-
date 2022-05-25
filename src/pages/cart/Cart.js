import { Link } from "react-router-dom";
import React, { useEffect, useState,useContext } from 'react';
import './Cart.css'
// import lixeira from '../../imgs/lixeira.png';
import BannerFreight from '../../components/freightBanner/FreightBanner'
import Nav from '../../components/nav/Nav'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Delivery from "../delivery/Delivery";
import Product from "../product/Product";
import ItemCart from '../../components/itemCart/itemCart'
import Check from '../cart/imgs/sucesso.png'
import ProductList from '../../components/productList/ProductList'
import CartContext from '../../context/cart.provider'

import RelatableProductsContainer from "../../components/relatableProductsContainer/RelatableProductsContainer"
function Cart() {
    const { cart, getCart } = useContext(CartContext)

    
    useEffect(() => {
        getCart()
    }, [])

    
    return (
        <>
        <div className="pageCart">
            <BannerFreight />
            <Header />
            <Nav />



            <section className="page-banner bg-secondary" />

            <div className="product-cart">

                <div className="wrapper">

            
                    <div className="cart-collection">
                        <div className="cart-header"style={{backgroundColor:'white'}}>
                            <p className="item">Item</p>
                            <p>Qnt.</p>
                            <p>Preço Unitário</p>
                            <p>Total</p>
                        </div>
                        <div className="cart-item">

                             <ProductList products={cart} cart /> 

                        </div>

                    </div>
                    <div className="campo-infos-cart" style={{backgroundColor:'white'}}>
                        <div className="campo-cep">
                            <Link to="" className="text-cep">Calcule o frete</Link>
                            <form class="d-flex ">
                                <input type="text" className="input-cep" cep-mask="0000-000" placeholder="0000-000" />
                                <button class="btn-cep" type="submit"><img src={Check} alt="Logo" width="20px" /></button>
                            </form>
                        </div>

                        <div className="cart-total-holder">
                            <p className="total-carrinho">Total: R$399,90</p>
                        </div>
                    </div>
                    <div className="cart-action-button">
                        <Link to="/Product" className="btn-main">Continuar comprando</Link>
                        <Link to="/Delivery" className="btn-main">Finalizar compra</Link>
                    </div>

                </div>
            </div>
            <RelatableProductsContainer />
            <br />
            <Footer />
            </div>
        </>
    )
}
export default Cart