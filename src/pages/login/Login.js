import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import './Login.css'
import BannerFreight from '../../components/freightBanner/FreightBanner'
import Nav from '../../components/nav/Nav'
import babyLogin from './imgs/baby-login.png'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import SupportButton from '../../components/supportButton/SupportButton'
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";
import { history } from '../../History'


const LOGIN_URL = '/auth';


const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setUser] = useState('');
    const [senha, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [token] = useState('');
    


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, senha])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, senha}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: false
                }
            );
            console.log(JSON.stringify(response?.data.token));
            console.log(JSON.stringify(response?.data.codCliente));
            console.log(JSON.stringify(response?.data.nome));
            console.log(JSON.stringify(response?.data.endereco));
            const accessToken = response?.data?.token;
            const usuarioId = response?.data?.codCliente;
            const usuarioNome = response?.data?.nome;



            const roles = response?.data?.roles;
            setAuth({ email, senha, roles, token });
            console.log(email , senha , roles ,token);
            setUser('');
            setPwd('');


              console.log(response.data)

            setSuccess(true);
            localStorage.setItem('app-token',  accessToken,usuarioId,usuarioNome)
            localStorage.setItem('User',  usuarioId)
            localStorage.setItem('NomeCliente',  usuarioNome)
                 history.push('/')

            // const {dados} = setAuth({ email, senha, roles, accessToken });
            // console.log(dados);
            // if(dados){
            //     localStorage.setItem('app-token',dados)
            //     history.push('/')
            // } 
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Senha ou Email Incorretos');
            } else if (err.response?.status === 401) {
                setErrMsg('Acesso não autorizado');
            } else {
                setErrMsg('Login Invalido');
            }
            errRef.current.focus();
        }


    }
    // console.log(email , senha );



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
                                <form onSubmit={handleSubmit}>
                                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                                    <div className="row row-login justify-content-center">
                                        <div className="col-md-12">
                                            <div className="row justify-content-center ">
                                                <div className="col-2">
                                                    <div className="col-12">
                                                 
                                                        <img src={babyLogin} alt="" className='user-login' />

                                                    </div>

                                                </div>
                                            </div>
                                            <h1 className="text-center text-title">Já é nosso cliente?</h1>


                                            <div className="card card-input-login backgroundH mb-4">
                                    
                                                    <div className="form-group font-weight-bold mb-2 mt-3 custom-input col-12 col-md-12 col-lg-11">
                                                        <label className="mb-2" htmlFor="usuario">E-mail:</label>
                                                        <input className="form-control" id="email" type="text" placeholder="Insira o e-mail" ref={userRef}
                                                            autoComplete="off"
                                                            onChange={(e) => setUser(e.target.value)}
                                                            value={email}
                                                            required
                                                        />
                                                    </div>

                                                    <div className="form-group font-weight-bold mb-2 mt-3 custom-input col-12 col-md-12 col-lg-11">
                                                        <label className="mb-2" htmlFor="senha">Senha:</label>
                                                        <input className="form-control" id="senha" type="password" placeholder="Insira a senha" onChange={(e) => setPwd(e.target.value)}
                                                            value={senha}
                                                            required
                                                        />
                                                    </div>

                                                    <div className="d-flex justify-content-center">
                                                        <Link to="/forgotPassword">  <p className="text-esqueci-senha"><a href="../esqueci-minha-senha/index.html">Esqueceu sua senha?</a></p></Link>
                                                    </div>
                                                    <button type="submit"> Envio</button>
                                                    <button type="submit"
                      
                        className="btn supportButton"
                    
                      >
                            Login
                            </button>
                                               
                                            </div>

                                        </div>
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
    )
}

export default Login