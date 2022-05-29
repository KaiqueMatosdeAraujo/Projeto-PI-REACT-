import "./MyAccount.css";
import Freight from "../../components/freightBanner/FreightBanner";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import cadastro from "./img-myAccount/cadastro.png";
import localizacao from "./img-myAccount/localizacao.png";
import lixeira from "./img-myAccount/trashBin.png";
import PinLocation from "./img-myAccount/location.png";
import mastercard from "./img-myAccount/mastercard.png";
import AmericanMini from "./img-myAccount/american2.png";
import american from "./img-myAccount/american.png";
import chip from "./img-myAccount/chip.png";
import elo from "./img-myAccount/elo.png";
import hipercard from "./img-myAccount/hipercard.png";
import miniLixeira from "./img-myAccount/miniLixeira.png";
import visa from "./img-myAccount/visa.png";
import checklist from "./img-myAccount/checklist.png";
import desejos from "./img-myAccount/desejos.png";
import user from "./img-myAccount/user.png";
import lapis from "./img-myAccount/icone-lapis.png";
import { Link } from "react-router-dom";
import LogoMaster from "../delivery/imgs/logo-mastercard-4096.png";
import LogoAmerican from "../delivery/imgs/logo-american-express-4096.png";
import LogoVisa from "../delivery/imgs/logo-visa-4096.png";
import ChipCartaoCred from "../delivery/imgs/chip-de-cartao-de-credito.png";
import TabsMyAccount from "../../components/tabsMyAccount/TabsMyAccount";
import MaskedInput from "../../mask/Mask";
import { baseUrl } from "../../environments/environments";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { addressModel, cardModel } from "../../models";
import { Form } from "react-bootstrap";

