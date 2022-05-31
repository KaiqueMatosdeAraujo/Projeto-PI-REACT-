import './Contact.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav';
import FreightBanner from '../../components/freightBanner/FreightBanner';
import WhatsApp from './img/whatsapp.png'

function Contact() {
    return (
        <>
        <div className="pageContact">
            <FreightBanner />
            <Header />
            <Nav />

            <div className="container-fluid mt-5">
                <div className="row rowCentralized row-contact justify-content-center">
                    <div class="zap col-12 col-md-12 col-lg-8">
                        <div className="cardContact card col-8">
                            <h1 className="text-center text-title">Fale Conosco</h1>
                            <div className="row rowCentralized justify-content-center ">
                                <div className="col-12">
                                    <div className="card2  mb-4">
                                        <div className='row rowCentralized'>
                                            <div className='teste-contact'>
                                               

                                                <div className='container col-lg-8'>
                                                    <div className="row rowCentralized justify-content-around">
                                                        <div className="form-group font-weight-bold mb-2 mt-3 custom-input col-11 col-md-10 col-lg-12 input-media">
                                                            <label className="mb-2" for="usuario">Telefone:</label>
                                                            <input className="form-control" type="tel" placeholder="(11) 3763-8738" disabled />
                                                        </div>
                                                    </div>
                                                    <div className="row rowCentralized justify-content-around">
                                                        <div className="form-group font-weight-bold col-11 col-md-10 col-lg-12 mb-2 mt-2 custom-input input-media">
                                                            <label className="mb-2" for="usuario">Whatsapp:</label>
                                                            <input type="tel" className="form-control"
                                                                placeholder="(11) 91426-5144" disabled />
                                                                
                                                        </div>
                                                        
                                                    </div>



                                                    <div className="row rowCentralized justify-content-around">
                                                        <div className="form-group font-weight-bold mb-2 mt-2 custom-input col-11 col-md-10 col-lg-12 input-media">
                                                            <label className="mb-2" for="usuario">E-mail:</label>
                                                            <input className="form-control" type="email" placeholder="sac@pimpolhos.com" disabled />
                                                        </div>
                                                    </div>


                                                    <div className="row rowCentralized justify-content-around">
                                                        <div className="form-group font-weight-bold col-11 col-md-10 col-lg-12 mb-2 mt-2 custom-input input-media">
                                                            <label className="mb-2" for="usuario">Endereço:</label>
                                                            <input type="text" className="form-control"
                                                                placeholder="Av. Corifeu de Azevedo Marques, 3097" disabled />
                                                        </div>
                                                    </div>


                                                    <div className="row rowCentralized justify-content-around">
                                                        <div className="col-10 col-md-10 col-lg-12 text-atendimento">
                                                            <p />
                                                            Atendimento: <br />
                                                            <br />
                                                            Segunda à Sexta, das 08h às 17h <br />

                                                            Sábado, das 09h às 16h
                                                            <p />
                                                        </div>

                                                        
                                                    </div>

                                                   

                                                </div>
                                               
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className='divZap col-1'>
                            <a href='https://wa.me/5511914265144?text=Ol%C3%A1,%20gostaria%20de%20tirar%20uma%20d%C3%BAvida!' target="_blank"><button ><img src={WhatsApp}></img> </button></a> 
                        </div>
                        

                    </div>
                </div>
            </div>

            <Footer />
            </div>
        </>
    );
}

export default Contact