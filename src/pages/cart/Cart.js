import { Link } from "react-router-dom";
import './Cart.css'
// import lixeira from '../../imgs/lixeira.png';
import doll1 from '../cart/img/alice.jpg'
import doll2 from '../cart/img/gabi.jpg'
import BannerFreight from '../../components/freightBanner/FreightBanner'
import Nav from '../../components/nav/Nav'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Delivery from "../delivery/Delivery";
import Product from "../product/Product";

import ItemCart from '../../components/itemCart/itemCart'

import RelatableProductsContainer from "../../components/relatableProductsContainer/RelatableProductsContainer"
function Cart(props) {
    return (
        <>

            <BannerFreight />
            <Header />
            <Nav />



            <section className="page-banner bg-secondary"/>

            <div className="product-cart">
               
                <div className="wrapper">


                    <div className="cart-collection">
                        <div className="cart-header">
                            <p className="item">Item</p>
                            <p>Qnt.</p>
                            <p>Preço Unitário</p>
                            <p>Total</p>
                        </div>
                        <div className="cart-item">
                            <form action="">
                                <ItemCart
                                    doll1={doll2}
                                    name="Gabi com girafinha"
                                    price="399,99"
                                    unity="399,99"
                                    total="399,99"
                                />

                               
                            </form>
                        </div>
                    </div>

                    <div className="cart-total-holder">
                        <p>Total: R$399,90</p>
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
        </>
    )
}
export default Cart