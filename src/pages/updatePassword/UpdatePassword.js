import './UpdatePassword.css'
import { Link } from 'react-router-dom'
import BannerFreight from '../../components/freightBanner/FreightBanner'
import Nav from '../../components/nav/Nav'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import SupportButton from '../../components/supportButton/SupportButton'


function UpdatePassword() {
    return (
        <>
        <BannerFreight/>
            <Header></Header>
            <Nav/>
            <div class="container-fluid mt-5 mb-5">
                <div class="row justify-content-center rowCentralized">



                    <div class="card border-card col-11 col-md-10 col-lg-6 ">

                        <div class="row justify-content-center rowCentralized">
                            <div class="col-md-11">

                                <div className="row justify-content-center">
                                    <h1 class="text-center text-title mt-3">Atualizar Senha</h1>
                                </div>

                                    <div class="card card-input mb-4">
                                        <div class="form-group font-weight-bold mb-3 mt-3 col-12 col-md-12 col-lg-11 custom-input">
                                            <label class="mb-2" for="usuario">Nova Senha:</label>
                                            <input class="form-control" type="password" placeholder="Insira a nova senha" />
                                        </div>

                                        <div class="form-group font-weight-bold mb-3 mt-3 col-12 col-md-12 col-lg-11 custom-input">
                                            <label class="mb-2" for="usuario">Confirmar Senha:</label>
                                            <input class="form-control" type="password" placeholder="Confirme a nova senha" />
                                        </div>

                                        {/*<div class="d-flex justify-content-center">
                                            <Link to="/SuccessPassword"><button type="button" class="btn custom-button-update">Atualizar</button></Link>
                                        </div>

                                        <div class="d-flex justify-content-center mt-3">
                                            <p class="text-atualizar-senha"><Link to="/">Cancelar</Link></p>
                                        </div>*/}


                                        <div className="row div-buttons">
                                            <SupportButton 
                                                class="col-5 col-md-5 col-lg-5"
                                                link="/SuccessPassword"
                                                title="Próximo"
                                            />

                                            <SupportButton 
                                                class="col-5 col-md-5 col-lg-5"
                                                link="/"
                                                title="Cancelar"
                                            />
                                        </div>
                                    </div>



                            </div>

                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </>
    )
}
export default UpdatePassword