import './ForgotPassword.css'
import { Link } from 'react-router-dom'
import BannerFreight from '../../components/freightBanner/FreightBanner'
import Nav from '../../components/nav/Nav'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
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
                            <div className="col-md-10">

                                <div className="row justify-content-center ">

                                    <h1 className="text-center text-title mt-3">Esqueci Minha Senha</h1>
                                  </div>
                                       <div className="row justify-content-center">
                                    <div className="text-esqueci-senha col-10">
                                        <p>
                                            Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.
                                        </p>
                                    </div>
                                    </div>

                                    <div className="card card-input mb-4">
                                        <div className="form-group font-weight-bold mb-2 mt-3 col-11 custom-input">
                                            <label className="mb-2" for="usuario">E-mail</label>
                                            <input className="form-control" type="text" placeholder="Insira o e-mail" />
                                        </div>

                                        <div className="d-flex justify-content-center">
                                        <Link to="/updatePassword">   <a href="../atualizar-senha/index.html"><button type="button" className="btn custom-button">Próximo</button></a></Link>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <a href="../login/index.html"><button className="custom-button-cancelar">
                                                Cancelar
                                            </button></a>
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