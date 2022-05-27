import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Register.css";
import Freight from "../../components/freightBanner/FreightBanner";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import babyCadastro from "./imgs/baby-cadastro.png";
import InputMask from 'react-input-mask';
import SupportButton from "../../components/supportButton/SupportButton";
import axios from "axios";

const USER_REGEX = /[A-Z][a-z]* [A-Z][a-z]*/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,15}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const CPF_REGEX = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
const DATA_REGEX = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
const descricao_telefone = "Celular";



function Register() {
  const userRef = useRef();
  const errRef = useRef();
  const REGISTER_URL = "/cliente/cadastrar";

  const [nomeCliente, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [cpf, setCpf] = useState("");
  const [validCpf, setValidCpf] = useState(false);
  const [cpfFocus, setCpfFocus] = useState(false);

  const [dataNasc, setNasc] = useState("");
  const [validNasc, setValidNasc] = useState(false);
  const [nascFocus, setNascFocus] = useState(false);

  const [senha, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [matchEmail, setMatchEmail] = useState("");
  const [validMatchEmail, setValidMatchEmail] = useState(false);
  const [emailMatchFocus, setEmailMatchFocus] = useState(false);

  const [ddd, setDdd] = useState("");
  const [validDdd, setValidDdd] = useState(false);
  const [dddFocus, setDddFocus] = useState(false);

  const [numeroTelefone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(nomeCliente));
  }, [nomeCliente]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(senha));
    setValidMatch(senha === matchPwd);
  }, [senha, matchPwd]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
    setValidMatchEmail(email === matchEmail);
  }, [email, matchEmail]);

  useEffect(() => {
    setValidEmail(DATA_REGEX.test(dataNasc));
  }, [dataNasc]);

  useEffect(() => {
      setValidCpf(CPF_REGEX.test(cpf));
  }, [cpf])

  useEffect(() => {
    setErrMsg("");
  }, [nomeCliente, senha, matchPwd]);

  console.log(nomeCliente, senha, cpf, dataNasc, numeroTelefone, ddd,descricao_telefone, email);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(nomeCliente);
    const v2 = PWD_REGEX.test(senha);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/cliente/cadastrar",
        JSON.stringify({
          nomeCliente,
          senha,
          cpf,
          dataNasc,  email,
         ddd, 
         numeroTelefone,
        
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Erro ao Cadastrar");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <div className="pageRegister">
        <Freight />
        <Header></Header>
        <Nav />
        <div className="container-fluid mt-5">
          <div className="row justify-content-center rowCentralized">
            <div className="card card-form border-card col-11 col-md-10 col-lg-6">
              <div className="row justify-content-center rowCentralized">
                <div className="col-12 col-md-12 col-lg-11">
                  <div className="row justify-content-center ">
                    <div className="col-2 col-mobile">
                      <div className="col-12">
                        <img
                          src={babyCadastro}
                          alt=""
                          className="user-cadastro"
                        />
                      </div>
                    </div>
                  </div>
                  <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                  <div className="row justify-content-center">
                    <h1 className="text-center text-title">Cadastre-se</h1>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="card card-input mb-4">
                      <div className="form-group col-11 font-weight-bold mb-2 mt-3 custom-input">
                        <label className="mb-2" htmlFor="usuario">
                          Nome completo:
                        </label>
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={validName ? "valid" : "hide"}
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className={
                            validName || !nomeCliente ? "hide" : "invalid"
                          }
                        />
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Insira o nome"
                          id="usuario"
                          ref={userRef}
                          autoComplete="off"
                          onChange={(e) => setUser(e.target.value)}
                          value={nomeCliente}
                          required
                          aria-invalid={validName ? "false" : "true"}
                          aria-describedby="uidnote"
                          onFocus={() => setUserFocus(true)}
                          onBlur={() => setUserFocus(false)}
                        />
                        <p
                          id="uidnote"
                          className={
                            userFocus && nomeCliente && !validName
                              ? "instructions"
                              : "offscreen"
                          }
                        >
                          <FontAwesomeIcon icon={faInfoCircle} />
                          Digite o nome Completo.
                          <br />
                          números e caracteres especiais não são permitidos.
                        </p>
                      </div>
                      <div className="col-11">
                        <div className="row custom-input ">
                          <div className="form-group font-weight-bold col-12 col-md-5 col-lg-5">
                            <label className="mb-2 mt-2" htmlFor="cpf">
                              CPF:
                              <FontAwesomeIcon
                                icon={faCheck}
                                className={validCpf ? "valid" : "hide"}
                              />
                              <FontAwesomeIcon
                                icon={faTimes}
                                className={
                                  validCpf || !cpf ? "hide" : "invalid"
                                }
                              />
                            </label>

                            <input
                              type="text"
                              className="form-control"
                              placeholder="Insira o CPF"
                              id="cpf"
                              value={cpf}
                              onChange={(e) => setCpf(e.target.value)}
                              aria-invalid={validCpf ? "false" : "true"}
                              aria-describedby="pwdnote"
                              onFocus={() => setCpfFocus(true)}
                              onBlur={() => setCpfFocus(false)}
                            />
                            <p
                              id="pwdnote"
                              className={
                                cpfFocus && !validCpf
                                  ? "instructions"
                                  : "offscreen"
                              }
                            >
                              <FontAwesomeIcon icon={faInfoCircle} />
                              Digite os 11 digitos do CPF
                            </p>
                          </div>
                          <div className="form-group font-weight-bold col-12 col-md-5 col-lg-5 input-media">
                            <label className="mb-2 mt-2" htmlFor="nascimento">
                              Data Nascimento:
                              <FontAwesomeIcon
                                icon={faCheck}
                                className={validNasc ? "valid" : "hide"}
                              />
                              <FontAwesomeIcon
                                icon={faTimes}
                                className={
                                  validNasc || !dataNasc ? "hide" : "invalid"
                                }
                              />
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              placeholder="Insira a data de nascimento"
                              id="nascimento"
                              value={dataNasc}
                              onChange={(e) => setNasc(e.target.value)}
                              aria-invalid={validNasc ? "false" : "true"}
                              aria-describedby="pwdnote"
                              onFocus={() => setNascFocus(true)}
                              onBlur={() => setNascFocus(false)}
                            />
                          </div>
                          <div className="form-group font-weight-bold col-12 col-md-3 col-lg-3">
                            <label className="mb-2 mt-2" htmlFor="ddd">
                              DDD:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="DDD"
                              id="ddd"
                              value={ddd}
                              onChange={(e) => setDdd(e.target.value)}
                              aria-invalid={validDdd ? "false" : "true"}
                              aria-describedby="pwdnote"
                              onFocus={() => setNascFocus(true)}
                              onBlur={() => setNascFocus(false)}
                            />
                          </div>
                          <div className="form-group font-weight-bold col-12 col-md-5 col-lg-5">
                            <label className="mb-2 mt-2" htmlFor="celular">
                              Celular:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Insira o celular"
                              id="celular"
                              value={numeroTelefone}
                              onChange={(e) => setPhone(e.target.value)}
                              aria-invalid={validPhone ? "false" : "true"}
                              aria-describedby="pwdnote"
                              onFocus={() => setPhoneFocus(true)}
                              onBlur={() => setPhoneFocus(false)}
                            />
                          </div>
                          <input type="hidden" id="tipotelefone" name="custId" value={descricao_telefone}/>
                        </div>
                      </div>
                      <div className="form-group font-weight-bold mb-2 mt-3 col-11 custom-input">
                        <label className="mb-2" htmlFor="email">
                          E-mail:
                          <FontAwesomeIcon
                            icon={faCheck}
                            className={validEmail ? "valid" : "hide"}
                          />
                          <FontAwesomeIcon
                            icon={faTimes}
                            className={
                              validEmail || !email ? "hide" : "invalid"
                            }
                          />
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Insira o e-mail"
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          aria-invalid={validEmail ? "false" : "true"}
                          aria-describedby="pwdnote"
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                        />
                        <p
                          id="pwdnote"
                          className={
                            emailFocus && !validEmail
                              ? "instructions"
                              : "offscreen"
                          }
                        >
                          <FontAwesomeIcon icon={faInfoCircle} />
                          Digite o Email
                        </p>
                      </div>
                      <div className="form-group font-weight-bold mb-2 mt-3 col-11 custom-input">
                        <label className="mb-2" htmlFor="emailConfirma">
                          Confirme o e-mail:
                          <FontAwesomeIcon
                            icon={faCheck}
                            className={validEmail ? "valid" : "hide"}
                          />
                          <FontAwesomeIcon
                            icon={faTimes}
                            className={
                              validEmail || !matchEmail ? "hide" : "invalid"
                            }
                          />
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Confirme o e-mail"
                          id="emailConfirma"
                          onChange={(e) => setMatchEmail(e.target.value)}
                          value={matchEmail}
                          aria-invalid={validMatchEmail ? "false" : "true"}
                          aria-describedby="pwdnote"
                          onFocus={() => setEmailMatchFocus(true)}
                          onBlur={() => setEmailMatchFocus(false)}
                        />
                        <p
                          id="pwdnote"
                          className={
                            emailMatchFocus && !validEmail
                              ? "instructions"
                              : "offscreen"
                          }
                        >
                          <FontAwesomeIcon icon={faInfoCircle} />
                          Confirme o email
                        </p>
                      </div>
                      <div className="col-11">
                        <div className="row custom-input">
                          <div className="form-group font-weight-bold col-12 col-md-5 col-lg-5">
                            <label className="mb-2 mt-2" htmlFor="senha">
                              Senha:
                              <FontAwesomeIcon
                                icon={faCheck}
                                className={validPwd ? "valid" : "hide"}
                              />
                              <FontAwesomeIcon
                                icon={faTimes}
                                className={
                                  validPwd || !senha ? "hide" : "invalid"
                                }
                              />
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Insira a senha"
                              id="senha"
                              onChange={(e) => setPwd(e.target.value)}
                              value={senha}
                              required
                              aria-invalid={validPwd ? "false" : "true"}
                              aria-describedby="pwdnote"
                              onFocus={() => setPwdFocus(true)}
                              onBlur={() => setPwdFocus(false)}
                            />
                            <p
                              id="pwdnote"
                              className={
                                pwdFocus && !validPwd
                                  ? "instructions"
                                  : "offscreen"
                              }
                            >
                              <FontAwesomeIcon icon={faInfoCircle} />
                              No minimo 8 caracteres.
                              <br />
                              A senha deve conter ao menos uma letra
                              maiuscula,uma minuscula, um número e um caracter
                              especial.
                              <br />
                              São permitidos estes caracteres especiais{" "}
                              <span aria-label="exclamation mark">!</span>{" "}
                              <span aria-label="at symbol">@</span>{" "}
                              <span aria-label="hashtag">#</span>{" "}
                              <span aria-label="dollar sign">$</span>{" "}
                              <span aria-label="percent">%</span>
                            </p>
                          </div>

                          <div className="form-group font-weight-bold col-12 col-md-5 col-lg-5 input-media">
                            <label
                              className="mb-2 mt-2"
                              htmlFor="senhaConfirma"
                            >
                              Confirme a senha:
                              <FontAwesomeIcon
                                icon={faCheck}
                                className={
                                  validMatch && matchPwd ? "valid" : "hide"
                                }
                              />
                              <FontAwesomeIcon
                                icon={faTimes}
                                className={
                                  validMatch || !matchPwd ? "hide" : "invalid"
                                }
                              />
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Confirme a senha"
                              id="senhaConfirma"
                              onChange={(e) => setMatchPwd(e.target.value)}
                              value={matchPwd}
                              required
                              aria-invalid={validMatch ? "false" : "true"}
                              aria-describedby="confirmnote"
                              onFocus={() => setMatchFocus(true)}
                              onBlur={() => setMatchFocus(false)}
                            />
                            <p
                              id="confirmnote"
                              className={
                                matchFocus && !validMatch
                                  ? "instructions"
                                  : "offscreen"
                              }
                            >
                              <FontAwesomeIcon icon={faInfoCircle} />
                              Senhas não coincidem.
                            </p>
                          </div>
                        </div>
                      </div>{" "}
                       <button
                      
                        className="btn supportButton"
                        disabled={
                          !validName || !validPwd || !validMatch ? true : false
                        }
                      >
                   Cadastrar
                      </button>
                    </div>
                  </form>
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
export default Register;
