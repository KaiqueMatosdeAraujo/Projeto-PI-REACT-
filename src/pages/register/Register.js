import { Link } from 'react-router-dom'
import './Register.css'
import Freight from '../../components/freightBanner/FreightBanner'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import babyCadastro from './imgs/baby-cadastro.png'
import SupportButton from '../../components/supportButton/SupportButton'

function Register() {
    return (
        <>
        <div className="pageRegister">
        <Freight/>
            <Header></Header>
            <Nav/>
            <div className="container-fluid mt-5">
                <div className="row justify-content-center rowCentralized">
                    <div className="card card-form border-card col-11 col-md-10 col-lg-6">
                        <div className="row justify-content-center rowCentralized">
                            <div className="col-12 col-md-12 col-lg-11">
                                <div className="row justify-content-center ">
                                    <div className="col-2 col-mobile">
                                        <div className="col-12">
                                            <img src={babyCadastro} alt="" className='user-cadastro' />
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <h1 className="text-center text-title">Cadastre-se</h1>
                                </div>
                                <div className="card card-input mb-4">
                                    <div className="form-group col-11 font-weight-bold mb-2 mt-3 custom-input">
                                        <label className="mb-2" for="usuario">Nome completo:</label>
                                        <input className="form-control" type="text" placeholder="Insira o nome" />
                                    </div>
                                    <div className="col-11">
                                        <div className="row custom-input ">
                                            <div className="form-group font-weight-bold col-12 col-md-5 col-lg-5">
                                                <label className="mb-2 mt-2" for="usuario">CPF:</label>
                                                <input type="text" className="form-control" placeholder="Insira o CPF" />
                                            </div>
                                            <div className="form-group font-weight-bold col-12 col-md-5 col-lg-5 input-media">
                                                <label className="mb-2 mt-2" for="usuario">Data Nascimento:</label>
                                                <input type="text" className="form-control " placeholder="Insira a data de nascimento" />
                                            </div>
                                            <div className="form-group font-weight-bold col-12 col-md-5 col-lg-5">
                                                <label className="mb-2 mt-2" for="usuario">Telefone:</label>
                                                <input type="tel" className="form-control" placeholder="Insira o telefone" />
                                            </div>
                                            <div className="form-group font-weight-bold col-12 col-md-5 col-lg-5">
                                                <label className="mb-2 mt-2" for="usuario">Celular:</label>
                                                <input type="cel" className="form-control" placeholder="Insira o celular" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group font-weight-bold mb-2 mt-3 col-11 custom-input">
                                        <label className="mb-2" for="usuario">E-mail:</label>
                                        <input className="form-control" type="text" placeholder="Insira o e-mail" />
                                    </div>
                                    <div className="form-group font-weight-bold mb-2 mt-3 col-11 custom-input">
                                        <label className="mb-2" for="usuario">Confirme o e-mail:</label>
                                        <input className="form-control" type="text" placeholder="Confirme o e-mail" />
                                    </div>
                                    <div className="col-11">
                                        <div className="row custom-input">
                                       
                                            <div className="form-group font-weight-bold col-12 col-md-5 col-lg-5">
                                                <label className="mb-2 mt-2" for="usuario">Senha:</label>
                                                <input type="password" className="form-control" placeholder="Insira a senha" />
                                            </div>
                                          
                                            <div className="form-group font-weight-bold col-12 col-md-5 col-lg-5 input-media">
                                                <label className="mb-2 mt-2" for="usuario">Confirme a senha:</label>
                                                <input type="password" className="form-control" placeholder="Confirme a senha" />
                                            </div>
                                           
                                        </div>
                                    </div>

                                    <SupportButton 
                                        class="d-flex justify-content-center"
                                        link="/login"
                                        title="Cadastrar"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </div>
        </>
    )
}
export default Register