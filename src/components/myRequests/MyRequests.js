import './MyRequests.css'
import bebe1 from './imgs/bebe1.png'
import bebe3 from './imgs/bebe3.jpg'
import cart from './imgs/shopping-cart.png'
import MoreDetails from '../moreDetails/MoreDetails'
import { useEffect, useState } from 'react'
import axios from 'axios'


function MyRequests(props) {

    const [order, setOrder] = useState([])
    const  idcliente  = parseInt(localStorage.getItem("UserId"));
    useEffect(() => {
        getOrder()
    }, [])

    const getOrder = () => {
        //axios.get(`http://localhost:8080/endereco/${idcliente}/${idendereco}`)
        axios.get(`http://localhost:8080/pedido/${idcliente}/1/meusPedidos`)
        .then((response) => {
            setOrder(response.data)
            console.log(response.data)
        })
    }



    return (
        <>

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
                                        <p><strong>Situação do pedido:</strong> {order.statusPedido}</p>
                                        <p><strong>Data do Pedido:</strong> {order.dataPedido}</p>
                                        <p><strong>Valor:</strong>R$ {props.price}</p>
                                        <p className="p-formaPagamento"><strong>Forma de Pagamento:</strong></p>
                                        <p>{order.formaPagamento}<br /></p>
                                    </div>

                                    <div className="col-md-4 col-10">
                                        <button type="button" className="btn custom-btn-meus-pedidos" data-bs-toggle="modal" data-bs-target="#maisdetalhes1">Mais detalhes</button>
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

           
         
      

            </>
            )
}

export default MyRequests