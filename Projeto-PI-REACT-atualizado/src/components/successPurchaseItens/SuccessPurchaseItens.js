import React, { useState } from 'react'

function SuccessPurschaseItens(props) {



    return (
      <>
         <div className="info-pessoal">
                    <p><b>Forma de Pagamento:</b> Boleto bancário</p>
                    <p><b>Linha digitável:</b> 846700000009 509900801002 011286025165 922050842074</p>
                    <p><b>Forma de Entrega:</b> {props.delivery}</p>
          </div>
      </>
    )
}

export default SuccessPurschaseItens