import './RelatableProduct.css'
import Heart from '../card/imgs/heart (2).png'
import CartContext from '../../context/cart.provider'
import React, { useContext } from 'react';


function RelatableProduct(props) {

  
  const { addToCart } = useContext(CartContext)

  let parcela = props.price / 10;
  let parcelaFormatada = parseFloat(parcela.toFixed(2))
  let parcel = parcelaFormatada.toLocaleString('pt-br', {minimumFractionDigits: 2});

  var atual = props.price
  var precoFormat = atual.toLocaleString('pt-br', {minimumFractionDigits: 2});

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
            {props.name}
          </div>
          <div class="precoProdutoRelacionado col-10">
            R$   {precoFormat}
          </div>
          <div class="parcelamentoProdutoRelacionado col-10">
            OU 10X DE R$ {parcel}
          </div>
        </div>

        <div class="row justify-content-evenly">
          <button type="button" class="btn btnAdicionarAoCarrinho botaoComprarProdutoRelacionado  col-8" onClick={() => addToCart(props.productRelatable)}>Comprar</button>
        </div>


      </div>
    </>

  )
}

export default RelatableProduct