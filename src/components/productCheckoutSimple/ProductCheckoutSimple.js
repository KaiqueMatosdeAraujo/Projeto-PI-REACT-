import './ProductCheckoutSimple.css'


function ProductCheckoutSimple(props) {
    return (
        <>
            <div class="row justify-content-around">
                    <div class="col-6 col-md-5 col-lg-5">{props.nameProduct}</div>
                    <div class=" col-3 col-md-4 col-lg-2">{props.qtd}</div>
                    <div class="col-3 col-md-2 col-lg-2">R$ {props.price}</div>
                </div>    
        </>
    )
}

export default ProductCheckoutSimple