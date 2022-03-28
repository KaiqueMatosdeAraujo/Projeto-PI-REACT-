import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import BannerFreight from '../../components/freightBanner/FreightBanner'
import Nav from '../../components/nav/Nav'
import babyLogin from './imgs/baby-login.png'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import SupportButton from '../../components/supportButton/SupportButton'


function Login() {



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
                                                <label className="mb-2" for="usuario">E-mail:</label>
                                                <input className="form-control" type="text" placeholder="Insira o e-mail" />
                                            </div>

                                            <div className="form-group font-weight-bold mb-2 mt-3 custom-input col-12 col-md-12 col-lg-11">
                                                <label className="mb-2" for="usuario">Senha:</label>
                                                <input className="form-control" type="password" placeholder="Insira a senha" />
                                            </div>

                                            <div className="d-flex justify-content-center">
                                            <Link to="/forgotPassword">  <p className="text-esqueci-senha"><a href="../esqueci-minha-senha/index.html">Esqueceu sua senha?</a></p></Link>
                                            </div>

                                            <SupportButton 
                                                class="d-flex justify-content-center"
                                                link="/"
                                                title="Login"
                                            />

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
    )
}

export default Login