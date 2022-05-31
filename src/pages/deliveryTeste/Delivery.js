import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import React, { useContext, useState, useEffect } from "react";
import "./Delivery.css";
import Nav from "../../components/nav/Nav";
import CheckoutProduct from "../../components/checkoutProduct/CheckoutProduct";
import ProductDelivery from "../../components/productDelivery/ProductDelivery";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Boleto from "./imgs/boleto.png";
import LogoMaster from "./imgs/logo-mastercard-4096.png";
import LogoAmerican from "./imgs/logo-american-express-4096.png";
import LogoVisa from "./imgs/logo-visa-4096.png";

import PinLocalizacao from "./imgs/pinLocation.png";
import Pix from "./imgs/pix.png";

import ProductCheckoutSimple from "../../components/productCheckoutSimple/ProductCheckoutSimple";
import Lupa from "./imgs/pesquisa-de-lupa.png";
import PagamentoCartCred from "./imgs/pagamento-com-cartao-de-credito(1).png";
import Resumo from "./imgs/resumo.png";

import BannerFreight from "../../components/freightBanner/FreightBanner";
import Caminhao from "./imgs/caminhao-de-entrega.png";
import CaminhaoP from "./imgs/CaminhaoEntregaP.png";
import CartContext from "../../context/cart.provider";
import OrderContext from "../../context/order.provider";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

import { useParams } from "react-router-dom";
import { addressModel, cardModel, orderModel } from "../../models";

