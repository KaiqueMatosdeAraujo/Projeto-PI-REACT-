import './MyRequests.css'
import bebe1 from './imgs/bebe1.png'
import bebe3 from './imgs/bebe3.jpg'
import cart from './imgs/shopping-cart.png'
import MoreDetails from '../moreDetails/MoreDetails'

function MyRequests() {
    return (
        <>
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="tab-pane fade" id="MeusPedidos" role="tabpanel" aria-labelledby="pedidos-tab">
                    <div className="titleCard" id="titleCardMinhaConta"><h1>Meus pedidos</h1>

                        <div className="container container-meus-pedidos">
                            <p><strong>Pedido #58685</strong></p>
                            <hr />

                            <div className="d-flex">
                                <img src={cart} alt="" className='cart' />
                                <p className="dados-pedido-title">Dados do pedido:</p>
                            </div>




                            <div className="container container-conteudo ">
                                <div className="row">
                                    <div className=" col-md-8 col-12">
                                        <p><strong>Situação do pedido:</strong> Processando Pagamento</p>
                                        <p><strong>Data do Pedido:</strong> 27/12/2021</p>
                                        <p><strong>Valor:</strong> R$ 549,90</p>
                                        <p className="p-formaPagamento"><strong>Forma de Pagamento:</strong></p>
                                        <p>Cartão de crédito <br />
                                            5622 XXXX XXXX XXXX 1589 <br />
                                            10x sem juros  </p>
                                    </div>

                                    <div className="col-md-4 col-8">
                                        <button type="button" className="btn custom-btn-meus-pedidos" data-bs-toggle="modal" data-bs-target="#maisdetalhes1">Mais detalhes</button>
                                    </div>
                                </div>
                            </div>

                        </div>




                        <div className="container container-meus-pedidos">
                            <p><strong>Pedido #49362</strong></p>
                            <hr />

                            <div className="d-flex">
                                <img src={cart} alt="" className='cart-request' />
                                <p className="dados-pedido-title">Dados do pedido:</p>
                            </div>



                            <div className="container container-conteudo ">
                                <div className="row">
                                    <div className=" col-md-8 col-12">

                                        <p><strong>Situação do pedido:</strong> Processando Pagamento</p>
                                        <p><strong>Data do Pedido:</strong> 27/12/2021</p>
                                        <p><strong>Valor:</strong> R$ 549,90</p>
                                        <p className="p-formaPagamento"><strong>Forma de Pagamento:</strong></p>
                                        <p>Cartão de crédito <br />
                                            5622 XXXX XXXX XXXX 1589 <br />
                                            10x sem juros  </p>
                                    </div>

                                    <div  className="col-md-4 col-8">
                                        <button type="button" className="btn custom-btn-meus-pedidos" data-bs-toggle="modal" data-bs-target="#maisdetalhes2">Mais detalhes</button>
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
                   address=""
                   neighborhood=""
                   city=""
                   reference=""
                   paymentMethod="Cartão de crédito"
                   cardNumber="4658 XXXX XXXX XXXX 9867"
                   subtotal="549,00"
                   freight="GRÁTIS"
                   priceRequest="549,90"
                   installment="54,90"
                   status="Processando pagamento"  />


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
                   cardNumber="4658 XXXX XXXX XXXX 9867"
                   subtotal="549,00"
                   freight="GRÁTIS"
                   priceRequest="549,90"
                   installment="54,90"
                   status="Processando pagamento"/>

                </div>
            </div>
        </div>


                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                    crossorigin="anonymous"></script>
            </>
            )
}

export default MyRequests