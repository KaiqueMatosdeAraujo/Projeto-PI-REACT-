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
console.log(order)
    const getOrder = () => {
        //axios.get(`http://localhost:8080/endereco/${idcliente}/${idendereco}`)
        axios.get(`http://localhost:8080/pedido/${idcliente}/meusPedidos`)
        .then((response) => {
            setOrder(response.data)
            listOrder()
        })
    }

    const listOrder = () => {
        return order.map((item) => {
          return (
            <>
                <div className="container container-meus-pedidos">
                        <p><strong>Pedido # {item.codPedido}</strong></p>
                        <hr />

                        <div className="d-flex">
                            <img src={cart} alt="" className="cartimG" />
                            <p className="dados-pedido-title">Dados do pedido:</p>
                        </div>




                        <div className="container container-conteudo ">
                            <div className="row">
                                <div className=" col-md-8 col-12">
                                    <p><strong>Situação do pedido:</strong> {item.statusPedido}</p>
                                    <p><strong>Data do Pedido:</strong> 30/05/2022</p>
                                    <p><strong>Valor:</strong>R$ 1.197,00</p>
                                    <p className="p-formaPagamento"><strong>Forma de Pagamento:</strong></p>
                                    <p>{item.formaPagamento}<br /></p>
                                </div>

                                <div className="col-md-4 col-10">
                                    <button type="button" className="btn custom-btn-meus-pedidos" data-bs-toggle="modal" data-bs-target="#maisdetalhes1">Mais detalhes</button>
                                </div>
                            </div>
                        </div>

                    </div>
            </>
          );
        });
      };

    return (
        <>
            {listOrder()}

                   <MoreDetails 
                   image={bebe1}
                   codRequest="#3"
                   nameBaby="Bebê Reborn Guilherme"
                   codProduct="S48002"
                   priceProduct="549,90"
                   address="Rua Santo Antônio"
                   number = "467"
                   neighborhood="Bela Vista"
                   city="São Paulo"
                   state = "SP"
                   reference=""
                   paymentMethod="Boleto"
                   subtotal="1.197,00"
                   freight="GRÁTIS"
                   priceRequest="1.197,00"
                   status="Processando pagamento"
                     />

            </>
            )
}

export default MyRequests