function Delivery(props) {
   const teste = new Date("14-02-2021");
 const cliente =  parseInt(localStorage.getItem("UserId"));
//  const dataPedido = '2022-05-31'
 const endereco = 1;
 const frete = 1;
 const pagamento = 1
 const statusPedido = 1

//   const { cart, getCart } = useContext(CartContext);

//   const notifyAdress = () => toast.success("Endereço salvo com sucesso") 

  // const idcliente = parseInt(localStorage.getItem("UserId"));
//   const { orderPlus, getOrder, addOrder } = useContext(OrderContext);

//   useEffect(() => {
//     getCards();
//     getCart();
//     getAllAddress();
//   }, []);

//   const totalCarrinho = JSON.parse(localStorage.getItem("cart"));

//   const valorTotal = totalCarrinho
//     .map((item) => item.total)
//     .reduce((prev, curr) => prev + curr, 0);

//   var atualTotal = valorTotal;

//   var totalFormat = atualTotal.toLocaleString("pt-br", {
//     minimumFractionDigits: 2,
//   });

//   const [successRegister, setSuccessRegister] = useState(false);
//   const [address, setAddress] = useState(addressModel);

//   const [allAdress, setAllAddress] = useState([]);

//   const [order, serOrder] = useState(orderModel);

//   const [cards, setCards] = useState([]);
//   const [card, setCard] = useState(cardModel);

//   const register = () => {



    
//     axios
//       .post(`http://localhost:8080/endereco/${idcliente}/cadastrar`, address)
//       .then((response) => {
//         setSuccessRegister(true);
//         listAddress();
//       });
//   };

//   const getAllAddress = () => {
//     axios
//       .get(`http://localhost:8080/endereco/${idcliente}`)
//       .then((response) => {
//         setAllAddress(response.data);
//         console.log(allAdress);
//       });
//   };

//   const getCards = () => {
//     axios.get(`http://localhost:8080/cartao/${idcliente}`).then((response) => {
//       setCards(response.data);
//       console.log();
//     });
//   };

//   const registerCard = () => {
//     axios
//       .post(`http://localhost:8080/cartao/${idcliente}/cadastrar`, card)
//       .then((response) => {
//         setSuccessRegister(true);
//         console.log(card);
//       });
//   };

 const registerOrder = async () => {
  let apiRes = null
  try{
     apiRes = await axios.post(`http://localhost:8080/pedido/cadastrar`,JSON.stringify({
    // dataPedido,
    cliente,
    frete,
    pagamento,
    statusPedido,
    endereco},
  
  ),{
    
  })}catch (err) {
    apiRes = err.response;
  } finally {
    console.log(apiRes);
  }

 
}


//   var valorFrete = 500;

//   // pedido

//   // const [addressCod, setAddressCod] = useState("");

//   // const addAddress = (event) => {
//   //   setAddressCod(event.target.value);
//   //   console.log(addressCod);
//   // };

  

//   // const addCard = (event) => {
//   //   setPagamento(event.target.value);
//   //   addOrder(pagamento);
//   //   localStorage.setItem("order", pagamento);
//   //   console.log(event.target.value);
//   // };

//   const addCardToOrder = (event) => {
//     addCard(event);
//   };

  // let valorFrete = 0;

  // if (valorTotal =>) {

  // }

  // const listCards = () => {
  //   return cards.map((item) => {
  //     return (
  //       <>
  //         <div className="modalPix">
  //           <div className="input-group mb-3">
  //             <button
  //               type="button"
  //               className=" btn btn-primary"
  //               value={item.codCartao}
  //               onClick={addCardToOrder}
  //             >
  //               {/* <input
  //                 type="radio"
  //                 name="pagamento"
                  
  //               /> */}
  //             </button>

  //             <input
  //               type="text"
  //               className="form-control cardCredit "
  //               placeholder={item.numeroCartao}
  //               aria-label="Disabled input example"
  //               disabled
  //             />
  //           </div>
  //         </div>
  //       </>
  //     );
  //   });
  // };

  // const listAddress = () => {
  //   return allAdress.map((item) => {
  //     return (
  //       <>
  //         <div className="row rowCentralized enderecoCartao">
  //           <div className="col-12 col-md-12">
  //             <div className="disabledBox btnEndereco">
  //               <button type="button" className=" btn btn-primary">
  //                 <input
  //                   type="radio"
  //                   name="pagamento"
  //                   id="endereco"
  //                   value={item.codEndereco}
  //                   onClick={addAddress}
  //                 />
  //               </button>
  //               <div className="col-sm-9 col-7">
  //                 {item.nomeRua}, {item.numeroCasa} - {item.bairro} -{" "}
  //                 {item.nomeCidade}/{item.estado}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </>
  //     );
  //   });
  // };

  // const listAddressCheckout = () => {
  //   return allAdress.map((item) => {
  //     return (
  //       <>
  //         <button
  //           className="btn btn-primary"
  //           type="button"
  //           data-bs-toggle="collapse"
  //           data-bs-target="#checkoutEntrega"
  //           aria-expanded="false"
  //           aria-controls="collapseExample"
  //         >
  //           <strong>Detalhes da Entrega</strong>
  //         </button>

  //         <div className="collapse" id="checkoutEntrega">
  //           <div className="entregaDescriao">
  //             <div className="row justify-content-center">
  //               <div className=" col-3 col-md-3 col-lg-2">
                 
  //               </div>
  //               <div className="col-9 col-md-9 col-lg-10">
  //                 <ul type="none">
  //                   <li>
  //                     <strong>
  //                       {item.nomeRua}, {item.numeroCasa}
  //                     </strong>
  //                   </li>
  //                   <li>
  //                     Estado:{item.estado} - CEP: {item.cep} 
  //                   </li>
  //                 </ul>
  //               </div>
  //             </div>
  //             <hr />
  //             <div className="row justify-content-center">
  //               <div className=" col-3 col-md-3 col-lg-2">
                
  //               </div>
  //               <div className="col-9 col-md-9 col-lg-10">
  //                 <ul type="none">
  //                   <li>
  //                     <strong>Prazo de entrega de 9 dias úteis</strong>
  //                   </li>
  //                   <li>Chegará no seu endereço até dia 08/06/2022</li>
  //                 </ul>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </>
  //     );
  //   });
  // };

  // const listOrder = () => {
  //   return cart.map((item) => {
  //     return (
  //       <>
  //         <div className="resumo2 col-11">
  //           <ProductCheckoutSimple
  //             nameProduct={item.nome}
  //             qtd={item.quantidade}
  //             price={item.total}
  //           />
  //         </div>
  //       </>
  //     );
  //   });
  // };

  // const orderSummary = () => {
  //   return cart.map((item) => {
  //     return (
  //       <>
  //         <div className="row  rowCentralized justify-content-center ">
  //           <CheckoutProduct
  //             name={item.nome}
  //             qtd={item.quantidade}
  //             price={item.preco}
  //             image={item.imgProduto}
  //           />
  //         </div>
  //       </>
  //     );
  //   });
  // };

  return (
    <><h1>Olaaa</h1>
     <button onClick={registerOrder}>
                         <strong>Finalizar Compra</strong>
                        </button>
    </>
  );
}

export default Delivery;
