import './RelatableProduct.css'
import Heart from '../card/imgs/heart (2).png'
import CartContext from '../../context/cart.provider'
import React, { useContext } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const notify = () =>
  toast.success("Adicionado ao carrinho ", {
    position: "top-right",
  });

function RelatableProduct(props) {


  const { addToCart } = useContext(CartContext)

  let parcela = props.price / 10;
  let parcelaFormatada = parseFloat(parcela.toFixed(2))
  let parcel = parcelaFormatada.toLocaleString('pt-br', { minimumFractionDigits: 2 });

  var atual = props.price
  var precoFormat = atual.toLocaleString('pt-br', { minimumFractionDigits: 2 });

  return (
    <>

      <div class="cardProdutoRelacionado  col-lg-2 col-sm-5 col-12">
        <div class="col-6">
          <div class="row">
            <a class="fav-icon"><img src={Heart} width="25" height="25" /></a>
          </div>
        </div>


        <Link to={props.link}>

          <div class="row justify-content-evenly">
            <a class="col-10"><img src={props.image} alt="" class="responsive" width="25" height="25" /></a>
          </div>

        </Link>



        <div class="row justify-content-evenly">
          <Link to={props.link}>
            <div class="nomeProdutoRelacionado col-12">
              {props.name}
            </div>
          </Link>

          <div class="precoProdutoRelacionado col-10">
            R$   {precoFormat}
          </div>
          <div class="parcelamentoProdutoRelacionado col-10">
            OU 10X DE R$ {parcel}
          </div>
        </div>

        <div class="row justify-content-evenly">
          <button type="button" class="btn btnAdicionarAoCarrinho botaoComprarProdutoRelacionado  col-8" onClick={() => { addToCart(props.productRelatable); notify(); }}>Comprar</button>
        </div>
        <ToastContainer autoClose={500} />

      </div>
    </>

  )
}

export default RelatableProduct