import './SuccessPassword.css'
import { Link } from 'react-router-dom';
import BannerFreight from '../../components/freightBanner/FreightBanner'
import Nav from '../../components/nav/Nav'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import check from './img_success/checked.png'


function SuccessPassword() {
    return (
        <>
        <BannerFreight/>
            <Header/>
            <Nav/>
            <div className="container-fluid mt-5 mb-5">
                <div className="row">
                    <div className="col-md-12">

                        <div className="container container-maior">
                            <div className="card">

                                <div className="row justify-content-center">
                                    <div className="col-md-10">

                                        <h1 className="text-center text-title mt-3">Senha atualizada com sucesso</h1>
                                        <hr className="line-title-atualizar"/>

                                        <div className="text-sucesso-atualizacao-senha">
                                            <img src={check} alt="" className="img-checked-senha"/>
                                            
                                            <p className="text-sucesso-atualizacao-senha"/>
                                                Volte para fazer o login
                                            <p/>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <Link to="/login"><button type="button" className="btn custom-button">Login</button></Link>
                                        </div>
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

export default SuccessPassword