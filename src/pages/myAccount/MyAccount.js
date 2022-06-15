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
import Cartao from './img-myAccount/cartao-multibanco.png'
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

  //Cartão
  const [numeroCartao, setnumeroCartao] = useState('')
  const [validade, setValidade] = useState('')
  const [nomeTitular, setNomeTitular] = useState('')
  const bandeira = 1

  const cliente = parseInt(localStorage.getItem("UserId"));
  const endereco = props.endereco || {};

  function handleChange(event) {
    setAddress({ ...address, cep: event.target.value });
  }

  useEffect(() => {
    getCustomer();
    getCards();
    getAllAddress();
    getEstados()
    // getSelectEstado();
  }, [successRegister, idcliente]);

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
      .post(`http://localhost:8080/cartao/${idcliente}/cadastrar`, JSON.stringify({

        numeroCartao,
        nomeTitular,
        validade,
        bandeira,
        cliente
      }), {
        headers: {
          "Content-Type": "application/json",
        },
      })
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
        setSuccessRegister(false);
        console.log(allAdress);
      });
  };

  const register = () => {
    axios
      .post(`http://localhost:8080/endereco/${idcliente}/cadastrar`, address)
      .then((response) => {
        setSuccessRegister(true);
      });
  };

  const [estados, setEstados] = useState([]);

  const getEstados = () => {
    axios.get(`http://localhost:8080/endereco/uf`).then((response) => {
      setEstados(response.data);
    });
  };

  const listCards = () => {
    return cards.map((item) => {
      const numeroCartao = item.numeroCartao;
      const maskCartao = numeroCartao.slice(numeroCartao.length - 4);
      return (
        <>
          <div className="row rowCentralized enderecoCartao">
            <div className="col-12 col-md-8 col-lg-8">
              <div className="row rowCentralized enderecoCartao">
                <div className="col-12 col-lg-8">
                  <div className="disabledBox">
                    <a className="imageDisableBox col-2 col-md-1">
                      <img src={Cartao} alt="" />
                    </a>
                    <div className="col-sm-9 col-7">
                      {`** ** ** ${maskCartao}`}
                    </div>

                    <div className="dataButtons col-2">
                      <div className="row">
                        <a className="imageDisableBox col-6">
                          <img src={lixeira} alt="" />
                        </a>
                        <a
                          type="button"
                          className="imageDisableBox col-5 "
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
                <div className="col-md-12 col-12 col-xl-10">
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
                          placeholder={customer.nomeCliente}
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
                          placeholder={customer.email}
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
                          placeholder={customer.cpf}
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
                          placeholder={customer.dataNasc}
                          aria-label="Disabled input example"
                          disabled
                        />
                      </div>

                      <div className="col-12 col-md-12 col-xl-5 ">
                        <label for="inputAddressTelefone" id="inputTelefone">
                          DDD:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddressTelefone"
                          placeholder={customer.ddd}
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
                          placeholder={customer.numeroTelefone}
                        />
                      </div>
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

          <br />
          <div className="row rowCentralized enderecoCartao">
            <div className="col-11 col-md-12 col-lg-12">
              <div className="d-flex title-button">
                <div className="col-md-5 col-8 titleContainersecondary">
                  Outros Endereços
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
                        placeholder="Digite o logradouro"
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
                        placeholder="Número"
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
                        placeholder="Digite o bairro"
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
                        placeholder="Digite a cidade"
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

                      <MaskedInput
                        type="text"
                        id="inputAddressCEP"
                        value={address.cep}
                        maxLength={18}
                        onChange={handleChange}
                        mask="99999-999"
                        name="cep"
                        placeholder="Digite o CEP"
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
                        placeholder="Digite o complemento (Opcional)  "
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
                        placeholder="Digite o ponto de referência (Opcional) "
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
            <div className=" col-md-5 col-8 col-lg-9 titleContainersecondary">
              Meus Cartões
            </div>
            <div className="btnCard col-8 col-md-10 col-lg-3">

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
          <br />

          {listCards()}




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
                    <MaskedInput
                      className="form-control form-control-lg"
                      type="text"
                      id="inputNumberCard"
                      value={numeroCartao}

                      mask="9999.9999.9999.9999"

                      placeholder="Digite o numero do cartão"
                      onChange={(event) => {
                        setnumeroCartao(event.target.value)
                      }}
                    />
                    <br />
                  </div>

                  <div className=" col-4 col-md-4">
                    <label for="">
                      <strong>Validade</strong>{" "}
                    </label>
                    <MaskedInput
                      className="form-control form-control-lg"
                      type="text"
                      id="inputValidade"
                      aria-label=".form-control-lg example"
                      value={validade}

                      mask="99/99"

                      placeholder="00/00"
                      onChange={(event) => {
                        setValidade(event.target.value)
                      }}
                    />
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
                      placeholder="Digite o nome do titular do cartão"
                      aria-label=".form-control-lg example"
                      value={nomeTitular}
                      onChange={(event) => {
                        setNomeTitular(event.target.value)
                      }}
                    />
                    <br />
                  </div>
                </div>

                <div>
                  <input
                    type="hidden"
                    id="inputBandeira"
                    value={bandeira} />
                </div>

                <div>
                  <input
                    type="hidden"
                    id="inputCliente"
                    value={cliente} />
                </div>


                <div className="row">
                  <div className="addPagamento col-12">
                    <button onClick={registerCard}
                      data-bs-dismiss="modal"
                      aria-label="Close" >

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