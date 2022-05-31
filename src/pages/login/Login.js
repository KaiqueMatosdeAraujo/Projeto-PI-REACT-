import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import BannerFreight from "../../components/freightBanner/FreightBanner";
import Nav from "../../components/nav/Nav";
import babyLogin from "./imgs/baby-login.png";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SupportButton from "../../components/supportButton/SupportButton";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "axios";
import { history } from "../../History";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notifyRegister = () => toast.error("Senha ou Email incorretos");

const LOGIN_URL = "http://localhost:8080/auth";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setUser] = useState("");
  const [senha, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  
  }, [email, senha]);

  const handleSubmit = async () => {
    try {
        await axios.post(LOGIN_URL, { email, senha }).then((resp) => {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${resp.data.token}`;

        const usuarioId = resp?.data?.codCliente;
        const usuarioNome = resp?.data?.nome;
        const usuarioEmail = resp?.data?.email;
        const token = resp?.data?.token;

        localStorage.setItem("app-token", token);
        localStorage.setItem("UserId", usuarioId);
        localStorage.setItem("UserName", usuarioNome);
        localStorage.setItem("UserEmail", usuarioEmail);
        localStorage.setItem("UserPwd", senha);
        history.push("/");
      });
    } catch (err) {
      if (!err?.resp) {
        notifyRegister()  
      } else if (err?.response.status === 400) {
        console.log("Erro ao Cadastrar");
        setErrMsg("Senha ou Email Incorretos");
      } 
      errRef.current.focus();
    }
  };

  return (
    <>
      <div className="pageLogin">
        <BannerFreight />
        <Header />
        <Nav />
        {/*  INÍCIO DO CARD LOGIN  */}
        <div className="container-fluid mt-5">
          <div className="row justify-content-center rowCentralized">
            <div className="card card-form border-card col-11 col-md-10 col-lg-6">
              <div className="row justify-content-center rowCentralized">
                <div className="col-12 col-md-12 col-lg-10">
                  <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>

                  <div className="row row-login justify-content-center">
                    <div className="col-md-12">
                      <div className="row justify-content-center ">
                        <div className="col-2">
                          <div className="col-12">
                            <img
                              src={babyLogin}
                              alt=""
                              className="user-login"
                            />
                          </div>
                        </div>
                      </div>
                      <h1 className="text-center text-title">
                        Já é nosso cliente?
                      </h1>

                      <div className="card card-input-login backgroundH mb-4">
                        <div className="form-group font-weight-bold mb-2 mt-3 custom-input col-12 col-md-12 col-lg-11">
                          <label className="mb-2" htmlFor="usuario">
                            E-mail:
                          </label>
                          <input
                            className="form-control"
                            id="email"
                            type="text"
                            placeholder="Insira o e-mail"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={email}
                            required
                          />
                        </div>

                        <div className="form-group font-weight-bold mb-2 mt-3 custom-input col-12 col-md-12 col-lg-11">
                          <label className="mb-2" htmlFor="senha">
                            Senha:
                          </label>
                          <input
                            className="form-control"
                            id="senha"
                            type="password"
                            placeholder="Insira a senha"
                            onChange={(e) => setPwd(e.target.value)}
                            value={senha}
                            required
                          />
                        </div>

                        <div className="d-flex justify-content-center">
                          <Link to="/forgotPassword">
                            {" "}
                            <p className="text-esqueci-senha">
                              <a href="../esqueci-minha-senha/index.html">
                                Esqueceu sua senha?
                              </a>
                            </p>
                          </Link>
                        </div>
                        <button
                          className="btn supportButton"
                          onClick={handleSubmit}
                        >
                          Login
                        </button>
                        <ToastContainer />
                      </div>
                    </div>
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
};

export default Login;
