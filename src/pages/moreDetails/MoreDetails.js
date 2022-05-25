import './MoreDetails.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import bebe from './imgs/bebe.jpg'
import bebe1 from './imgs/bebe1.png'
import bebe3 from './imgs/bebe3.jpg'

function MoreDetails() {
    return (
        <>
            <Header />
            <div className="modal fade" id="maisdetalhes1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl ">
                    <div className="modal-content">
                        <div className="modal-header ">
                            <div className="modalcontentTitle" id="exampleModalLabel">Detalhes</div>
                            <button type="button" className="btn modalclose" data-bs-dismiss="modal" aria-label="Close">X</button>
                        </div>
                        <div className="modal-body">
                            <div className="container container-mais-detalhes col-md-11">
                                <p><strong>Pedido #58685</strong></p>

                                <div className="d-flex">
                                    <div>
                                        <img src={bebe1} alt="" width="150" height="150"/>
                                    </div>

                                    <div className="infosBebe-mais-detalhes">
                                        <p><strong>Bebê Reborn Guilherme</strong></p>
                                        <p>CÓDIGO: S48002</p>
                                        <p><strong>R$ 549,90</strong></p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="row">
                                    <div className="container container-mais-detalhes-endereco col-11 col-md-11 col-lg-5">
                                        <p className="title-container">Endereço de entrega</p>
                                        <hr/>

                                            <p className="title-container">Endereço:</p>

                                            <div className="d-flex">
                                                <p className="title-container">Bairro:</p>

                                                <p className="p-cidade title-container">Cidade/UF:</p>
                                            </div>

                                            <p className="title-container">Ponto de referência:</p>

                                    </div>

                                    <div className="container container-mais-detalhes-pagamento col-11 col-md-11 col-lg-5">
                                        <p className="title-container">Forma de pagamento</p>
                                        <hr/>

                                            <p className="p-container">Cartão de crédito</p>

                                            <div className="container container-conteudo-pagamento">
                                                <p>4658 XXXX XXXX XXXX 9867</p>
                                                <p><strong>Subtotal:</strong> R$ 549,00</p>
                                                <p><strong>Frete:</strong> GRATIS</p>
                                                <p><strong>Valor do total:</strong> R$ 549,90 <br/>10x de R$ 54,90</p>
                                            </div>

                                    </div>

                                    <div className="container container-status-pagamento col-11 col-md-11 col-lg-5">
                                        <p>Processando pagamento</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        {/* <div className="modal-footer">

                        </div> */}
                    </div>
                </div>
            </div>

            {/* Modal  mais detalhes 2-->*/}
            <div className="modal fade" id="maisdetalhes2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl ">
                    <div className="modal-content">
                        <div className="modal-header ">
                            <div className="row">
                            <h1 className="modal-title col-5" id="exampleModalLabel">Detalhes</h1>
                            <strong>Pedido #58685</strong>
                            <button type="button" class="btn-close fechar col-4" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        </div>
                        <div className="modal-body">
                            <div className="container container-mais-detalhes">
                                <p><strong>Pedido #58685</strong></p>

                                <div className="d-flex">
                                    <div>
                                        <img src={bebe3} alt="" width="150" height="150"/>
                                    </div>

                                    <div className="infosBebe-mais-detalhes">
                                        <p><strong>Bebê Reborn Léo</strong></p>
                                        <p>CÓDIGO: S48002</p>
                                        <p><strong>R$ 549,90</strong></p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="d-flex">
                                    <div className="container container-mais-detalhes-endereco">
                                        <p className="title-container">Endereço de entrega</p>
                                        <hr/>

                                            <p className="title-container">Endereço:</p>

                                            <div className="d-flex">
                                                <p className="title-container">Bairro:</p>

                                                <p className="p-cidade title-container">Cidade/UF:</p>
                                            </div>

                                            <p className="title-container">Ponto de referência:</p>

                                    </div>

                                    <div className="container container-mais-detalhes-pagamento">
                                        <p className="title-container">Forma de pagamento</p>
                                        <hr/>

                                            <p className="p-container">Cartão de crédito</p>

                                            <div className="container container-conteudo-pagamento">
                                                <p>4658 XXXX XXXX XXXX 9867</p>
                                                <p><strong>Subtotal:</strong> R$ 549,00</p>
                                                <p><strong>Frete:</strong> GRATIS</p>
                                                <p><strong>Valor do total:</strong> R$ 549,90 <br/>10x de R$ 54,90</p>
                                            </div>

                                    </div>
                                </div>

                                <div className="container container-status-pagamento">
                                    <p>Processando pagamento</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
            {/*<Footer />*/}


            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>
        </>
    )
}

export default MoreDetails