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



function Delivery(props) {

    return (
        <>
            {/* 
            <div class="res container-fluid">
                <div class="resumo">
                    <div class="row">
                        <div class="col-4 col-md-5">
                            <strong>Produtos</strong>
                        </div>
                        <div class="col-5 col-md-2">
                            <strong>Quantidade</strong>
                        </div>
                        <div class="col-3 col-md-2">
                            <strong>Valor</strong>
                        </div>
                    </div>

                </div>
            </div>


            

            <div class=" res container-fluid">
                <div class="resumo2">
                    <div class="row">
                        <div class="col-5 col-md-5"> Bebê Reborn Nicole Pandinha </div>
                        <div class="col-4 col-md-2"> 1 </div>
                        <div class="col-3 col-md-2">R$ 549,90</div>
                    </div>
                </div>
            </div>

           

            <div class=" res container-fluid">
                <div class="resumo3">
                    <div class="row">
                        <div class="col-5 col-md-5">
                            <ul type="none">

                                <li><strong>Subtotal:</strong></li>
                                <li><strong>Frete:</strong></li>
                                <li><strong>Total:</strong></li>
                            </ul>
                        </div>
                        <div class="col-6 col-md-2">
                            <ul type="none">
                                <li>R$ 549,90</li>
                                <li>(Defina abaixo)</li>
                                <li>R$ 549,90</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
              */}
            { /* FINAL RESUMO */}  


            { /* ENTREGA   */}

            <div class="row rowCentralized justify-content-center">
                <div class=" col-xl-4  col-11 formEntrega">

                    <div class="entrega"> <img src="/Entrega/Imagens/pin-de-localizacao (1).png" alt="" />
                        <strong>Entrega</strong>
                        <hr />
                    </div>

                    <form>
                        <div class="cep row">
                            <div class="form-group col-10 col-md-10 col-lg-5">
                                <label for="inputCep">CEP</label>
                                <input type="CEP" class="form-control" id="inputCEP" placeholder="Digite seu CEP" />
                            </div>
                            <div class="form-group col-2">
                                
                                <button><img src={Lupa} alt="" /></button>
                            </div>
                            <div class="form-group col-md-12 col-lg-5">

                                <a class="correios" href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                                    target="_blank">Não sei meu CEP</a>
                            </div>
                        </div>

                        <div class="caixaIntEnd">

                            <div class="form-group">
                                <label for="inputAddress2">Endereço</label>
                                <input type="text" class=" col-12 form-control" id="inputAddress2" placeholder="Ex: Rua Pacheco, 55" />
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12 col-lg-5">
                                    <label for="inputCity">Bairro</label>
                                    <input type="text" class="form-control" id="inputCity" placeholder="Ex: Vl. Sonia" />
                                </div>
                                <div class="form-group col-md-12 col-lg-3">
                                    <label for="inputEstado">Estado</label>
                                    <select id="inputEstado" class="form-control">
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
                                <div class="form-group col-md-12 col-lg-4">
                                    <label for="inputCidade">Cidade</label>
                                    <select id="inputCidade" class="form-control">
                                        <option selected>Selecione a Cidade</option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12 col-lg-5">
                                    <label for="inputCity">Complemento</label>
                                    <input type="text" class="form-control" id="inputCity" placeholder="" />
                                </div>
                                <div class="form-group col-12 col-md-12 col-7">
                                    <label for="inputCity">Ponto de Referência</label>
                                    <input type="text" class="form-control" id="inputCity" placeholder="" />
                                </div>

                            </div>
                        </div>
                        <br />
                        <div class="check">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <input type="checkbox" aria-label="Chebox para permitir input text" />
                                    </div>
                                </div>
                                <input type="text" class="form-control" aria-label="Input text com checkbox"
                                    placeholder="R$0,00         9 dias úteis        Frete Grátis " disabled />
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <input type="checkbox" aria-label="Chebox para permitir input text" />
                                    </div>
                                </div>
                                <input type="text" class="form-control" aria-label="Input text com checkbox"
                                    placeholder="R$15,90         5 dias úteis        Correios " disabled />
                            </div>
                        </div>

                    </form>
                </div>

                { /*  FINAL ENTREGA*/}
                { /*  PAGAMENTO  */}

                <div class=" col-xl-3 col-11 formPagamento">

                    <div class="pagamento1"> <img src="../Entrega/Imagens/pagamento-com-cartao-de-credito (1).png" alt="" />
                        <strong>Pagamento</strong>
                        <hr />
                    </div>


                    { /* MODAL CARTÃO  */}
                    <div class="modalCartao">
                        <div class="input-group mb-3">
                            { /*  Button trigger modal  */}

                            <button type="button" class=" btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#modalCartao">
                                <input type="radio" name="pagamento" />
                            </button>


                            { /*  MODAL  */}

                            <div class="modal fade" id="modalCartao" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="pag">
                                            <div class="row">
                                                <div class=" imagens col-12">
                                                    <img src={LogoMaster} width="7%" />
                                                    <img src={LogoAmerican} width="7%" />
                                                    <img src={LogoVisa} width="7%" />
                                                    
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="cartFake col-10 col-md-8">
                                                    <div class="row">
                                                        <div class="col-3">
                                                            <img src="../Entrega/Imagens/chip-de-cartao-de-credito.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="num col-10 col-md-8">
                                                            <strong>5858 6858 6989 5875</strong>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="nome col-7 col-md-6">
                                                            <strong>Osvaldo Silva</strong>
                                                        </div>
                                                        <div class="data col-2 col-md-4">
                                                            <strong>05/25</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form">
                                                <div class="row">
                                                    <div class=" col-8 col-md-8">
                                                        <label for=""><strong>Número do cartão</strong> </label>
                                                        <input class="form-control form-control-lg" type=""
                                                            placeholder="5858 6858 6989 5875"
                                                            aria-label=".form-control-lg example" />
                                                        <br />
                                                    </div>

                                                    <div class=" col-4 col-md-4">
                                                        <label for=""><strong>Validade</strong> </label>
                                                        <input class="form-control form-control-lg" type="" placeholder="05/25"
                                                            aria-label=".form-control-lg example" />
                                                        <br />
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-12">
                                                        <label for=""><strong>Nome do Títular</strong> </label>
                                                        <input class="form-control form-control-lg" type=""
                                                            placeholder="Osvaldo Silva" aria-label=".form-control-lg example" />
                                                        <br />
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-4 col-md-3">
                                                        <label for=""><strong>Cod. Seg</strong> </label>
                                                        <input class="form-control form-control-lg" type="" placeholder="CCV"
                                                            aria-label=".form-control-lg example" />
                                                    </div>
                                                    <a href=""><strong>?</strong></a>

                                                    <div class="col-7 col-md-8">
                                                        <label for=""><strong>Parcelas</strong> </label>
                                                        <br />
                                                        <select class="form-select" aria-label="Default select example">
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

                                                <div class="row">
                                                    <div class="addPagamento col-12">
                                                        <button><strong>Adicionar Pagamento</strong></button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cartao col-11 col-md-10 col-lg-11">
                                <img src={LogoMaster}width="10%" />
                                <img src="../Entrega/Imagens/logo-visa-4096.png" width="10%" />
                                <img src={LogoAmerican} width="8%" />
                             

                            </div>
                        </div>
                    </div>

                    { /*  FINAL MODAL CARTÃO  */}


                    { /*  MODAL PIX  */}

                    <div class="modalPix">

                        <div class="input-group mb-3">

                            { /*  Button trigger modal  */}
                            <button type="button" class=" btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#pix">
                                <input type="radio" name="pagamento" />
                            </button>

                            { /*  Modal  */}
                            <div class="modal fade" id="pix" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class=" imagemPix col-12">
                                            <img src="../Entrega/Imagens/pix.png" width="84px" />
                                        </div>
                                        <hr />

                                        <div class="textPix">
                                            <div class="row">
                                                <div class=" pi col-12">
                                                    <strong>Pix</strong>
                                                </div>
                                            </div> <br />
                                            <div class="row">
                                                <div class="col-12">
                                                    <ul type="none">
                                                        <li> A melhor forma de pagamento agora disponível na Pimpolhos.</li>
                                                        <br />
                                                        <li>Será encaminhado um QR code no seu e-mail após a finalização do seu
                                                            pedido.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="valor col-12">
                                                    <strong>Valor total: </strong> R$ 549,90
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class=" addPagamento col-12">
                                                    <button><strong>Adicionar Pagamento</strong></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pix col-11 col-md-10 col-lg-11">
                            <img src={Pix} width="23%"/>

                            </div>
                        </div>

                    </div>
                    { /*  FINAL MODAL PIX   */}


                    { /*  MODAL BOLETO  */}

                    <div class="modalBoleto">
                        <div class="input-group mb-3">

                            { /*  Button trigger modal   */}
                            <button type="button" class=" btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#boleto">
                                <input type="radio" name="pagamento" />
                            </button>

                            { /*  Modal  */}
                            <div class="modal fade" id="boleto" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">

                                        <div class="imagemBoleto">
                                            <img src="../Entrega/Imagens/boleto.png" width="20%" />
                                            <hr />
                                        </div>

                                        <div class="textBoleto">
                                            <div class="row">
                                                <div class=" pi col-12">
                                                    <strong>Boleto bancário</strong>
                                                </div>
                                            </div> <br />
                                            <div class="row">
                                                <div class="col-12">
                                                    <ul type="none">
                                                        <li>O boleto bancário será enviado no seu e-mail após a finalização do
                                                            pedido.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="valor col-12">
                                                    <strong>Valor total: </strong> R$ 549,90
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class=" addPagamento col-12">
                                                    <button><strong>Adicionar Pagamento</strong></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="boleto col-11 col-md-10 col-lg-11">
                                <img src="../Entrega/Imagens/boleto.png" width="28%" />
                            </div>
                        </div>
                    </div>
                    { /*  FINAL MODAL BOLETO   */}
                </div>
                { /* FINAL PAGAMENTO */}
                <div class="checkout col-xl-4 col-11">
                    <div class="resumo1"> 
                        <strong >Resumo</strong>
                        <hr />
                    </div>
                    <div class="row">
                        <div class="chek col-12">
                            <h5><strong>Revise e confirme sua compra</strong></h5><hr />
                            <div class="row">
                                <div class="checkoutResumo">
                                <CheckoutProduct name="Bebe reborn Nicole Pandinha" qtd={1} price="549,90" image={Bebe} deliveryType="Gratis"/>
                                  

                                </div>
                            </div>

                            <div class="checkoutEntrega">
                                <p>
                                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#checkoutEntrega" aria-expanded="false" aria-controls="collapseExample">
                                        <strong>Detalhes da Entrega</strong>
                                    </button>
                                </p>
                                <div class="collapse" id="checkoutEntrega">
                                    <div class="entregaDescriao">
                                        <div class="row">
                                            <div class="col-3 col-md-3 col-lg-2">
                                            <img src={PinLocalizacao} width="90%"/>
                                            </div>
                                            <div class="col-9 col-md-9 col-lg-10">
                                                <ul type="none">
                                                    <li><strong>Rua Pacheco, 55</strong></li>
                                                    <li>São Paulo/SP - CEP: 03131-085</li>
                                                </ul>
                                            </div>
                                        </div><hr />
                                        <div class="row">
                                            <div class="imgCaminhao col-3 col-md-3 col-lg-2">
                                            <img src={Caminhao} width="100%"/>
                                            </div>
                                            <div class="col-9 col-md-9 col-lg-10">
                                                <ul type="none">
                                                    <li><strong>Prazo de entrega de 9 dias úteis</strong></li>
                                                    <li>Chegará no seu endereço até dia 17/01/2021</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="checkoutPagamento">
                                <p>
                                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#checkoutPagamento" aria-expanded="false" aria-controls="collapseExample">
                                        <strong>Detalhes do Pagamento</strong>
                                    </button>
                                </p>
                                <div class="collapse" id="checkoutPagamento">
                                    <div class="card ">
                                        <div class="row">
                                            <div class="col-3 col-md-4 col-lg-2">
                                                <img src={LogoMaster} width="100%" />
                                            </div>
                                            <div class="col-9 col-md-8 col-lg-10">
                                                <ul type="none">
                                                    <li><strong>Nubank **** 4135</strong></li>
                                                    <li>Você pagara 10x de R$ 54,99</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="row">

                                <div class="btnFinalizarCompra col-12">
                                    <a href="../sucesso-compra/index.html"><button><strong>Finalizar Compra</strong></button></a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
          {/*  <Footer />  */}

        </>
    )
}

export default Delivery
