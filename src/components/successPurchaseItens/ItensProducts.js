import React, { useState } from 'react'

function ItensProduct(props) {



    return (
        <>
            <tr>
                <th scope="row">{props.id}</th>
                <td>{props.name} - <br /> {props.subname}</td>
                <td>R$ {props.value}</td>
            </tr>
        </>
    )
}

export default ItensProduct