import './MyRequests.css'
import bebe1 from './imgs/bebe1.png'
import bebe3 from './imgs/bebe3.jpg'
import cart from './imgs/shopping-cart.png'
import MoreDetails from '../moreDetails/MoreDetails'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import DetailsProduct from '../detailsProduct/DetailsProduct'

function MyRequests(props) {

    const [order, setOrder] = useState([])
    const [detailsOrder, setDetailsOrder] = useState([])

    const { codPedido } = useParams()


    const idcliente = parseInt(localStorage.getItem("UserId"));
    

    useEffect(() => {
        getOrder()
        getDetailsOrder()
    }, [])

    console.log(order)
    const getOrder = () => {
        axios.get(`http://localhost:8080/pedido/${idcliente}/meusPedidos`)
            .then((response) => {
                setOrder(response.data)
                listOrder()
            })
    }

    console.log(detailsOrder)

    const getDetailsOrder = () => {
        axios.get(`http://localhost:8080/pedido/${idcliente}/28/detalhe`)
            .then((response) => {
                setDetailsOrder(response.data)
                console.log(response.data)
            })
    }

     const teste = detailsOrder.itemPedido
     console.log(teste)
    localStorage.setItem("itens", JSON.stringify(teste))

    const listTeste = () => {
        return teste.map((item) => {
            return (
                <>
                    <DetailsProduct
                        image={item.codProduto.imgProduto}
                        nameBaby={item.codProduto.nome}
                        codProduct={item.codProduto.codProduto}
                        priceProduct={item.codProduto.preco.toLocaleString("pt-br", { minimumFractionDigits: 2, })}
                    />
                </>
            )
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
                                    <p><strong>Data do Pedido:</strong> {item.dataPedido}</p>
                                    <p><strong>Previsão de Entrega:</strong> De 5 a 7 dias (Após a confirmação do Pagamento)</p>
                                    <p className="p-formaPagamento"><strong>Forma de Pagamento:</strong></p>
                                    <p>{item.formaPagamento}<br /></p>
                                </div>

                                <div className="col-md-4 col-10">
                                    <button type="button" className="btn custom-btn-meus-pedidos" data-bs-toggle="modal" data-bs-target="#maisdetalhes1" >Mais detalhes</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            );
        });
    };

    const listPriceRequest = () => {
        const precoPedido = teste 
        .map((item) => item.codProduto.preco)
        .reduce((prev, curr) => prev + curr, 0);

        const priceRequest = detailsOrder.valorFrete + precoPedido
        return priceRequest.toLocaleString("pt-br", { minimumFractionDigits: 2, })
    }

    const listSubtotalRequest = () => {
        const precoPedido = teste 
        .map((item) => item.codProduto.preco)
        .reduce((prev, curr) => prev + curr, 0);

        
        return precoPedido.toLocaleString("pt-br", { minimumFractionDigits: 2, })
    }

    return (
        <>
            {listOrder()}
            {/* <MoreDetails
                // image={detailsOrder.itemPedido[0].codProduto.imgProduto}
                // codRequest={detailsOrder.codPedido}
                // nameBaby={detailsOrder.itemPedido[0].codProduto.nome}
                // codProduct={detailsOrder.itemPedido[0].codProduto.codProduto}
                // priceProduct={detailsOrder.itemPedido[0].codProduto.preco}
                nameBaby = {listTeste()}
                address={detailsOrder.endereco.nomeRua}
                number={detailsOrder.endereco.numeroCasa}
                neighborhood={detailsOrder.endereco.bairro}
                city={detailsOrder.endereco.nomeCidade}
                state={detailsOrder.endereco.estado.descricao_estado}
                reference={detailsOrder.endereco.pontoReferencia}
                paymentMethod={detailsOrder.pagamento.formaPagamento.descricao}
                subtotal={listSubtotalRequest()}
                freight={detailsOrder.valorFrete.toLocaleString("pt-br", { minimumFractionDigits: 2, })} 
                priceRequest={listPriceRequest()}
                status={detailsOrder.statusPedido}
            /> */}

        </>
    )
}

export default MyRequests