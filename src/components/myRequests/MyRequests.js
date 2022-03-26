import './MyRequests.css'
import bebe1 from './imgs/bebe1.png'
import bebe3 from './imgs/bebe3.jpg'
import cart from './imgs/shopping-cart.png'
import MoreDetails from '../moreDetails/MoreDetails'

import {useState} from 'react'

function MyRequests(props) {

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <>
        {/*<div className="tab-content" id="myTabContent">*/}
            <div className={toggleState === 2 ? "tab-pane fade show active": "content"} id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="tab-pane fade" id="MeusPedidos" role="tabpanel" aria-labelledby="pedidos-tab">
                    <div className="titleCard" id="titleCardMinhaConta"><h1>Meus pedidos</h1>

                        <div className="container container-meus-pedidos">
                            <p><strong>Pedido # {props.codPedido}</strong></p>
                            <hr />

                            <div className="d-flex">
                                <img src={cart} alt="" className="cartimG" />
                                <p className="dados-pedido-title">Dados do pedido:</p>
                            </div>




                            <div className="container container-conteudo ">
                                <div className="row">
                                    <div className=" col-md-8 col-12">
                                        <p><strong>Situação do pedido:</strong> {props.status}</p>
                                        <p><strong>Data do Pedido:</strong> {props.data}</p>
                                        <p><strong>Valor:</strong>R$ {props.price}</p>
                                        <p className="p-formaPagamento"><strong>Forma de Pagamento:</strong></p>
                                        <p>{props.methodPayment}<br />
                                            {props.cardNumber}<br />
                                            10x sem juros  </p>
                                    </div>

                                    <div className="col-md-4 col-10">
                                        <button type="button" className="btn custom-btn-meus-pedidos" data-bs-toggle="modal" data-bs-target="#maisdetalhes1">Mais detalhes</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                   <MoreDetails 
                   image={bebe1}
                   codRequest="#58685"
                   nameBaby="Bebê Reborn Guilherme"
                   codProduct="S48002"
                   priceProduct="549,90"
                   address="Rua Santo Antônio"
                   number = "467"
                   neighborhood="Boa Vista"
                   city=" Rio Branco"
                   state = "AC"
                   reference=""
                   paymentMethod="Cartão de crédito"
                   cardNumber="4658 **** **** 9867"
                   subtotal="549,00"
                   freight="GRÁTIS"
                   priceRequest="549,90"
                   installment="54,90"
                   status="Processando pagamento"
                     />


                   <MoreDetails 
                   image={bebe3}
                   codRequest="#58685"
                   nameBaby="Bebê Reborn Léo"
                   codProduct="S48003"
                   priceProduct="549,90"
                   address=""
                   neighborhood=""
                   city=""
                   reference=""
                   paymentMethod="Cartão de crédito"
                   cardNumber="4658 **** **** 9867"
                   subtotal="549,00"
                   freight="GRÁTIS"
                   priceRequest="549,90"
                   installment="54,90"
                   status="Processando pagamento"/>

                </div>
            </div>
        {/*</div>*/}

            </>
            )
}

export default MyRequests