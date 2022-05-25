import './RelatableProduct.css'
import Heart from '../card/imgs/heart (2).png'


function RelatableProduct(props) {
  return (
    <>

      <div class="cardProdutoRelacionado  col-lg-2 col-sm-5 col-12">
        <div class="col-6">
          <div class="row">
            <a class="fav-icon"><img src={Heart} width="25" height="25" /></a>
          </div>
        </div>



        <div class="row justify-content-evenly">
          <a class="col-10"><img src={props.image} alt="" class="responsive" width="25" height="25" /></a>
        </div>


        <div class="row justify-content-evenly">
          <div class="nomeProdutoRelacionado col-10">
            {props.rProductName}
          </div>
          <div class="precoProdutoRelacionado col-10">
            R$   {props.rProductPrice}
          </div>
          <div class="parcelamentoProdutoRelacionado col-10">
            OU 10X DE R${props.rProductParcel}
          </div>
        </div>

        <div class="row justify-content-evenly">
          <button type="button" class="btn btnAdicionarAoCarrinho botaoComprarProdutoRelacionado  col-8">Comprar</button>
        </div>


      </div>
    </>

  )
}

export default RelatableProduct
