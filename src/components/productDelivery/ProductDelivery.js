
function ProductDelivery(props) {



    return (
      <>
        <div className="row">
                <div className="col-5 col-md-5"> {props.name} </div>
                <div className="col-4 col-md-2"> {props.qtd} </div>
                <div className="col-3 col-md-2">R$ {props.price}</div>
            </div>
      </>
    )
}

export default ProductDelivery