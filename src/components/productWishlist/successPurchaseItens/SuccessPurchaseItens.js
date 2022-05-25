import React, { useState } from 'react'

function SuccessPurschaseItens(props) {



    return (
      <>
         <div className="info-pessoal">
                    <p><b>Forma de Pagamento:</b> {props.formPagment} {props.parcel}</p>
                    <p><b>Forma de Entrega:</b> {props.delivery}</p>
          </div>
      </>
    )
}

export default SuccessPurschaseItens