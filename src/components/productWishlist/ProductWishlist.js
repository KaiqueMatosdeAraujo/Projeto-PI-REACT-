import { Link } from 'react-router-dom'
import './ProductWishlist.css';
import lixeira from '../productWishlist/imgWhish/lixeira.png'
import FavoriteContext from "../../context/favorites.provider";
import CartContext from "../../context/cart.provider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState, useContext } from 'react'

function ProductWishlist(props) {

  const { deleteFavorite } = useContext(FavoriteContext)
  const { addToCart } = useContext(CartContext);

  const [successRegister, setSuccessRegister] = useState(false); 

  var atual = props.valor;
  var precoFormat = atual.toLocaleString("pt-br", { minimumFractionDigits: 2 }); 

  // const getLocalStorage = () => {
  //   const favoritos = JSON.parse(localStorage.getItem('favorite'))
  // }

  // useEffect(() => {
  //   getLocalStorage()
  // }, [successRegister]); 

  const notify = () =>
  toast.success("Adicionado ao carrinho ", {
    position: "top-right",
  });

  const Deletenotify = () =>
  toast.success("Deletado com sucesso ", {
    position: "top-right",
  });

  const SemEstoquenotify = () =>
  toast.error("Produto sem estoque ", {
    position: "top-right",
  });

  const estoque = (props.qtdEstoque)
  console.log(estoque)

  const renderizaBotao = () => {
    return estoque == 0 ? (
      <button  
      onClick={() => {
          SemEstoquenotify()
        }}><strong>Avise-me</strong> </button>
    ) : (
      <button  
     onClick={() => {
          addToCart(props.product);
          notify();
        }}><strong>Adicionar ao Carrinho</strong> </button>
    )
  }


  return (
    <>
      <div className="cardContent">
        <div className="produtoFav">
          <div className="col-md-2 col-8 ">
            <img className="BabyImage" src={props.image} width="75%" />
          </div>
          <div className="col-sm-10 col-lg-5">
            <ul type="none">
              <li className="nomeBB"><strong>{props.name}</strong></li>
              <li className="cod">CÓDIGO: {props.codigo}</li><br />
              <li><strong>R$ {precoFormat}</strong></li>
              <li><strong>{props.quantidade}</strong></li>
            </ul>
          </div>
          <div className=" lixeiraBtnAdd">

            <div className="lix col-md-4 col-lg-3">
              <button onClick={() => {
                deleteFavorite(props.codigo);
                //setSuccessRegister(true);
                Deletenotify(); 
              }}><img className="btn-lixeira" src={lixeira} /></button>
              <ToastContainer autoClose={500} />
            </div>
            {/* <div className="lineVertical col-1">.</div> */}
            <div className="btnCar col-8"> 
               {renderizaBotao()} 
              
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default ProductWishlist
