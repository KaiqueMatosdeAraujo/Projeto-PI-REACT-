import './StatusContainer.css'
import React, { useState } from 'react'

function StatusContainer(props) {

    let btnClasses = 'container-status-pagamento'
    btnClasses += props.vermelho ? 'vermelho' : '' 
    btnClasses += props.verde ? 'verde' : ''

    return (
        <>
            <div className= {props.class} >
                <p>{props.status}</p>
            </div>
        </>
    )
}

export default StatusContainer