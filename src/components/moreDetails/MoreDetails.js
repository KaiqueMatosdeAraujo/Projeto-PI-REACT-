import StatusContainer from '../statusContainer/StatusContainer'
import './MoreDetails.css'



function MoreDetails(props) {



    return (
        <>
            <div className="modal fade" id="maisdetalhes1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl ">
                    <div className="modal-content">
                        <div className="modal-header ">
                            <div className="modalcontentTitle" id="exampleModalLabel">Detalhes</div>
                            <button type="button" className="btn modalclose" data-bs-dismiss="modal" aria-label="Close">X</button>
                        </div>
                        <div className="modal-body">



                            <div className="row rowCentralized row-modal-moreDetails">
                                <div className="container container-mais-detalhes col-md-11 col-lg-5">
                                    <p className='title-pedido'><strong>Pedido {props.codRequest}</strong></p>

                                    <div className="d-flex div-infosBebe">
                                        <div>
                                            <img src={props.image} alt="" width="150" height="150" />
                                        </div>

                                        <div className="infosBebe-mais-detalhes col-lg-6">
                                            <p><strong>{props.nameBaby}</strong></p>
                                            <p>CÓDIGO: {props.codProduct}</p>
                                            <p><strong>R$ {props.priceProduct}</strong></p>
                                        </div>
                                    </div>

                                    <StatusContainer
                                    class="container container-status-pagamento col-12 col-md-11 col-lg-12" vermelho
                                    status="Processando pagamento"
                                />
                                </div>

                                <div className="container container-mais-detalhes-pagamento col-md-11 col-lg-5">
                                    <p className="title-container">Forma de pagamento</p>
                                    <hr />

                                    <p className="p-container">{props.paymentMethod}</p>

                                    <div className="container container-conteudo-pagamento">
                                        <p>{props.cardNumber}</p>
                                        <p><strong>Subtotal:</strong> R$ {props.subtotal}</p>
                                        <p><strong>Frete:</strong> {props.freight}</p>
                                        <p><strong>Valor do total:</strong> R$ {props.priceRequest} <br />10x de R$ {props.installment}</p>
                                    </div>

                                </div>
                                
                                
                                

                            </div>
                            

                            <div className="container container-mais-detalhes-endereco col-md-11 ">
                                <p className="title-container">Endereço de entrega</p>
                                <hr />

                                <p className="title-container">Endereço: {props.address} N {props.number} </p>

                                <div className="d-flex bairro-cidade">
                                    <p className="title-container">Bairro: {props.neighborhood}</p>

                                    <p className="p-cidade title-container">Cidade/UF: {props.city} / {props.state}</p>
                                </div>

                                <p className="title-container">Ponto de referência: {props.referencePoint}</p>
                            </div>


                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoreDetails