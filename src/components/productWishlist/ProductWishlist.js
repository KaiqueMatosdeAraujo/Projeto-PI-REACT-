import { Link } from 'react-router-dom'
import './ProductWishlist.css';
import lixeira from '../productWishlist/imgWhish/lixeira.png'

function ProductWishlist(props) {
  return (
    <>
      <div className="cardContent">
        <div className="produtoFav">
          <div className="col-md-2 col-8 ">
            <img  className="BabyImage" src={ props.image } width="75%" />
          </div>
          <div className="col-sm-10 col-lg-5">
            <ul type="none">
              <li className="nomeBB"><strong>{ props.name }</strong></li>
              <li className="cod">CÓDIGO: { props.codigo }</li><br />
              <li><strong>R$ { props.valor }</strong></li>
            </ul>
          </div>
          <div className=" lixeiraBtnAdd">

            <div className="lix col-md-4 col-lg-3">
              <button><img className="btn-lixeira" src={lixeira}  /></button>
            </div>
            {/* <div className="lineVertical col-1">.</div> */}
            <div className="btnCar col-8">
              <button><strong>Adicionar ao Carrinho</strong> </button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default ProductWishlist
