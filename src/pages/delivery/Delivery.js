import React from 'react'
import { Link } from 'react-router-dom'
import './Delivery.css'
import Nav from '../../components/nav/Nav'
import CheckoutProduct from '../../components/checkoutProduct/CheckoutProduct'
import ProductDelivery from '../../components/productDelivery/ProductDelivery'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Boleto from './imgs/boleto.png'
import LogoMaster from './imgs/logo-mastercard-4096.png'
import LogoAmerican from './imgs/logo-american-express-4096.png'
import LogoVisa from './imgs/logo-visa-4096.png'
import PinLocalizacao from './imgs/pin-de-localizacao(1).png'
import Pix from './imgs/pix.png'
import LogoHiperCard from './imgs/hipercard_payment_method_card_icon_142739.png'
import ChipCartaoCred from './imgs/chip-de-cartao-de-credito.png'
import LogoElo from './imgs/elo_payment_method_card_icon_142740.png'
import Lupa from './imgs/pesquisa-de-lupa.png'
import TresPontos from './imgs/mais-tres-pontos-indicador.png'
import PagamentoCartCred from './imgs/pagamento-com-cartao-de-credito(1).png'
import Resumo from './imgs/resumo.png'
import Bebe from './imgs/bebe2.jpg'
import BannerFreight from '../../components/freightBanner/FreightBanner'
import Caminhao from './imgs/caminhao-de-entrega.png'



