import React from 'react'


function CheckoutProduct(props) {



    return (
      <>
            <div className="row">
                <div className="checkoutResumo">
                    <div className="col-">
                        <img src={props.image} width="100%" />
                    </div>
                    <div className="col-9">
                        <ul type="none">
                            <li><strong>{props.name}</strong></li>
                            <li><strong>Quantidade:</strong> {props.qtd}</li>
                            <li><strong>Valor do produto: </strong>R$ {props.price}</li>
                            <li><strong>Valor do frete: </strong>{props.deliveryType}</li>
                        </ul>

                    </div>
                    </div>
                    </div>
                </>
                )
}

export default CheckoutProduct