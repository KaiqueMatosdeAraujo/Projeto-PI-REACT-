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
import { history } from "../../History";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useParams } from "react-router-dom";
import { addressModel, cardModel, orderModel } from "../../models";

function Delivery(props) {
  const teste = new Date("14-02-2021");
  const cliente = parseInt(localStorage.getItem("UserId"));
  const [endereco,setEndereco] = useState("")
  const [pagamento,setPagamento] = useState("")
  const statusPedido = 1;
  const { cart, getCart } = useContext(CartContext);
  const notifyAdress = () => toast.success("Endereço salvo com sucesso");
  const idcliente = parseInt(localStorage.getItem("UserId"));
  const { orderPlus, getOrder, addOrder } = useContext(OrderContext);
  const [successRegister, setSuccessRegister] = useState(false);
  const [pixPagamento,setPixPagamento] = useState('')
  const [cartaoPagamento,setCartaoPagamento]= useState('')
  const [boletoPagamento,setBoletoPagamento]= useState('')


  useEffect(() => {
    getCards();
    getCart();
    getAllAddress();
    getEstados();
    
  }, [successRegister]);

  const totalCarrinho = JSON.parse(localStorage.getItem("cart"));

  const valorTotal = totalCarrinho
    .map((item) => item.total)
    .reduce((prev, curr) => prev + curr, 0);

  var atualTotal = valorTotal;

  var totalFormat = atualTotal
 const freteSemFormatacao = atualTotal >= 500 ? 0.00 : 15.90
 const frete = freteSemFormatacao > 0.00 ? 2 : 1 
 const freteExibicao = freteSemFormatacao
 const valorTotalPedido = totalFormat + freteExibicao
 


 
  const [address, setAddress] = useState(addressModel);

  const [allAdress, setAllAddress] = useState([]);

  const [order, serOrder] = useState(orderModel);

  const [cards, setCards] = useState([]);
  const [card, setCard] = useState(cardModel);
  const [estados, setEstados] = useState([]);



  const paymentPix =()=>{
     
    console.log(pixPagamento)
    
    
  }

 const pagamentos = {
   formaPagamento:1,
  cartao:1


 }
    
//  const pagamentos = {
//   formaPagamento:1,
//  boleto:1


// }
// const pagamentos = {
//   formaPagamento:1,
// pix:1


// }

  // let produtos = Array.from(pull,({codProduto}) => codProduto)
  // let quantidade = Array.from(pull,({quantidade}) => quantidade)
  
const orderItems =(itensDoPedido)=>{
 axios.post(`http://localhost:8080/pedido/novo`, itensDoPedido)
.then((response) => {
  console.log("ItemPedidoCriado")
  history.push("/successPurchase");
});
}

const paymentOrder =()=> {
axios.post(`http://localhost:8080/pagamento/cadastrar`,JSON.stringify(pagamentos),  {
  headers: {
    "Content-Type": "application/json",
  },
})
.then((response) => {
  console.log("Pagamento Gerado com Sucesso")
});
}


  const register = () => {
    axios
      .post(`http://localhost:8080/endereco/${idcliente}/cadastrar`, address)
      .then((response) => {
        setSuccessRegister(true);
        listAddress();
      });
  };

  const getEstados = () => {
    axios.get(`http://localhost:8080/endereco/uf`).then((response) => {
      setEstados(response.data);
    });
  };


  const getAllAddress = () => {
    axios
      .get(`http://localhost:8080/endereco/${idcliente}`)
      .then((response) => {
        setAllAddress(response.data);
        setSuccessRegister(false);
        console.log(allAdress);
      });
  };

  const getCards = () => {
    axios.get(`http://localhost:8080/cartao/${idcliente}`).then((response) => {
      setCards(response.data);
      setSuccessRegister(false);
      console.log();
    });
  };

  const registerCard = () => {
    axios
      .post(`http://localhost:8080/cartao/${idcliente}/cadastrar`, card)
      .then((response) => {
        setSuccessRegister(true);
        console.log(card);
      });
  };
  
  const registerOrder = async () => {
    let apiRes = null;
     localStorage.removeItem('ultimoPedido');
   
    try {
      apiRes = await axios.post(
        `http://localhost:8080/pedido/cadastrar`,
        JSON.stringify({
          // dataPedido,
          cliente,
          frete,
          pagamento,
          statusPedido,
          endereco,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((resp) =>{
        
        const pedidoId = resp?.data.codPedido;
        localStorage.setItem("ultimoPedido", pedidoId);
      
          
         
      })
      orderItems(productsQuantity())
      
      
     
    } catch (err) {
      apiRes = err.response;
    } finally {
      console.log(apiRes);
    }

    
  };

  
  function productsQuantity(){
  const pull =JSON.parse(localStorage.getItem('cart'))

  let itensDoPedido = []

  pull.map((item)=>{
   const codProduto = `${item.codProduto}`
  
   const quantidade = `${item.quantidade}`
   const codPedido = localStorage.getItem("ultimoPedido")
   

   const  itemPedido = {codProduto,codPedido,quantidade}
   console.log(itemPedido)
   itensDoPedido.push(itemPedido)
  
   console.log("Aqui O Map",pull.map)
  })
  console.log("AQUI OS ITENS",itensDoPedido)
  return itensDoPedido
}

 



  // pedido

  const [addressCod, setAddressCod] = useState("");

  const addAddress = (event) => {
    setAddressCod(event.target.value);
    console.log(addressCod);
  };

  // const addCard = (event) => {
  //   setPagamento(event.target.value);
  //   addOrder(pagamento);
  //   localStorage.setItem("order", pagamento);
  //   console.log(event.target.value);
  // };

  const addCardToOrder = (event) => {
    //addCard(event);
  };

 const texto = "Olá"

  const listCards = () => {
    return cards.map((item) => {
      const numeroCartao = item.numeroCartao;
      const maskCartao = numeroCartao.slice(numeroCartao.length - 4); 
      return (
        <>
          <div className="modalPix">
            <div className="input-group mb-3">
              <button
                type="button"
                className=" btn btn-primary"
               
              >
                
               
                <input
                  type="radio"
                  name="pagamento"
                  id="pagamento"
                  value="2"
                  onChange={onChangeValuePagamento} 
                />
                {/* <a className="imageDisableBox ">
                  <img src={Cartao} alt="" />
               </a> */}
              </button>
       
              <input
                //value={item.codCartao}
                
                type="text"
                className="form-control cardCredit "
                placeholder= {`**** **** **** ${maskCartao}`}
                aria-label="Disabled input example"
                disabled
              /> 
             
            </div>
          </div>
        </>
      );
    });
  };
console.log(endereco)
  const listAddress = () => {
    return allAdress.map((item) => {
      return (
        <>
          <div className="row rowCentralized enderecoCartao">
            <div className="col-12 col-md-12">
              <div className="disabledBox btnEndereco">
         
                <button type="button" className=" btn btn-primary">
               
                  <input
                    type="radio"
                    name="endereco"
                    id="endereco"
                    value={item.codEndereco}
                  />
                </button>
                <div className="col-sm-9 col-7">
                  {item.nomeRua}, {item.numeroCasa} - {item.bairro} -{" "}
                  {item.nomeCidade}/{item.estado}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });
  }; 

  const listAddressCheckout = () => {
    let index = endereco
    return allAdress.map((item) => {
      return (
        <>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#checkoutEntrega"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <strong>Detalhes da Entrega</strong>
          </button>

          <div className="collapse" id="checkoutEntrega">
            <div className="entregaDescriao">
              <div className="row justify-content-center">
                <div className=" col-3 col-md-3 col-lg-2">
                  <img src={PinLocalizacao} width="100%" />
                </div>
                <div className="col-9 col-md-9 col-lg-10">
                  <ul type="none">
                    <li>
                      <strong>
                        {item.nomeRua}, {item.numeroCasa}
                      </strong>
                    </li>
                    <li>
                      Estado:{item.estado} - CEP: {item.cep}
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div className="row justify-content-center">
                <div className=" col-3 col-md-3 col-lg-2">
                  <img src={Caminhao} width="100%" />
                </div>
                <div className="col-9 col-md-9 col-lg-10">
                  <ul type="none">
                    <li>
                      <strong>Prazo de entrega de 9 dias úteis</strong>
                    </li>
                    <li>Chegará no seu endereço até dia 08/06/2022</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });
  };

  const listOrder = () => {
    return cart.map((item) => {
      return (
        <>
          <div className="resumo2 col-11">
            <ProductCheckoutSimple
              nameProduct={item.nome}
              qtd={item.quantidade}
              price={item.total}
            />
          </div>
        </>
      );
    });
  };

  const orderSummary = () => {
    return cart.map((item) => {
      return (
        <>
          <div className="row  rowCentralized justify-content-center ">
            <CheckoutProduct
              name={item.nome}
              qtd={item.quantidade}
              price={item.preco}
              image={item.imgProduto}
            />
          </div>
        </>
      );
    });
  };


  const onChangeValueEndereco =(e)=> {
    setEndereco(e.target.value);
    console.log("Endereço:::",e.target.value);
  }

  const onChangeValuePagamento =(e)=> {
    setPagamento(e.target.value);
    console.log("Pagamento:",e.target.value);
  }

  return (
    <>
      <div className="bgPage">
        <BannerFreight />
        <Header />
        <Nav />

        <div className="row rowCentralized justify-content-center checkoutCentralized">
          <div className="resumo col-11">
            <div className="row">
              <div className="col-5 col-lg-5">
                <strong>Produtos</strong>
              </div>
              <div className="col-4 col-lg-2">
                <strong>Quantidade</strong>
              </div>
              <div className="col-2 col-lg-2">
                <strong>Valor</strong>
              </div>
            </div>
          </div>

          {listOrder()}

          <div className="resumo3 col-11">
            <div className="row">
              <div className="col-5 col-md-5">
                <ul type="none">
                  <li>
                    <strong>Subtotal:</strong>
                  </li>
                  <li>
                    <strong>Frete:</strong>
                  </li>
                  <li>
                    <strong>Total:</strong>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-lg-2">
                <ul type="none">
                  <li> R$ {totalFormat.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  })}</li>
                  <li>R$ {freteExibicao.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  })}</li>
                  <li>R$ {valorTotalPedido.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  })}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FINAL RESUMO */}

        {/* ENTREGA   */}

        <div className="row rowCentralized checkoutCentralized">
          <div className=" col-xl-4  col-11 formEntrega">
            <div className="pagamento1">
              <strong>
                {" "}
                <img src={CaminhaoP} alt="" /> Entrega
              </strong>
              <hr />
            </div>
            <span  onChange={onChangeValueEndereco}>

            {listAddress()}
           </span>
            <button
              type="button"
              className="btn CadastroButton"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <strong>+</strong> Cadastrar novo endereço
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header myprofileModal">
                    <div className="modalcontentTitle" id="exampleModalLabel">
                      Cadastre um novo endereço
                    </div>
                    <button
                      type="button"
                      className="btn modalclose"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      X
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="cardContentAccount row modalEndereco">
                      <div className="col-10">
                        <label for="inputEndereco" id="inputEndereco">
                          Endereço:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputEndereco"
                          placeholder="Av. Corifeu de Azevedo Marques"
                          value={address.nomeRua}
                          onChange={(event) => {
                            setAddress({
                              ...address,
                              nomeRua: event.target.value,
                            });
                          }}
                        />
                      </div>

                      <div className="col-2">
                        <label
                          for="inputAdressNumCadastroEnde"
                          id="inputNumCadastroEnde"
                        >
                          Nº:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAdressNumCadastroEnde"
                          placeholder="3097"
                          value={address.numeroCasa}
                          onChange={(event) => {
                            setAddress({
                              ...address,
                              numeroCasa: event.target.value,
                            });
                          }}
                        />
                      </div>

                      <div className="col-4">
                        <label for="inputAddressBairro" id="InputBairroTitle">
                          Bairro:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddressBairro"
                          placeholder="Vila Butantã"
                          value={address.bairro}
                          onChange={(event) => {
                            setAddress({
                              ...address,
                              bairro: event.target.value,
                            });
                          }}
                        />
                      </div>

                      <div className="col-5">
                        <label for="inputCidade" id="inputCidade">
                          Cidade:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddressCidade"
                          placeholder="São Paulo"
                          value={address.nomeCidade}
                          onChange={(event) => {
                            setAddress({
                              ...address,
                              nomeCidade: event.target.value,
                            });
                          }}
                        />
                      </div>

                      <div className="col-3">
                      <label for="inputAddressUF" id="InputUFTitle">
                        UF:
                      </label>

                      <Form.Select
                        onChange={(event) => {
                          setAddress({ ...address, estado: event.target.value });
                        }}
                      >
                        <option>Selecione um estado</option>
                        {estados.map((item) => {
                          return (
                            <option
                              key={item.cod_estado}
                              value={item.cod_estado}
                            >
                              {item.descricao_estado}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </div>

                      <div className="col-4">
                        <label for="inputAddressCEP" id="InputCEPTitle">
                          CEP:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddressCEP"
                          placeholder="05212040"
                          value={address.cep}
                          onChange={(event) => {
                            setAddress({ ...address, cep: event.target.value });
                          }}
                        />
                      </div>

                      <div className="col-6">
                        <label
                          for="inputAddressComplemento"
                          id="InputComplementoTitle"
                        >
                          Complemento:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddressComplemento"
                          placeholder=" "
                          value={address.complemento}
                          onChange={(event) => {
                            setAddress({
                              ...address,
                              complemento: event.target.value,
                            });
                          }}
                        />
                      </div>

                      <div className="col-10">
                        <label
                          for="inputAddressPontodeReferencia"
                          id="InputPontodeReferenciaTitle"
                        >
                          Ponto de Referência:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddressPontodeReferencia"
                          placeholder=" Em frente a USP "
                          value={address.pontoReferencia}
                          onChange={(event) => {
                            setAddress({
                              ...address,
                              pontoReferencia: event.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {successRegister ? (
                    <h3>Usuário cadastrado com sucesso</h3>
                  ) : (
                    ""
                  )}
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn cancelar"
                      data-bs-dismiss="modal"
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      className="btn salvar"
                      data-bs-dismiss="modal"
                      onClick={() => {
                        register();
                        notifyAdress();
                      }}
                    >
                      {" "}
                      Salvar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <ToastContainer autoClose={1500} />
          </div>

          {/*  FINAL ENTREGA*/}
          {/*  PAGAMENTO  */}

          <div className=" col-xl-3 col-11 formPagamento">
            <div className="pagamento1">
              <strong>
                {" "}
                <img src={PagamentoCartCred} alt="" /> Pagamento
              </strong>
              <hr />
            </div>

            {listCards()}

            <div className="modalCartao">
              <div className="input-group mb-3">

                <button
                  type="button"
                  className=" btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modalCartao"
                >
                  <input type="radio" name="pagamento" onClick={() =>
                    setPagamento({
                      card: true,
                      pix: false,
                      boleto: false,
                    })
                  } />
                </button>



                <div
                  className="modal fade"
                  id="modalCartao"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="pag">
                        <div className="row">
                          <div className=" imagens col-10">
                            <img src={LogoMaster} width="10%" />
                            <img src={LogoAmerican} width="10%" />
                            <img src={LogoVisa} width="10%" />
                          </div>
                          <button
                            type="button"
                            class="btn-close fechar col-1"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <hr />
                        <div className="row cartFake1">
                          <div className="cartFake col-10 col-md-8">
                            <div className="row">
                              <div className="col-3">
                                {/* <img src={ChipCartaoCred} alt="" /> */}
                              </div>
                            </div>
                            <div className="row">
                              <div className="num col-10">

                                <strong>5858 6858 6989 5875</strong>
                              </div>
                            </div>
                            <div className="row">
                              <div className="nome col-7 col-md-6">
                                <strong>Osvaldo Silva</strong>
                              </div>
                              <div className="dataCard col-2 col-md-4">
                                <strong>05/25</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="formCard">
                          <div className="row">
                            <div className=" col-8 col-md-8">
                              <label for="inputNumberCard" id="inputNumberCard">
                                <strong>Número do cartão</strong>{" "}
                              </label>
                              <input
                                className="form-control form-control-lg"
                                type="text"
                                id="inputNumberCard"
                                placeholder="5858 6858 6989 5875"
                                aria-label=".form-control-lg example"
                                value={card.numeroCartao}
                                onChange={(event) => {
                                  setCard({
                                    ...card,
                                    numeroCartao: event.target.value,
                                   });
                                  }}
                              />
                              <br />
                            </div>

                            <div className=" col-4 col-md-4">
                              <label for="inputValidade" id="inputValidade">
                                <strong>Validade</strong>{" "}
                              </label>
                              <input
                                className="form-control form-control-lg"
                                type="text"
                                id="inputValidade"
                                placeholder="05/25"
                                aria-label=".form-control-lg example"
                                value={card.validade}
                                onChange={(event) => {
                                  setCard({
                                    ...card,
                                    validade: event.target.value,
                                   });
                                  }}
                              />
                              <br />
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-12">
                              <label for="inputNomeTitular" id="inputNomeTitular">
                                <strong>Nome do Títular</strong>{" "}
                              </label>
                              <input
                                className="form-control form-control-lg"
                                type="text"
                                id="inputNomeTitular"
                                placeholder="Osvaldo Silva"
                                aria-label=".form-control-lg example"
                                value={card.nomeTitular}
                                onChange={(event) => {
                                  setCard({
                                    ...card,
                                    nomeTitular: event.target.value,
                                   });
                                  }}
                              />
                              <br />
                            </div>
                          </div>

                          <div>
                            <input
                            type="hidden"
                            id="inputBandeira"
                            value={card.bandeira}/>
                          </div>

                          <div>
                            <input
                            type="hidden"
                            id="inputCliente"
                            value={card.cliente}/>
                          </div>

                          <div className="row">
                            <div className="col-4 col-md-3">
                              <label for="">
                                <strong>Cod. Seg</strong>{" "}
                              </label>
                              <input
                                className="form-control form-control-lg"
                                type=""
                                placeholder="CCV"
                                aria-label=".form-control-lg example"
                              />
                            </div>
                            <div className="btnInterrogacao col-2 col-md-3">
                              <button
                                type="button"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Três números no verso do cartão."
                              >
                                <strong>?</strong>
                              </button>
                            </div>

                            
                          </div>

                          <div className="row">
                            <div className="addPagamento col-12">
                              <button onClick={() => registerCard()} 
                            data-bs-dismiss="modal"
                            aria-label="Close">
                                <strong>Adicionar Pagamento</strong>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cartao col-11 col-md-10 col-lg-11">
                  <img src={LogoMaster} width="100%" />
                  <img src={LogoVisa} width="100%" />
                  <img src={LogoAmerican} width="100%" />
                </div>
              </div>
            </div>

            {/*  FINAL MODAL CARTÃO  */}

            {/*  MODAL PIX  */}

            <div className="modalPix">
              <div className="input-group mb-3">
                {/*  Button trigger modal  */}
 
                <button
                  type="button"
                  className=" btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#pix"
                  onChange={onChangeValuePagamento}
                >
                  <input
                    id="pixx"
                    type="radio"
                    name="pagamento"
                    value="2"
                  
                    
                  />
                </button>

                {/*  Modal  */}
                <div
                  className="modal fade"
                  id="pix"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="row">
                        <div className="imagemPix col-10">
                          <img src={Pix} width="20%" />
                        </div>
                        <button
                          type="button"
                          class="btn-close fechar col-1"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <hr />

                      <div className="textPix">
                        <div className="row">
                          <div className=" pi col-12">
                            <strong>Pix</strong>
                          </div>
                        </div>{" "}
                        <br />
                        <div className="row">
                          <div className="col-12">
                            <ul type="none">
                              <li>
                                {" "}
                                A melhor forma de pagamento agora disponível na
                                Pimpolhos.
                              </li>
                              <br />
                              <li>
                                Será encaminhado um QR code no seu e-mail após a
                                finalização do seu pedido.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="row">
                          <div className="valor col-12">
                            <strong>Valor total: </strong> R$ {totalFormat}
                          </div>
                        </div>
                        <div className="row">
                          <div className=" addPagamento col-12">
                            <button onClick={paymentPix(                    )}>
                              
                              <strong>Adicionar Pagamento</strong>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pix col-11 col-md-10 col-lg-11">
                  <img src={Pix} width="23%" />
                </div>
              </div>
            </div>
            {/*  FINAL MODAL PIX   */}

            {/*  MODAL BOLETO  */}

            <div className="modalBoleto">
              <div className="input-group mb-3">
                {/*  Button trigger modal   */}
                <button
                  type="button"
                  className=" btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#boleto"
                >
                  <input
                    id="boletoo"
                    type="radio"
                    name="pagamento"
                    value="10"
                    onChange={onChangeValuePagamento}
                  />
                </button>

                {/*  Modal  */}
                <div
                  className="modal fade"
                  id="boleto"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="row">
                        <div className="imagemBoleto col-10">
                          <img src={Boleto} width="25%" />
                        </div>
                        <button
                          type="button"
                          class="btn-close fechar col-1"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <hr />
                      <div className="textBoleto">
                        <div className="row">
                          <div className=" pi col-12">
                            <strong>Boleto bancário</strong>
                          </div>
                        </div>{" "}
                        <br />
                        <div className="row">
                          <div className="col-12">
                            <ul type="none">
                              <li>
                                O boleto bancário será gerado no CPF:{" "}
                                <strong>568.**</strong>{" "}
                              </li>
                              <li>
                                E Será enviado no seu e-mail após a finalização
                                do pedido.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="row">
                          <div className="valor col-12">
                            <strong>Valor total: </strong> R$ {totalFormat}
                          </div>
                        </div>
                        <div className="row">
                          <div className=" addPagamento col-12">
                            <button>
                              <strong>Adicionar Pagamento</strong>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="boleto col-11 col-md-10 col-lg-11">
                  <img src={Boleto} width="28%" />
                </div>
              </div>
            </div>
            {/*  FINAL MODAL BOLETO   */}
          </div>
          {/* FINAL PAGAMENTO */}
          <div className="checkout col-xl-4 col-11">
            <div className="resumo1">
              <strong>
                <img src={Resumo} /> Resumo
              </strong>
              <hr />
            </div>
            <div className="row rowCentralized">
              <div className="chek col-12">
                <h5>
                  <strong>Revise e confirme sua compra</strong>
                </h5>

                {orderSummary()}

                <div className="row rowCentralized justify-content-center">
                  <div className="checkoutEntrega col-11">
                    {listAddressCheckout()}
                  </div>

                  <div className="checkoutPagamento col-11">
                    <p>
                      <button
                        className="btn btn-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#checkoutPagamento"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        <strong>Detalhes do Pagamento</strong>
                      </button>
                    </p>
                    <div className="collapse" id="checkoutPagamento">
                      <div className="row">
                        <div className="col-9 col-md-8 col-lg-10">
                          <ul type="none">
                            <li>
                              <img src={Boleto} width="30%" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="btnFinalizarCompra col-6">
                    <a>
                      <button onClick={registerOrder}>
                        <strong>Finalizar Compra</strong>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Delivery;