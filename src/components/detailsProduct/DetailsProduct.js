function DetailsProduct(props) {
    return (
        <>
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
        </>
    )
}

export default DetailsProduct