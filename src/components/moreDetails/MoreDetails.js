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
                            <div className="container container-mais-detalhes col-md-11">
                                <p><strong>Pedido {props.codRequest}</strong></p>

                                <div className="d-flex">
                                    <div>
                                        <img src={props.image} alt="" width="150" height="150" />
                                    </div>

                                    <div className="infosBebe-mais-detalhes">
                                        <p><strong>{props.nameBaby}</strong></p>
                                        <p>CÓDIGO: {props.codProduct}</p>
                                        <p><strong>R$ {props.priceProduct}</strong></p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="row">
                                    <div className="container container-mais-detalhes-endereco col-11 col-md-11 col-lg-5">
                                        <p className="title-container">Endereço de entrega</p>
                                        <hr />

                                        <p className="title-container">Endereço: Rua Santo Antônio /nº 467</p>

                                        <div className="d-flex">
                                            <p className="title-container">Bairro: Boa Vista</p>

                                            <p className="p-cidade title-container">Cidade/UF: Rio Branco/Acre</p>
                                        </div>

                                        <p className="title-container">Ponto de referência: {}</p>

                                    </div>

                                    <div className="container container-mais-detalhes-pagamento col-11 col-md-11 col-lg-5">
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

                                    <div className="container container-status-pagamento col-11 col-md-11 col-lg-5">
                                        <p>{props.status}</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoreDetails