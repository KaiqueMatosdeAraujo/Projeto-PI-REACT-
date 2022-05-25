import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct(props) {



    return (
        <>
            <div className="checkoutResumo col-10">
                <div className="col-4 col-md-3">
                    <img src={props.image} width="100%" />
                </div>
                <div className="col-9 productDescriptionCheckout">
                    <ul type="none">
                        <li><strong>{props.name}</strong></li>
                        <li><strong>Quantidade:</strong> {props.qtd}</li>
                        <li><strong>Valor do produto: </strong>R$ {props.price}</li>
                    </ul>

                </div>
            </div>

        </>
    )
}

export default CheckoutProduct