function MyAccount(props) {
  const idcliente = parseInt(localStorage.getItem("UserId"));

  const { idendereco } = useParams();

  const [customer, setCustomer] = useState([]);

  const [states, setStates] = useState([]);
  const [addressrecovered, setAddressRecovered] = useState([]);
  const [allAdress, setAllAddress] = useState([]);
  const [successRegister, setSuccessRegister] = useState(false);
  const [address, setAddress] = useState(addressModel);

  const [cards, setCards] = useState([]);
  const [card, setCard] = useState(cardModel);

  const endereco = props.endereco || {};

  function handleChange(event) {
    setAddress({ ...address, cep: event.target.value });
  }

  useEffect(() => {
    getCustomer();
    getCards();
    getAllAddress();
    // getSelectEstado();
  }, []);

  // const getAddress = () => {
  //     axios.get(`http://localhost:8080/endereco/${idcliente}/${idendereco}`)
  //     //axios.get(`http://localhost:8080/endereco/5/12`)
  //     .then((response) => {
  //         setAddressRecovered(response.data)
  //         console.log(response.data)
  //     })
  // }

  const getCustomer = () => {
    axios.get(`http://localhost:8080/cliente/${idcliente}`).then((response) => {
      console.log(response.data);
      setCustomer(response.data);
    });
  };

  const getCards = () => {
    axios.get(`http://localhost:8080/cartao/${idcliente}`).then((response) => {
      setCards(response.data);
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

  const getAllAddress = () => {
    axios
      .get(`http://localhost:8080/endereco/${idcliente}`)
      .then((response) => {
        setAllAddress(response.data);
        console.log(allAdress);
      });
  };

  const register = () => {
    axios
      .post(`http://localhost:8080/endereco/${idcliente}/cadastrar`, address)
      .then((response) => {
        setSuccessRegister(true);
        listAddress();
      });
  };

  const [estado, setEstado] = useState([]);

  // const getSelectEstado = () => {
  //   axios.get(`${baseUrl}/endereco/uf`).then((response) => {
  //     console.log(response.data);
  //     let estadoFilter = [];
  //     let estadoResponse = response.data;
  //     for (let i = 0; i < estadoResponse.length; i++) {
  //       if (estado.cod_estado !== estadoResponse[i].cod_estado) {
  //         estadoFilter.push(estadoResponse[i]);
  //       }
  //     }
  //     setEstado(estadoFilter);

  //   });
  // };
  console.log("Aqui Esta o Estado ----->>>>>>>>>", estado);
  const renderEstado = () => {
    return (
      <>
        <div className="col-3">
          <label for="inputAddressUF" id="InputUFTitle">
            UF:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddressUF"
            placeholder="SP"
            value={address.estado}
            onChange={(event) => {
              setAddress({
                ...address,
                estado: event.target.value,
              });
            }}
          />
        </div>

        {/* <div className="col-3">
          <label for="inputAddressUF" id="InputUFTitle">
            UF:
          </label>

          <Form.Select
            onChange={(event) => {
              console.log(event);
              let stateSelected = event.target.options.selectedIndex;
              let textState = event.target.options[stateSelected].innerText;
              setEstado({
                estado:event.target.value
                
              });
            }}
          >
            <option defaultValue >Selecione um estado </option>
            {estado.map((item) => {
              return (
                <option key={item.cod_estado} value={item.cod_estado}>
                  {item.descricao_estado}
                </option>
              );
            })}
          </Form.Select>
        </div> */}
      </>
    );
  };

  console.log(cards);

  const listCards = () => {
    return cards.map((item) => {
      return (
        <>
          <div className="row rowCentralized enderecoCartao">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="row rowCentralized enderecoCartao">
                <div className="col-12 col-lg-8">
                  <div className="disabledBox">
                    <a className="imageDisableBox col-2 col-md-1">
                      <img src={mastercard} alt="" />
                    </a>
                    <div className="col-sm-9 col-7">
                      <input
                        type="text"
                        className="form-control "
                        placeholder={item.numeroCartao}
                        aria-label="Disabled input example"
                        disabled
                      />
                    </div>

                    <div className="dataButtons col-2">
                      <div className="row">
                        <a className="imageDisableBox col-6">
                          <img src={lixeira} alt="" />
                        </a>
                        <a
                          type="button"
                          className="imageDisableBox col-6 "
                          data-bs-toggle="modal"
                          data-bs-target="#editarcartao"
                        >
                          <img src={lapis} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });
  };

  // const delete = (id) => {
  //     axios.delete(`${baseUrl}/customer/${id}`)
  //         .then((response) => {
  //             alert('item removido com sucesso')
  //             getCustomers()
  //         })
  // }

  const listAddress = () => {
    return allAdress.map((item) => {
      return (
        <>
          <div className="row rowCentralized enderecoCartao">
            <div className="col-12 col-md-12">
              <div className="disabledBox">
                <a className="imageDisableBox">
                  {" "}
                  <img src={PinLocation} />
                </a>
                <div className="col-sm-9 col-7">
                  {item.nomeRua}, {item.numeroCasa} - {item.bairro} -{" "}
                  {item.nomeCidade}
                </div>
                <div className="dataButtons col-2">
                  <div className="row">
                    <a className="imageDisableBox ">
                      <img src={lixeira} alt="" />
                    </a>
                    {/* <a className="imageDisableBox col-6 "><img src={lapis} alt="" /></a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <>
      {/* <!-- INÍCIO DO NAV/TAB --> */}

      {/* <!-- INICIO DO CONTEUDO NAV/TAB --> */}
      {/* <div className="tab-content" id="myTabContent">*/}
      <div
        className="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      />

      <div className="row rowCentralized justify-content-center ">
        <div className=" col-md-11 col-11 teste-dados">
          <div className="cardContentTitleDC">
            {" "}
            <img className="emotes" src={cadastro} />
            Dados Cadastrais
          </div>
          <div className="container containerAccount">
            <div className="cardContentAccount rowCentralized row teste">
              <div className="col-12 col-md-12 col-lg-5 custom-inputAccount ">
                <label for="inputAddressEndereco" id="InputEnderecoTitle">
                  Nome:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddressEndereco"
                  placeholder={customer.nomeCliente}
                  aria-label="Disabled input example"
                  disabled
                />
              </div>

              <div className="col-12 col-md-12 col-lg-5 custom-inputAccount">
                <label for="inputAddressCEP" id="InputCEPTitle">
                  E-mail:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddressCEP"
                  placeholder={customer.email}
                  aria-label="Disabled input example"
                  disabled
                />
              </div>

              <div className="col-12 col-md-12 col-lg-5 custom-inputAccount">
                <label for="inputAddressBairro" id="InputBairroTitle">
                  CPF:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddressBairro"
                  placeholder={customer.cpf}
                  aria-label="Disabled input example"
                  disabled
                />
              </div>

              <div className="col-12 col-md-12 col-lg-5 custom-inputAccount responsive-inputA">
                <label for="inputAddressCidade" id="InputCidadeTitle">
                  Nascimento:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddressCidade"
                  placeholder={customer.dataNasc}
                  aria-label="Disabled input example"
                  disabled
                />
              </div>
              <div className="col-12 col-md-12 col-lg-5 custom-inputAccount">
                <label for="inputAddressComplemento" id="InputComplementoTitle">
                  DDD:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddressComplemento"
                  placeholder={customer.ddd}
                  aria-label="Disabled input example"
                  disabled
                />
              </div>

              <div className="col-12 col-md-12 col-lg-5 custom-inputAccount">
                <label for="inputAddressComplemento" id="InputComplementoTitle">
                  Telefone:
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="inputAddressComplemento"
                  placeholder={customer.numeroTelefone}
                  aria-label="Disabled input example"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-md-11 col-12 col-lg-5">
                    <div className="cardContentTitleDC"><img className="emotes" src={localizacao} alt="" /> Endereço Principal
                    </div>
                   

                    <div className="cardContentAccount containerAccount rowCentralized row">

                            <div className="col-9 custom-inputAccount numeroCasa" >
                                <label for="inputAddressEndereco" id="InputEnderecoTitle">
                                    Endereço:</label>
                                <input type="text" className="form-control" id="inputAddressEndereco"
                                    placeholder={addressrecovered.nomeRua} aria-label="Disabled input example" disabled />
                            </div>

                            <div className="col-2 custom-inputAccount">
                                <label for="inputAddressNumero" id="InputNumeroTitle">
                                    N°:</label>
                                <input type="text" className="form-control" id="inputAddressNumero"
                                    placeholder={addressrecovered.numeroCasa} aria-label="Disabled input example" disabled />
                            </div>

                            <div className="col-12 col-md-12 col-lg-5 custom-inputAccount">
                                <label for="inputAddressBairro" id="InputBairroTitle">
                                    Bairro:</label>
                                <input type="text" className="form-control" id="inputAddressBairro" placeholder={addressrecovered.bairro}
                                    aria-label="Disabled input example" disabled />
                            </div>

                            <div className="col-12 col-md-12 col-lg-5 custom-inputAccount responsive-inputA">
                                <label for="inputAddressCidade" id="InputCidadeTitle">
                                    Cidade:</label>
                                <input type="text" className="form-control" id="inputAddressCidade" placeholder={addressrecovered.nomeCidade}
                                    aria-label="Disabled input example" disabled />
                            </div>

                            <div className="col-12 col-md-12 col-lg-5 custom-inputAccount">
                                <label for="inputAddressUF" id="InputUFTitle">
                                    UF:</label>
                                <input type="text" className="form-control" id="inputAddressUF" placeholder={addressrecovered.estado}
                                    aria-label="Disabled input example" disabled />
                            </div>


                            <div className="col-12 col-md-12 col-lg-5 custom-inputAccount responsive-inputA">
                                <label for="inputAddressCEP" id="InputCEPTitle">
                                    CEP:</label>
                                <input type="text" className="form-control" id="inputAddressCEP" placeholder={addressrecovered.cep}
                                    aria-label="Disabled input example" disabled />
                            </div>

                            <div className="col-12 col-md-12 col-lg-5 custom-inputAccount">
                                <label for="inputAddressComplemento" id="InputComplementoTitle">
                                    Complemento:</label>
                                <input type="text" className="form-control" id="inputAddressComplemento" placeholder={addressrecovered.complemento}
                                    aria-label="Disabled input example" disabled />
                            </div>

                            <div className="col-12 col-md-12 col-lg-5 custom-inputAccount responsive-inputA">
                                <label for="inputAddressPontodeReferencia" id="InputPontodeReferenciaTitle">
                                    Ponto de Referência:</label>
                                <input type="text" className="form-control" id="inputAddressPontodeReferencia"
                                    placeholder={addressrecovered.pontoReferencia} aria-label="Disabled input example" disabled />
                            </div>
                        </div>
                </div> */}

        {/* <!-- Modal Cadastro botão --> */}
      </div>

      <div className="row rowCentralized justify-content-center">
        <button
          type="button"
          className="btn edit col-md-6 col-8"
          data-bs-toggle="modal"
          data-bs-target="#modalEditarDados"
        >
          Editar Dados Cadastrais
        </button>
      </div>
      {/* <!-- Modal Cadastro botão --> */}

      <div
        className="modal fade"
        id="modalEditarDados"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header myprofileModal">
              <div className="modalcontentTitle" id="exampleModalLabel">
                Editar Dados
              </div>
              <button
                type="button"
                className="btn modalclose fechar4"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                X
              </button>
            </div>
            <div className="modal-body">
              <div className="container row rowCentralized">
                <div className="col-md-12 col-12 col-xl-5">
                  <div className="cardContentTitleDC">
                    <img className="emotes" src={cadastro} />
                    Dados Cadastrais
                  </div>
                  <div className="containerAccount container ">
                    <div className="cardContentAccount row rowCentralized">
                      <div className="col-12">
                        <label for="inputAddressNome" id="inputNome">
                          Nome:
                        </label>
                        <input
                          type="text"
                          className="form-control "
                          id="inputAddressNome"
                          placeholder="Osvaldo Silva"
                        />
                      </div>

                      <div className="col-12 col-md-12 col-xl-12">
                        <label for="inputAddressEmail" id="inputEmail">
                          E-mail:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddressEmail"
                          placeholder="osvaldoSilva@gmail.com"
                          aria-label="Disabled input example"
                          disabled
                        />
                      </div>

                      <div className="col-12 col-md-12 col-xl-5">
                        <label for="inputAddressSexo" id="inputSexo">
                          CPF:
                        </label>
                        <input
                          type="text"
                          className="form-control col-12"
                          id="inputAddressSexo"
                          placeholder="000.000.000-00"
                          aria-label="Disabled input example"
                          disabled
                        />
                      </div>

                      <div className="col-12 col-md-12 col-xl-5 responsive-inputA">
                        <label
                          for="inputAddressNascimento"
                          id="inputNascimento"
                        >
                          Nascimento:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddressNascimento"
                          placeholder="01/01/2021"
                          aria-label="Disabled input example"
                          disabled
                        />
                      </div>

                      <div className="col-12 col-md-12 col-xl-5 ">
                        <label for="inputAddressTelefone" id="inputTelefone">
                          Telefone:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddressTelefone"
                          placeholder=""
                        />
                      </div>

                      <div className="col-12 col-md-12 col-xl-5 responsive-inputA">
                        <label for="inputAddress" id="inputCelular">
                          {" "}
                          Celular:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputCelular"
                          placeholder="(11) 99999-9999 "
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-12 col-xl-5">
                  <div className="cardContentTitleDC">
                    <img className="emotes" src={localizacao} />
                    Endereço Principal
                  </div>

                  <div className="cardContentAccount rowCentralized row modalEndereco">
                    <div className="col-12 col-md-12 col-xl-9">
                      <label for="inputAddress" id="inputEndereco">
                        Endereço:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputEndereco"
                        placeholder="teste"
                      />
                    </div>

                    <div className="col-12 col-md-4 col-xl-2">
                      <label for="inputAddress" id="inputNumero">
                        Nº:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputNumero"
                        placeholder="3097"
                      />
                    </div>

                    <div className="col-12 col-md-7 col-xl-5">
                      <label for="inputAddress" id="InputBairroTitle">
                        Bairro:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddressBairro"
                        placeholder="Vila Butantã"
                      />
                    </div>

                    <div className="col-12 col-md-12 col-xl-5">
                      <label for="inputAddress" id="InputCidadeTitle">
                        Cidade:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddressCidade"
                        placeholder="São Paulo"
                      />
                    </div>

                    <div className="col-12 col-md-12 col-xl-5">
                      <label for="inputAddress" id="InputUFTitle">
                        UF:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddressUF"
                        placeholder="SP"
                      />
                    </div>

                    <div className="col-12 col-md-12 col-xl-5">
                      <label for="inputAddress" id="InputCEPTitle">
                        CEP:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddressCEP"
                        placeholder="05212040"
                      />
                    </div>

                    <div className="col-12 col-md-12 col-xl-5">
                      <label for="inputAddress" id="InputComplementoTitle">
                        Complemento:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddressComplemento"
                        placeholder=" "
                      />
                    </div>

                    <div className="col-12 col-md-12 col-xl-5">
                      <label
                        for="inputAddress"
                        id="InputPontodeReferenciaTitle"
                      >
                        Ponto de Referência:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddressPontodeReferencia"
                        placeholder=" Em frente a USP "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Outros Endereços --> */}
      <div className="row rowCentralized justify-content-center">
        <div className="cardContentAccount col-md-11 col-11" id="cardenderecos">
          <div className="row titleContainer rowCentralized">
            <div className="col-md-5 col-8 titleContainersecondary">
              Outros Endereços
            </div>

            {/* {/<div className="textoapoio col-md-3 col-5" id="AdicionarEnde">Adicione novos endereços</div>/} */}
          </div>
          <br />
          <div className="row rowCentralized enderecoCartao">
            <div className="col-11 col-md-12 col-lg-12">
              <div className="d-flex title-button">
                <div className="col-5 col-md-7 col-lg-8" id="listaEnde">
                  {" "}
                  Endereços Adicionais:
                </div>
                <br />
                <br />

                <button
                  type="button"
                  className="btn CadastroButton"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <strong>+</strong> Cadastrar novo endereço
                </button>
              </div>

              {listAddress()}
            </div>
          </div>

          {/* <!-- Modal --> */}
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

                    {renderEstado()}

                    {/* <div className="col-3">
                      <label for="inputAddressUF" id="InputUFTitle">
                        UF:
                      </label>

                        

                      <input
                        type="text"
                        className="form-control"
                        id="inputAddressUF"
                        placeholder="SP"
                        value={address.estado}
                        onChange={(event) => {
                          setAddress({
                            ...address,
                            estado: event.target.value,
                          });
                        }}
                      />
                      <Form.Select
                        onChange={(event) => {
                          console.log(event);
                          let stateSelected =
                            event.target.options.selectedIndex;
                          let textState =
                            event.target.options[stateSelected].innerText;
                          setAddress({
                            ...address,
                            states: event.target.value,
                          });
                        }}
                      >
                        <option>Selecione um estado </option>
                        {states.map((item) => {
                          return (
                            <option key={item.codEstado} value={item.codEstado}>
                              {item.descricaoEstado}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </div> */}

                    <div className="col-4">
                      <label for="inputAddressCEP" id="InputCEPTitle">
                        CEP:
                      </label>

                      <MaskedInput
                        type="text"
                        id="inputAddressCEP"
                        value={address.cep}
                        maxLength={18}
                        onChange={handleChange}
                        mask="99999-999"
                        name="cep"
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
                {successRegister ? <h3>Usuário cadastrado com sucesso</h3> : ""}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn cancelar"
                    data-bs-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="btn salvar"
                    data-bs-dismiss="modal"
                    onClick={register}
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--  Final Outros Endereços --> */}
      <div className="row row rowCentralized justify-content-center">
        <div
          className="cardContentAccount col-md-11 col-11 "
          id="cardenderecos"
        >
          <div className="row  titleContainer rowCentralized">
            <div className=" col-md-5 col-8 titleContainersecondary">
              Meus Cartões
            </div>
          </div>
          <br />

          {listCards()}

          {/* <div className="row rowCentralized enderecoCartao">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="row rowCentralized enderecoCartao">
                <div className="col-12 col-lg-8">
                  <div className="disabledBox">
                    <a className="imageDisableBox col-2 col-md-1">
                      <img src={mastercard} alt="" />
                    </a>
                    <div className="col-sm-9 col-7">
                      <input
                        type="text"
                        className="form-control "
                        placeholder="4658 ** ** 9867"
                        aria-label="Disabled input example"
                        disabled
                      />
                    </div>

                    <div className="dataButtons col-2">
                      <div className="row">
                        <a className="imageDisableBox col-6">
                          <img src={lixeira} alt="" />
                        </a>
                        <a
                          type="button"
                          className="imageDisableBox col-6 "
                          data-bs-toggle="modal"
                          data-bs-target="#editarcartao"
                        >
                          <img src={lapis} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="disabledBox">
                    <a className="imageDisableBox col-1">
                      <img src={visa} alt="" />
                    </a>
                    <div className="col-sm-9 col-8">
                      <input
                        type="text"
                        className="form-control "
                        placeholder="4658 ** ** 9867"
                        aria-label="Disabled input example"
                        disabled
                      />
                    </div>

                    <div className="dataButtons col-2">
                      <div className="row">
                        <a className="imageDisableBox col-6">
                          <img src={lixeira} alt="" />
                        </a>
                        <a
                          type="button"
                          className="imageDisableBox col-6 "
                          data-bs-toggle="modal"
                          data-bs-target="#editarcartao"
                        >
                          <img src={lapis} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}

          <div className="col-8 col-md-10 col-lg-4">
            <div className="row disableBoxRow">
              <button
                type="button"
                className="btn CadastroButton"
                data-bs-toggle="modal"
                data-bs-target="#novocartao"
              >
                <strong>+</strong> Cadastrar novo cartão
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Modal Cartão--> */}

      <div
        className="modal fade"
        id="novocartao"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="pag">
              <div className="row modalHeaderRow rowCentralized">
                <div className=" imagens col-4">
                  <img src={mastercard} />
                  <img src={AmericanMini} />
                  <img src={visa} />
                </div>
                <div className="col-7 ">Editar Cartão</div>
                <div className="col-1">
                  <button
                    type="button"
                    className="btn-close fechar4 "
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
              <hr />
              <div className="row justify-content-center">
                <div className="cartFakeAccount col-10 col-md-8">
                  <div className="row">
                    <div className="col-3">
                      <img src={ChipCartaoCred} alt="" />
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
              <div className="form">
                <div className="row">
                  <div className=" col-8 col-md-8">
                    <label for="">
                      <strong>Número do cartão</strong>{" "}
                    </label>
                    <input
                      className="form-control form-control-lg"
                      type=""
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
                    <label for="">
                      <strong>Validade</strong>{" "}
                    </label>
                    <input
                      className="form-control form-control-lg"
                      type=""
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
                    <label for="">
                      <strong>Nome do Títular</strong>{" "}
                    </label>
                    <input
                      className="form-control form-control-lg"
                      type=""
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

                {/* <div className="row">
                                                    <div className="col-12">
                                                        <label for=""><strong>Bandeira</strong> </label> */}
                {/* <input className="form-control form-control-lg" type="hidden"
                                                            placeholder="Osvaldo Silva" aria-label=".form-control-lg example"  value={card.bandeira} onChange={(event) => {setCard({...card, registerBandeira})}} />
                                                   

                                                
                                                    
                                                        
                                                        <input className="form-control form-control-lg" type="hidden"
                                                            placeholder="Osvaldo Silva" aria-label=".form-control-lg example"  value={card.cliente} onChange={(event) => {setCard({...card, registerCliente})}} /> */}

                <div className="row">
                  <div className="addPagamento col-12">
                    <button onClick={registerCard}>
                      <strong> Salvar </strong>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="editarcartao"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="pag">
              <div className="row modalHeaderRow rowCentralized">
                <div className=" imagens col-3">
                  <img src={mastercard} />
                </div>
                <div className="col-7 ">Editar Cartão</div>
                <div className="col-1">
                  <button
                    type="button"
                    className="btn-close fechar4"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
              <hr />
              <div className="row justify-content-center">
                <div className="cartFakeAccount col-10 col-md-8">
                  <div className="row">
                    <div className="col-3">
                      <img src={ChipCartaoCred} alt="" />
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
              <div className="form">
                <div className="row">
                  <div className=" col-8 col-md-8">
                    <label for="">
                      <strong>Número do cartão</strong>{" "}
                    </label>
                    <input
                      className="form-control form-control-lg"
                      type=""
                      placeholder="5858 6858 6989 5875"
                      aria-label=".form-control-lg example"
                    />
                    <br />
                  </div>

                  <div className=" col-4 col-md-4">
                    <label for="">
                      <strong>Validade</strong>{" "}
                    </label>
                    <input
                      className="form-control form-control-lg"
                      type=""
                      placeholder="05/25"
                      aria-label=".form-control-lg example"
                    />
                    <br />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <label for="">
                      <strong>Nome do Títular</strong>{" "}
                    </label>
                    <input
                      className="form-control form-control-lg"
                      type=""
                      placeholder="Osvaldo Silva"
                      aria-label=".form-control-lg example"
                    />
                    <br />
                  </div>
                </div>

                <div className="row">
                  <div className="addPagamento col-12">
                    <button>
                      <strong> Salvar </strong>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAccount;
