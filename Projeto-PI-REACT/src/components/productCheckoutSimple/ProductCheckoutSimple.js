import './ProductCheckoutSimple.css'


function ProductCheckoutSimple(props) {

    var atual = props.price
    var precoFormat = atual.toLocaleString('pt-br', {minimumFractionDigits: 2});

    return (
        <>
            <div class="row">
                    <div class="col-6 col-md-5 col-lg-5">{props.nameProduct}</div>
                    <div class=" col-3 col-md-4 col-lg-2">{props.qtd}</div>
                    <div class="col-3 col-md-2 col-lg-2">R$ {precoFormat}</div>
                </div>    
        </>
    )
}

export default ProductCheckoutSimple