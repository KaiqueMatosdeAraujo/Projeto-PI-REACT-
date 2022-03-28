import './ForgotPassword.css'

import BannerFreight from '../../components/freightBanner/FreightBanner'
import Nav from '../../components/nav/Nav'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import SupportButton from '../../components/supportButton/SupportButton'
function ForgotPassword() {
    return (
        <>
        <BannerFreight/>
            <Header></Header>
            <Nav/>
            <div className="container-fluid mt-5">
                <div className="row justify-content-center rowCentralized">

                    <div className="card border-card col-11 col-md-10 col-lg-6">

                        <div className="row justify-content-center rowCentralized">
                            <div className="col-md-11">

                                <div className="row justify-content-center ">

                                    <h1 className="text-center text-title mt-3">Esqueci Minha Senha</h1>
                                  </div>
                                       <div className="row justify-content-center">
                                    <div className="text-esqueci-senha col-12 col-md-12 col-lg-12">
                                        <p>
                                            Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.
                                        </p>
                                    </div>
                                    </div>

                                    <div className="card card-input mb-3">
                                        <div className="form-group font-weight-bold mb-2 mt-3 col-11 col-md-12 col-lg-11 custom-input">
                                            <label className="mb-2" for="usuario">E-mail</label>
                                            <input className="form-control" type="text" placeholder="Insira o e-mail" />
                                        </div>

                                        <div className="row div-buttons">
                                       
                                        <SupportButton 
                                            class="col-5 col-md-5 col-lg-5"
                                            link="/updatePassword"
                                            title="Cancelar"
                                        />

                                        <SupportButton 
                                            class="col-5 col-md-5 col-lg-5 teste"
                                            link="/login"
                                            title="Próximo"
                                        />
                                        </div>
                                    </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}

    
          
            
    

          
    
    
  
export default ForgotPassword