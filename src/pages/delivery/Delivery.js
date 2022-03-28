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
import PinLocalizacao from './imgs/pinLocation.png'
import Pix from './imgs/pix.png'
import LogoHiperCard from './imgs/hipercard_payment_method_card_icon_142739.png'
import ChipCartaoCred from './imgs/chip-de-cartao-de-credito.png'
import ProductCheckoutSimple from '../../components/productCheckoutSimple/ProductCheckoutSimple'
import Lupa from './imgs/pesquisa-de-lupa.png'
import PagamentoCartCred from './imgs/pagamento-com-cartao-de-credito(1).png'
import Resumo from './imgs/resumo.png'
import Bebe from './imgs/bebe2.jpg'
import BannerFreight from '../../components/freightBanner/FreightBanner'
import Caminhao from './imgs/caminhao-de-entrega.png'
import CaminhaoP from './imgs/CaminhaoEntregaP.png'


function Delivery(props) {

    return (
        <>
            <BannerFreight/>
            <Header/>
            <Nav/>
            <div className="row rowCentralized justify-content-center">
                <div className="resumo col-11">
                    <div className="row">
                        <div className="col-5 col-lg-5">
                            <strong>Produtos</strong>
                        </div>
                        <div className="col-4 col-lg-2">
                            <strong>Quantidade</strong>
                        </div>
                        <div className="col-2 col-lg-2">
                            <strong>Valor</strong>
                        </div>
                    </div>

                </div>
            




                <div className="resumo2 col-11">
                    <ProductCheckoutSimple nameProduct="Bebê Reborn Nicole Pandinha" qtd={1} price="549,90"/>
                </div>
                <div className="resumo3 col-11">
                    <div className="row">
                        <div className="col-5 col-md-5">
                            <ul type="none">
                                <li><strong>Subtotal:</strong></li>
                                <li><strong>Frete:</strong></li>
                                <li><strong>Total:</strong></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2">
                            <ul type="none">
                                <li>R$ 549,90</li>
                                <li>(Defina abaixo)</li>
                                <li>R$ 549,90</li>
                            </ul>
                        </div>

                    </div>
                </div>
                
            </div>

            { /* FINAL RESUMO */}


            { /* ENTREGA   */}

            <div className="row rowCentralized ">
                <div className=" col-xl-4  col-11 formEntrega">

                    <div className="entrega">
                        <strong> <img src={CaminhaoP} /> Entrega</strong>
                        <hr />
                    </div>

                    <form>
                        <div className="cep row rowCentralized ">
                            <div className="form-group col-5 col-md-4 col-lg-4 col-xl-5">
                                <label for="inputCep">CEP</label>
                                <input type="CEP" className="form-control" id="inputCEP" placeholder="Digite seu CEP" />
                                
                            </div>

                            <div className="col-1">
                                <button><img className="LupaImgFrete " src={Lupa} alt="Lupa" /></button>
                            </div>

                            <div className="col-5 col-md-7  col-lg-7 col-xl-5 searchCep">
                                <a className="correios" href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                                    target="_blank">
                                    Não sei meu CEP
                                </a>
                            </div>

                        </div>

                        <div className="caixaIntEnd">
                            <div className="row rowCentralized">
                                <div className="form-group col-9 col-md-9">
                                    <label for="inputAddress2">Endereço</label>
                                    <input type="text" className="  form-control" id="inputAddress2" placeholder="Ex: Rua Pacheco" />
                                </div>
                                <div className="form-group col-2 col-md-2">
                                    <label for="inputAddress2">Nº</label>
                                    <input type="text" className=" col-2 form-control" id="inputAddress2" placeholder="100" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="inputCity">Bairro</label>
                                    <input type="text" className="form-control" id="inputCity" placeholder="Ex: Vl. Sonia" />
                                </div>
                                <div className="cidadeUf">
                                    <div className="form-group col-md-9">
                                        <label for="inputCity">Cidade</label>
                                        <input type="text" className="form-control" id="inputCity" placeholder="Ex: Vl. Sonia" />
                                    </div>
                                    <div className="form-group col-4 col-md-2">
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
                                </div>
                                    
                            </div>

                            <div className="form-group col-12 col-md-12 col-lg-12">
                                <label for="inputCity">Complemento</label>
                                <input type="text" className="form-control" id="inputCity" placeholder="Casa 1" />
                            </div>
                            <div className="form-group col-12 col-md-12 ">
                                <label for="inputCity">Ponto de Referência</label>
                                <input type="text" className="form-control" id="inputCity" placeholder="Proximo ao Supermercado" />
                            </div>
                            

                        </div>
                        <br />
                        <div className="check">
                            <div className="row rowCentralized">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <input type="checkbox" aria-label="Chebox para permitir input text" />
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Input text com checkbox"
                                        placeholder="R$0,00         9 dias úteis        Frete Comum " disabled />
                                </div>
                                <div className="input-group ">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <input type="checkbox" aria-label="Chebox para permitir input text" />
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Input text com checkbox"
                                        placeholder="R$15,90         5 dias úteis        Frete Expresso " disabled />
                                </div>
                            </div>
                        </div>

                    </form>
                </div>

                { /*  FINAL ENTREGA*/}
                { /*  PAGAMENTO  */}

                <div className=" col-xl-3 col-11 formPagamento">

                    <div className="pagamento1">
                        <strong>  <img src={PagamentoCartCred} alt="" /> Pagamento</strong>
                        <hr />
                    </div>


                    { /* MODAL CARTÃO  */}
                    <div className="modalCartao">
                        <div className="input-group mb-3">
                            { /*  Button trigger modal  */}

                            <button type="button" className=" btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#modalCartao">
                
                                <input type="radio" name="pagamento" />
                            </button>


                            { /*  MODAL  */}

                            <div className="modal fade" id="modalCartao" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="pag">
                                            <div className="row">
                                                <div className=" imagens col-10">
                                                    <img src={LogoMaster} width="10%" />
                                                    <img src={LogoAmerican} width="10%" />
                                                    <img src={LogoVisa} width="10%" />

                                                </div>
                                                <button type="button" class="btn-close fechar col-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <hr />
                                            <div className="row cartFake1">
                                                <div className="cartFake col-10 col-md-8">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <img src={ChipCartaoCred} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="num col-10">
                                                            <strong>5858 6858 6989 5875</strong>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="nome col-7 col-md-6">
                                                            <strong>Osvaldo Silva</strong>
                                                        </div>
                                                        <div className="dataCard col-2 col-md-4">
                                                            <strong>05/25</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="formCard">
                                                <div className="row">
                                                    <div className=" col-8 col-md-8">
                                                        <label for=""><strong>Número do cartão</strong> </label>
                                                        <input className="form-control form-control-lg" type=""
                                                            placeholder="5858 6858 6989 5875"
                                                            aria-label=".form-control-lg example" />
                                                        <br />
                                                    </div>

                                                    <div className=" col-4 col-md-4">
                                                        <label for=""><strong>Validade</strong> </label>
                                                        <input className="form-control form-control-lg" type="" placeholder="05/25"
                                                            aria-label=".form-control-lg example" />
                                                        <br />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-12">
                                                        <label for=""><strong>Nome do Títular</strong> </label>
                                                        <input className="form-control form-control-lg" type=""
                                                            placeholder="Osvaldo Silva" aria-label=".form-control-lg example" />
                                                        <br />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-4 col-md-3">
                                                        <label for=""><strong>Cod. Seg</strong> </label>
                                                        <input className="form-control form-control-lg" type="" placeholder="CCV"
                                                            aria-label=".form-control-lg example" />
                                                    </div>
                                                    <div className="btnInterrogacao col-2 col-md-3">
                                                        <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Três últimos números no verso do cartão.">
                                                            <strong>?</strong>
                                                        </button>
                                                    </div>
                                                    

                                                    <div className="col-6 col-md-6">
                                                        <label for=""><strong>Parcelas</strong> </label>
                                                        <br />
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

                                                <div className="row">
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
                                <img src={LogoMaster} width="100%" />
                                <img src={LogoVisa} width="100%" />
                                <img src={LogoAmerican} width="100%" />


                            </div>
                        </div>
                    </div>

                    { /*  FINAL MODAL CARTÃO  */}


                    { /*  MODAL PIX  */}

                    <div className="modalPix">

                        <div className="input-group mb-3">

                            { /*  Button trigger modal  */}
                            <button type="button" className=" btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#pix">
                                    
                                <input type="radio" name="pagamento" />
                            </button>

                            { /*  Modal  */}
                            <div className="modal fade" id="pix" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        
                                        <div className="row">
                                        <div className="imagemPix col-10">
                                            <img src={Pix} width="20%" />
                                        
                                        </div>
                                        <button type="button" class="btn-close fechar col-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <hr />

                                        <div className="textPix">
                                            <div className="row">
                                                <div className=" pi col-12">
                                                    <strong>Pix</strong>
                                                </div>
                                            </div> <br />
                                            <div className="row">
                                                <div className="col-12">
                                                    <ul type="none">
                                                        <li> A melhor forma de pagamento agora disponível na Pimpolhos.</li>
                                                        <br />
                                                        <li>Será encaminhado um QR code no seu e-mail após a finalização do seu
                                                            pedido.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="valor col-12">
                                                    <strong>Valor total: </strong> R$ 549,90
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className=" addPagamento col-12">
                                                    <button><strong>Adicionar Pagamento</strong></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pix col-11 col-md-10 col-lg-11">
                                <img src={Pix} width="23%" />

                            </div>
                        </div>

                    </div>
                    { /*  FINAL MODAL PIX   */}


                    { /*  MODAL BOLETO  */}

                    <div className="modalBoleto">
                        <div className="input-group mb-3">

                            { /*  Button trigger modal   */}
                            <button type="button" className=" btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#boleto">
                                <input type="radio" name="pagamento" />
                            </button>

                            { /*  Modal  */}
                            <div className="modal fade" id="boleto" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="row">
                                        <div className="imagemBoleto col-10">
                                            <img src={Boleto} width="25%" />
                                            
                    
                                        </div>
                                        <button type="button" class="btn-close fechar col-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <hr />
                                        <div className="textBoleto">
                                            <div className="row">
                                                <div className=" pi col-12">
                                                    <strong>Boleto bancário</strong>
                                                </div>
                                            </div> <br />
                                            <div className="row">
                                                <div className="col-12">
                                                    <ul type="none">
                                                        <li>O boleto bancário será gerado no CPF: <strong>568.***.***-72</strong>. </li>
                                                        <li>E Será enviado no seu e-mail após a finalização do pedido.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="valor col-12">
                                                    <strong>Valor total: </strong> R$ 549,90
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className=" addPagamento col-12">
                                                    <button><strong>Adicionar Pagamento</strong></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="boleto col-11 col-md-10 col-lg-11">
                                <img src={Boleto} width="28%" />
                            </div>
                        </div>
                    </div>
                    { /*  FINAL MODAL BOLETO   */}
                </div>
                { /* FINAL PAGAMENTO */}
                <div className="checkout col-xl-4 col-11">
                    <div className="resumo1">
                        <strong ><img src={Resumo} /> Resumo</strong>
                        <hr />
                    </div>
                    <div className="row rowCentralized">
                        <div className="chek col-12">
                            <h5><strong>Revise e confirme sua compra</strong></h5>
                            <div className="row  rowCentralized justify-content-center ">
                                <CheckoutProduct name="Bebe reborn Nicole Pandinha" qtd={1} price="549,90" image={Bebe} />
                            </div>

                            <div className="row rowCentralized justify-content-center">
                                <div className="checkoutEntrega col-11">
                                    <p>
                                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#checkoutEntrega" aria-expanded="false" aria-controls="collapseExample">
                                            <strong>Detalhes da Entrega</strong>
                                        </button>
                                    </p>
                                    <div className="collapse" id="checkoutEntrega">
                                        <div className="entregaDescriao">
                                            <div className="row justify-content-center">
                                                <div className=" col-3 col-md-3 col-lg-2">
                                                    <img src={PinLocalizacao} width="100%" />
                                                </div>
                                                <div className="col-9 col-md-9 col-lg-10">
                                                    <ul type="none">
                                                        <li><strong>Rua Pacheco, 55</strong></li>
                                                        <li>São Paulo/SP - CEP: 03131-085</li>
                                                    </ul>
                                                </div>
                                            </div><hr />
                                            <div className="row justify-content-center">
                                                <div className=" col-3 col-md-3 col-lg-2">
                                                    <img src={Caminhao} width="100%" />
                                                </div>
                                                <div className="col-9 col-md-9 col-lg-10">
                                                    <ul type="none">
                                                        <li><strong>Prazo de entrega de 9 dias úteis</strong></li>
                                                        <li>Chegará no seu endereço até dia 17/01/2021</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="checkoutPagamento col-11">
                                    <p>
                                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#checkoutPagamento" aria-expanded="false" aria-controls="collapseExample">
                                            <strong>Detalhes do Pagamento</strong>
                                        </button>
                                    </p>
                                    <div className="collapse" id="checkoutPagamento">

                                        <div className="row">
                                            <div className="col-3 col-md-4 col-lg-2">
                                                <img className="paymentMethodImg" src={LogoMaster} width="100%" />
                                            </div>
                                            <div className="col-9 col-md-8 col-lg-10">
                                                <ul type="none">
                                                    <li><strong>**** **** 4135</strong></li>
                                                    <li>Você pagara 10x de R$ 54,99</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">

                                <div className="btnFinalizarCompra col-6">
                                    <a ><Link to="/successPurchase"><button><strong>Finalizar Compra</strong></button></Link></a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
              <Footer />

        </>
    )
}

export default Delivery