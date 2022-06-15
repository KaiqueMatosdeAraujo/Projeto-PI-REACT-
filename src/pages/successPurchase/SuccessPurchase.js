import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './SuccessPurchase.css'
import BannerFreight from '../../components/freightBanner/FreightBanner'
import ImagemSucesso from './imgs/checked.png'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import SuccessPurschaseItens from '../../components/successPurchaseItens/SuccessPurchaseItens'
import ItensProducts from '../../components/successPurchaseItens/ItensProducts'
import CartContext from "../../context/cart.provider";
import axios from 'axios'

function SucessPurchase(props) {

  const idcliente = parseInt(localStorage.getItem("UserId"));
  const idultimopedido = parseInt(localStorage.getItem("ultimoPedido"))
  const { cart, getCart } = useContext(CartContext);
  const [order, setOrder] = useState([])

  useEffect(() => {
    getCart();
    getOrder()
  }, []);

  const orderSummary = () => {
    return cart.map((item) => {
      return (
        <>
          <ItensProducts id={item.codProduto} name={item.nome} value={item.preco} />
        </>
      );
    });
  };

console.log(idultimopedido, order)
  const getOrder = () => {
    axios.get(`http://localhost:8080/pedido/${idcliente}/${idultimopedido}/detalhe`)
        .then((response) => {
            setOrder(response.data)
        })
  }


  return (
    <>
      <div className="pageSucessPurchase">
        <BannerFreight />
        <Header />
        <Nav />
        <div className="container-fluid mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">


              <div className="card cardSuccessPurchase">

                <div className="row  rowCentralized justify-content-center">
                  <div className="col-lg-1 col-2">
                    <img src={ImagemSucesso} alt="" className='img-checked' />
                  </div>
                </div>

                <div className="row  rowCentralized justify-content-center">
                  <div className="col-md-10">
                    <div className="row justify-content-center">
                      <div className="p-sucesso col-11">
                        <p className="p-sucesso-title p">
                          Compra realizada com sucesso!!
                        </p >
                          <SuccessPurschaseItens formPagment="Cartão de crédito"  delivery="Correios" />   
                      </div>
                      <div className="col-11">

                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Cod.</th>
                              <th scope="col">Produto</th>
                              <th scope="col">Preço</th>
                            </tr>
                          </thead>
                          <tbody>

                            {orderSummary()}

                            <ItensProducts id="Total" value="1.197" />
                          </tbody>
                        </table>
                      </div>
                      <div className="d-flex justify-content-center">
                        <Link to="/profile"> <button type="button" className="btn custom-button1"> Meus Pedidos</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default SucessPurchase