function Delivery() {

    return (
        <>
        <BannerFreight/>
         <Header/>
         <Nav/>
        {/* RESUMO 1 */}
            <div className="res container-fluid delivery">
                <div className="resumo-delivery">
                    <div className="row row-delivery">
                        <div className="col-4 col-md-5">
                            <strong>Produtos</strong>
                        </div>
                        <div className="col-5 col-md-2">
                            <strong>Quantidade</strong>
                        </div>
                        <div className="col-3 col-md-2">
                            <strong>Valor</strong>
                        </div>
                    </div>

                </div>
            </div>

             {/* RESUMO 2 */}
    <div className=" res container-fluid">
        <div className="resumo2">
        <ProductDelivery name="Bebe Reborn Nicole Pandinha" qtd={1} price="559,90"/>
        </div>
    </div>

     {/* RESUMO 3  */}
    <div className=" res container-fluid">
        <div className="resumo3">
            <div className="row row-delivery">
                <div className="col-5 col-md-5">
                    <ul type="none">

                        <li className='li-delivery'><strong>Subtotal:</strong></li>
                        <li className='li-delivery'><strong>Frete:</strong></li>
                        <li className='li-delivery'><strong>Total:</strong></li>
                    </ul>
                </div>
                <div className="col-6 col-md-2">
                    <ul type="none">
                        <li className='li-delivery'>R$ 549,90</li>
                        <li className='li-delivery'>(Defina abaixo)</li>
                        <li className='li-delivery'>R$ 549,90</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>

     {/* FINAL RESUMO  */}

      {/* ENTREGA  */}
    <div className="res container-fluid ">
        <div className=" col-md-4 formEntrega">

            <div className="entrega"> <img src={PinLocalizacao} alt=""/>
                <strong>Entrega</strong>
                <hr/>
            </div>

            <form>
                <div className="cep form-row">
                    <div className="form-group col-10 col-md-10 col-lg-5">
                        <label for="inputCep">CEP</label>
                        <input type="CEP" className="form-control" id="inputCEP" placeholder="Digite seu CEP"/>
                    </div>
                    <div className="form-group col-2">
                        <br/>
                        <button><img src={Lupa} alt=""/></button>
                    </div>
                    <div className="form-group col-md-12 col-lg-5">

                        <a className="correios" href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                            target="_blank">Não sei meu CEP</a>
                    </div>
                </div>

                <div className="caixaIntEnd">

                    <div className="form-group">
                        <label for="inputAddress2">Endereço</label>
                        <input type="text" className=" col-12 form-control" id="inputAddress2" placeholder="Ex: Rua Pacheco, 55"/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12 col-lg-5">
                            <label for="inputCity">Bairro</label>
                            <input type="text" className="form-control" id="inputCity" placeholder="Ex: Vl. Sonia"/>
                        </div>
                        <div className="form-group col-md-12 col-lg-3">
                            <label for="inputEstado">Estado</label>
                            <select id="inputEstado" className="form-control">
                                <option selected>UF</option>
                                <option>AC</option>
                                <option>AL</option>
                                <option>AM</option>
                                <option>BA</option>
                                <option>CE</option>
                                <option>DF</option>
                                <option>ES</option>
                                <option>GO</option>
                                <option>MA</option>
                                <option>MT</option>
                                <option>MS</option>
                                <option>MG</option>
                                <option>PA</option>
                                <option>PB</option>
                                <option>PR</option>
                                <option>PE</option>
                                <option>PI</option>
                                <option>RJ</option>
                                <option>RN</option>
                                <option>RS</option>
                                <option>RO</option>
                                <option>RR</option>
                                <option>SC</option>
                                <option>SP</option>
                                <option>SE</option>
                                <option>TO</option>
                            </select>
                        </div>
                        <div className="form-group col-md-12 col-lg-4">
                            <label for="inputCidade">Cidade</label>
                            <select id="inputCidade" className="form-control">
                                <option selected>Selecione a Cidade</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12 col-lg-5">
                            <label for="inputCity">Complemento</label>
                            <input type="text" className="form-control" id="inputCity" placeholder=""/>
                        </div>
                        <div className="form-group col-12 col-md-12 col-7">
                            <label for="inputCity">Ponto de Referência</label>
                            <input type="text" className="form-control" id="inputCity" placeholder=""/>
                        </div>

                    </div>
                </div>
                <br/>
                <div className="check">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" aria-label="Chebox para permitir input text"/>
                            </div>
                        </div>
                        <input type="text" className="form-control" aria-label="Input text com checkbox"
                            placeholder="R$0,00         9 dias úteis        Frete Grátis " disabled/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" aria-label="Chebox para permitir input text"/>
                            </div>
                        </div>
                        <input type="text" className="form-control" aria-label="Input text com checkbox"
                            placeholder="R$15,90         5 dias úteis        Correios " disabled/>
                    </div>
                </div>

            </form>
        </div>


       {/* Final Entrega */}

        {/* PAGAMENTO  */}
        <div className=" col-md-4 formPagamento">

            <div className="pagamento1"> <img src={PagamentoCartCred} alt=""/>
                <strong>Pagamento</strong>
                <hr/>
            </div>

             {/* MODAL CARTÃO */}

            <div className="modalCartao">
                <div className="input-group mb-3">

                    {/* Button trigger modal  */}
                    <button type="button" className=" btn-delivery btn-primary" data-bs-toggle="modal"
                        data-bs-target="#modalCartao">
                        <input type="radio" name="pagamento"/>
                    </button>



                     {/* Modal  */}
                    <div className="modal fade" id="modalCartao" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="pag">
                                    <div className="row row-delivery">
                                        <div className=" imagens col-12">
                                            <img src={LogoMaster} width="7%"/>
                                            <img src={LogoVisa} width="7%"/>
                                            <img src={LogoAmerican} width="7%"/>
                                            <img src={LogoElo} width="7%"/>
                                            <img src={LogoHiperCard} width="10%"/>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row row-delivery">
                                        <div className="cartFake col-10 col-md-8">
                                            <div className="row row-delivery">
                                                <div className="col-3">
                                                    <img src={ChipCartaoCred} alt=""/>
                                                </div>
                                            </div>
                                            <div className="row row-delivery">
                                                <div className="num col-10 col-md-8">
                                                    <strong>5858 6858 6989 5875</strong>
                                                </div>
                                            </div>
                                            <div className="row row-delivery">
                                                <div className="nome col-7 col-md-6">
                                                    <strong>Osvaldo Silva</strong>
                                                </div>
                                                <div className="data col-2 col-md-4">
                                                    <strong>05/25</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form">
                                        <div className="row row-delivery">
                                            <div className=" col-8 col-md-8">
                                                <label for=""><strong>Número do cartão</strong> </label>
                                                <input className="form-control form-control-lg" type=""
                                                    placeholder="5858 6858 6989 5875"
                                                    aria-label=".form-control-lg example"/>
                                                <br/>
                                            </div>

                                            <div className=" col-4 col-md-4">
                                                <label for=""><strong>Validade</strong> </label>
                                                <input className="form-control form-control-lg" type="" placeholder="05/25"
                                                    aria-label=".form-control-lg example"/>
                                                <br/>
                                            </div>
                                        </div>

                                        <div className="row row-delivery">
                                            <div className="col-12">
                                                <label for=""><strong>Nome do Títular</strong> </label>
                                                <input className="form-control form-control-lg" type=""
                                                    placeholder="Osvaldo Silva" aria-label=".form-control-lg example"/>
                                                <br/>
                                            </div>
                                        </div>

                                        <div className="row row-delivery">
                                            <div className="col-4 col-md-3">
                                                <label for=""><strong>Cod. Seg</strong> </label>
                                                <input className="form-control form-control-lg" type="" placeholder="CCV"
                                                    aria-label=".form-control-lg example"/>
                                            </div>
                                            <a href=""><strong>?</strong></a>

                                            <div className="col-7 col-md-8">
                                                <label for=""><strong>Parcelas</strong> </label>
                                                <br/>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>Selecione</option>
                                                    <option value="1">1x de R$549,99</option>
                                                    <option value="2">2x de R$274,95</option>
                                                    <option value="3">3x de R$183,33</option>
                                                    <option value="4">4x de R$137,49</option>
                                                    <option value="5">5x de R$109,99</option>
                                                    <option value="6">6x de R$91,66</option>
                                                    <option value="7">7x de R$78,57</option>
                                                    <option value="8">8x de R$68,74</option>
                                                    <option value="9">9x de R$61,11</option>
                                                    <option value="10">10x de R$54,99</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row row-delivery">
                                            <div className="addPagamento col-12">
                                                <button><strong>Adicionar Pagamento</strong></button>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cartao col-11 col-md-10 col-lg-11">
                        <img src={LogoMaster} width="10%"/>
                        <img src={LogoVisa} width="10%"/>
                        <img src={LogoAmerican} width="8%"/>
                        <img src={TresPontos} width="5%"/>

                    </div>
                </div>
            </div>
             {/* FINAL MODAL CARTÃO */}


             {/* MODAL PIX */}

            <div className="modalPix">

                <div className="input-group mb-3">

                     {/* Button trigger modal  */}
                    <button type="button" className=" btn-delivery btn-primary" data-bs-toggle="modal"
                        data-bs-target="#pix">
                        <input type="radio" name="pagamento"/>
                    </button>

                     {/* Modal  */}
                    <div className="modal fade" id="pix" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className=" imagemPix col-12">
                                    <img src={Pix} width="84px"/>
                                </div>
                                <hr/>

                                <div className="textPix">
                                    <div className="row row-delivery">
                                        <div className=" pi col-12">
                                            <strong>Pix</strong>
                                        </div>
                                    </div> <br/>
                                    <div className="row row-delivery">
                                        <div className="col-12">
                                            <ul type="none">
                                                <li className='li-delivery'> A melhor forma de pagamento agora disponível na Pimpolhos.</li>
                                                <br/>
                                                <li className='li-delivery'>Será encaminhado um QR code no seu e-mail após a finalização do seu
                                                    pedido.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row row-delivery">
                                        <div className="valor col-12">
                                        <br/>
                                    <br/>

                                            <strong>Valor total: </strong> R$ 549,90
                                        </div>
                                    </div>
                                    <div className="row row-delivery">
                                        <div className=" addPagamento col-12">
                                            <button><strong>Adicionar Pagamento</strong></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pix col-11 col-md-10 col-lg-11">
                        <img src={Pix} width="23%"/>

                    </div>
                </div>

            </div>
             {/* FINAL MODAL PIX */}


             {/* MODAL BOLETO */}

            <div className="modalBoleto">
                <div className="input-group mb-3">

                     {/* Button trigger modal  */}
                    <button type="button" className=" btn-delivery btn-primary" data-bs-toggle="modal"
                        data-bs-target="#boleto">
                        <input type="radio" name="pagamento"/>
                    </button>

                     {/* Modal  */}
                    <div className="modal fade" id="boleto" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="imagemBoleto">
                                    <img src={Boleto} width="20%"/>
                                    <hr/>
                                </div>

                                <div className="textBoleto">
                                    <div className="row row-delivery">
                                        <div className=" pi col-12">
                                            <strong>Boleto bancário</strong>
                                        </div>
                                    </div> <br/>
                                    <div className="row row-delivery">
                                        <div className="col-12">
                                            <ul type="none">
                                                <li className='li-delivery'>O boleto bancário será enviado no seu e-mail após a finalização do
                                                    pedido.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row row-delivery">
                                        <div className="valor col-12">
                                        <br/>
                                    <br/>
                                 
                                  
                                            <strong>Valor total: </strong> R$ 549,90
                                        </div>
                                    </div>
                                    <div className="row row-delivery">
                                        <div className=" addPagamento col-12">
                                            <button><strong>Adicionar Pagamento</strong></button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="boleto col-11 col-md-10 col-lg-11">
                        <img src={Boleto} width="28%"/>
                    </div>
                </div>
            </div>
             {/* FINAL MODAL BOLETO */}
        </div>
         {/* FINAL PAGAMENTO  */}

         <div className="checkout col-md-4">
            <div className="resumo1"> <img src={Resumo}/>
                <strong >Resumo</strong>
                <hr/>
            </div>
            <div className="row row-delivery">
                <div className="chek col-11">
                    <h5><strong>Revise e confirme sua compra</strong></h5><hr/>
                    <CheckoutProduct name="Bebe reborn Nicole Pandinha" qtd={1} price="549,90" image={Bebe} deliveryType="Gratis"/>




                    <div className="checkoutEntrega">
                        <p>
                            <button className="btn-delivery btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#checkoutEntrega" aria-expanded="false" aria-controls="collapseExample">
                               <strong>Detalhes da Entrega</strong> 
                            </button>
                        </p>
                        <div className="collapse" id="checkoutEntrega">
                            <div className="entregaDescriao">
                                <div className="row row-delivery">
                                    <div className="col-3 col-md-3 col-lg-2">
                                        <img src={PinLocalizacao} width="90%"/>
                                    </div>
                                    <div className="col-9 col-md-9 col-lg-10">
                                        <ul type="none">
                                            <li className='li-delivery'><strong>Rua Pacheco, 55</strong></li>
                                            <li className='li-delivery'>São Paulo/SP - CEP: 03131-085</li>
                                        </ul>  
                                    </div>
                                </div><hr/>
                                <div className="row row-delivery">
                                    <div className="imgCaminhao col-3 col-md-3 col-lg-2">
                                        <img src={Caminhao} width="100%"/>
                                    </div>
                                    <div className="col-9 col-md-9 col-lg-10">
                                        <ul type="none">
                                            <li className='li-delivery'><strong>Prazo de entrega de 9 dias úteis</strong></li>
                                            <li className='li-delivery'>Chegará no seu endereço até dia 17/01/2021</li>
                                        </ul>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="checkoutPagamento">
                        <p>
                            <button className="btn-delivery btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#checkoutPagamento" aria-expanded="false" aria-controls="collapseExample">
                               <strong>Detalhes do Pagamento</strong> 
                            </button>
                        </p>
                        <div className="collapse" id="checkoutPagamento">
                            <div className="card ">
                                <div className="row row-delivery">
                                    <div className="col-3 col-md-4 col-lg-2">
                                        <img src={LogoMaster} width="100%"/>
                                    </div>
                                    <div className="col-9 col-md-8 col-lg-10">
                                        <ul type="none">
                                            <li className='li-delivery'><strong>Nubank **** 4135</strong></li>
                                            <li className='li-delivery'>Você pagara 10x de R$ 54,99</li>
                                        </ul>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row row-delivery">

                        <div className="btnFinalizarCompra col-12">
                            <a ><button> <Link to="/successPurchase"><strong>Finalizar Compra</strong></Link></button></a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
</div>

<Footer/>

        </>
    )
}

export default Delivery 
