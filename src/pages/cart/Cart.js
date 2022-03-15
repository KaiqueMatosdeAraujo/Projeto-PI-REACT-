import { Link } from "react-router-dom";
import './Cart.css'
// import lixeira from '../../imgs/lixeira.png';
import doll1 from '../cart/img/alice.jpg'
import doll2 from '../cart/img/gabi.jpg'
import BannerFreight from '../../components/freightBanner/FreightBanner'
import Nav from '../../components/nav/Nav'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import ItemCart from '../../components/itemCart/itemCart'

import RelatableProductsContainer from "../../components/relatableProductsContainer/RelatableProductsContainer"
function Cart(props) {
    return (
        <>
        <BannerFreight/>
            <Header />
            <Nav/>
            <div className="container">
                <div className="carrinho ">
                    <p className="resumo">Resumo do pedido</p>
                    <div className="sub-menu col-12">
                        <ul className="sub">
                            <li className="cat-resumo-1">Produtos</li>
                            <li className="desc">Descrição</li>
                            <li className="cat-resumo">Preço unitario</li>
                            <li className="cat-resumo">Qnt.</li>
                            <li className="cat-resumo">Subtotal</li>
                            <li className="cat-resumo">Excluir</li>
                        </ul>
                    </div>
                    <ItemCart
                        doll1={doll1}
                        name="Alice com coelinho"
                        price="499,90"
                        total="499,90"
                    />
                    <ItemCart
                        doll1={doll2}
                        name="Gabi com girafinha"
                        price="399,99"
                        total="399,99"
                    />
                </div >
                <div className="sub-menu-frete col-12">
                    <ul className="frete">
                        <li className="cal-frete">Calcule o frete</li>
                        <li className="btn-cal"><input className="campo-cep" type="text"></input></li>
                        <li className="cep">Não sei meu cep</li>
                    </ul>
                    <ul className="total">
                        <li className="vl-total">TOTAL</li>
                        <li className="avista">R$899,98</li>
                        <br></br>
                        <li className="vl-parcelado">ou em 10x de R$89,99</li>
                    </ul>
                </div>
                <div className="botao-comprar col-12">
                    <Link to="/">
                        <button type="button" className="btn-continuar btn btn-primary btn-lg">Continuar comprando</button>
                    </Link>
                    <Link to="../delivery">
                        <button type="button" className="btn-finalizar btn  btn-secondary btn-lg">Finalizar compra</button>
                    </Link>
                </div>
            </div >
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossorigin="anonymous"></script>
            <RelatableProductsContainer />
            <br/>
            <Footer />
        </>
    )
}



export default Cart