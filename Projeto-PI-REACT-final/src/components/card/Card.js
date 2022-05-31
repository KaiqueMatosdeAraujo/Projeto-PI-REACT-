import { Link } from 'react-router-dom'
import './Card.css';
import  Heart from './imgs/heart (2).png'
function Card(props) {
  return (
        <>
      <div className="cardProdutoRelacionado  col-lg-2 col-sm-5 col-8">
        <div className="col-6">
          <div class="row">
            <a className="fav-icon"><img src={ Heart } width="25" height="25" /></a>
          </div>
        </div>



        <div className="row justify-content-evenly">
          <a className="col-10"><img src={props.imgProduct} alt="" className="responsive" width="25" height="25" /></a>
        </div>


        <div className="row justify-content-evenly">
          <div className="nomeProdutoRelacionado col-10">
            {props.productName}
          </div>
          <div className="precoProdutoRelacionado col-10">
            {props.valueProduct}
          </div>
          <div className="parcelamentoProdutoRelacionado col-10">
            {props.parcel}
          </div>
        </div>

        <div className="row justify-content-evenly">
          <button type="button" className="btn btnAdicionarAoCarrinho botaoComprarProdutoRelacionado  col-6">Comprar</button>
        </div>
    </div>
      </>

      )
}

      export default Card