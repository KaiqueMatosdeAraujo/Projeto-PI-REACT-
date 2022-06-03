import { Link } from "react-router-dom";

import "./CardProduct.css";
import Heart from "./imgs/heart (2).png";
import CartContext from "../../context/cart.provider";
import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () =>
  toast.success("Adicionado ao carrinho ", {
    position: "top-right",
  });

function CardProduct(props) {
  const { addToCart } = useContext(CartContext);

  let parcela = props.price / 10;
  let parcelaFormatada = parseFloat(parcela.toFixed(2));
  let parcel = parcelaFormatada.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });

  var atual = props.price;
  var precoFormat = atual.toLocaleString("pt-br", { minimumFractionDigits: 2 });

  let estoqueZerado = 0;
  let qtdMinima = 5;

  const listProductsHome = () => {

    switch (true){
      case (props.qtdEstoque == estoqueZerado): 
        return <>
        <div className="cards">
          <div className="container-card">
            <ul className="lista-produtos">
              <li className="item-produto">
                <div className="fav">
                  <a className="fav-icon">
                    <img src={Heart} width="25px" height="25px" />
                  </a>
                  <br />
                </div>
                <Link to={props.link}>
                <img
                  src={props.Image}
                  className="imagem-produto"
                  width="215"
                  height="215"
                />
              </Link>
              <br />
              <Link to={props.link}>
                <div className="nome-produto">{props.Name}</div>
              </Link>
  
                <div className="precos">
                  <div className="preco">R$ {precoFormat}</div>
                  <div className="parcelado">OU 10X DE R$ {parcel}</div>
                </div>
                
  
                <button
                  type="button"
                  className="comprar"
                 
                    
                  
                >
                  Avise-me
                </button>
                <ToastContainer autoClose={500} />
              </li>
            </ul>
          </div>
        </div>
        </>
        break;
      case (props.qtdEstoque < qtdMinima) :
        return <>
        <div className="cards">
          <div className="container-card">
            <ul className="lista-produtos">
              <li className="item-produto">
                <div className="fav">
                  <a className="fav-icon">
                    <img src={Heart} width="25px" height="25px" />
                  </a>
                  <br />
                </div>
                <Link to={props.link}>
                <img
                  src={props.Image}
                  className="imagem-produto"
                  width="215"
                  height="215"
                />
              </Link>
              <br />
              <Link to={props.link}>
                <div className="nome-produto">{props.Name}</div>
              </Link>

                <div className="precos">
                  <div className="preco">R$ {precoFormat}</div>
                  <div className="parcelado">OU 10X DE R$ {parcel}</div>
                </div>
                

                <button
                  type="button"
                  className="comprar"
                  onClick={() => {
                    addToCart(props.product);
                    notify();
                  }}
                >
                  Poucas Unidades
                </button>
                <ToastContainer autoClose={500} />
              </li>
            </ul>
          </div>
        </div>
        </>
        break;
      default:
        return <>
        <div className="cards">
          <div className="container-card">
            <ul className="lista-produtos">
              <li className="item-produto">
                <div className="fav">
                  <a className="fav-icon">
                    <img src={Heart} width="25px" height="25px" />
                  </a>
                  <br />
                </div>
                <Link to={props.link}>
                <img
                  src={props.Image}
                  className="imagem-produto"
                  width="215"
                  height="215"
                />
              </Link>
              <br />
              <Link to={props.link}>
                <div className="nome-produto">{props.Name}</div>
              </Link>
  
                <div className="precos">
                  <div className="preco">R$ {precoFormat}</div>
                  <div className="parcelado">OU 10X DE R$ {parcel}</div>
                </div>
                
  
                <button
                  type="button"
                  className="comprar"
                  onClick={() => {
                    addToCart(props.product);
                    notify();
                  }}
                >
                  Comprar
                </button>
                <ToastContainer autoClose={500} />
              </li>
            </ul>
          </div>
        </div>
        </>
    }





  //   return (props.qtdEstoque == estoqueZerado) ?(
  //     <>
  //     <div className="cards">
  //       <div className="container-card">
  //         <ul className="lista-produtos">
  //           <li className="item-produto">
  //             <div className="fav">
  //               <a className="fav-icon">
  //                 <img src={Heart} width="25px" height="25px" />
  //               </a>
  //               <br />
  //             </div>
  //             <img
  //               src={props.Image}
  //               className="imagem-produto"
  //               width="215"
  //               height="215"
  //             />
  //             <br />
  //             <Link to="../paginas/PaginaItem2.html">
  //               <div className="nome-produto">{props.Name}</div>
  //             </Link>

  //             <div className="precos">
  //               <div className="preco">R$ {precoFormat}</div>
  //               <div className="parcelado">OU 10X DE R$ {parcel}</div>
  //             </div>
              

  //             <button
  //               type="button"
  //               className="comprar"
  //               onClick={() => {
  //                 addToCart(props.product);
  //                 notify();
  //               }}
  //             >
  //               Avise-me
  //             </button>
  //             <ToastContainer autoClose={500} />
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </>
  //   ) : (
  //     <>
  //     <div className="cards">
  //       <div className="container-card">
  //         <ul className="lista-produtos">
  //           <li className="item-produto">
  //             <div className="fav">
  //               <a className="fav-icon">
  //                 <img src={Heart} width="25px" height="25px" />
  //               </a>
  //               <br />
  //             </div>
  //             <img
  //               src={props.Image}
  //               className="imagem-produto"
  //               width="215"
  //               height="215"
  //             />
  //             <br />
  //             <Link to="../paginas/PaginaItem2.html">
  //               <div className="nome-produto">{props.Name}</div>
  //             </Link>

  //             <div className="precos">
  //               <div className="preco">R$ {precoFormat}</div>
  //               <div className="parcelado">OU 10X DE R$ {parcel}</div>
  //             </div>
              

  //             <button
  //               type="button"
  //               className="comprar"
  //               onClick={() => {
  //                 addToCart(props.product);
  //                 notify();
  //               }}
  //             >
  //               Comprar
  //             </button>
  //             <ToastContainer autoClose={500} />
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //     </>
  //   );
   };


  return <>{listProductsHome()}</>;
}

export default CardProduct;