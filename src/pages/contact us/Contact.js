import './Contact.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Nav  from '../../components/nav/Nav';
import FreightBanner from '../../components/freightBanner/FreightBanner';

function Contact() {
    return (
        <>
            <FreightBanner />
            <Header/>
            <Nav/>

            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-12">




                        <div className="row justify-content-center">
                            <div class="col-10">
                                <div className="card">
                      
                                    <h1 className="text-center text-title">Fale Conosco</h1>
                                    <div className="row rowCentralized justify-content-center ">
                                    <div className="col-10">
                                        <div className="card2  mb-4">

                                            <div className="row rowCentralized justify-content-around">
                                                <div className="form-group font-weight-bold mb-2 mt-3 custom-input col-11 col-md-5">
                                                    <label className="mb-2" for="usuario">Nome completo:</label>
                                                    <input className="form-control" type="text" placeholder="Insira o nome" />
                                                </div>

                                                <div className="form-group font-weight-bold mb-2 mt-3 custom-input col-11 col-md-5 input-media">
                                                    <label className="mb-2 custom-label" for="usuario">Telefone:</label>
                                                    <input className="form-control input-login" type="tel" placeholder="(11) 3763-8738" />
                                                </div>
                                            </div>

                                            <div className="row rowCentralized justify-content-around">
                                                <div className="form-group font-weight-bold col-11 col-md-5 mb-2 mt-2 custom-input">
                                                    <label className="mb-2" for="usuario">E-mail:</label>
                                                    <input type="email" className="form-control" placeholder="Insira o e-mail" />
                                                </div>

                                                <div className="form-group font-weight-bold col-11 col-md-5 mb-2 mt-2 custom-input input-media">
                                                    <label className="mb-2 custom-label" for="usuario">Whatsapp:</label>
                                                    <input type="tel" className="form-control input-login"
                                                        placeholder="(11) 91426-5144" />
                                                </div>
                                            </div>

                                            <div className="row rowCentralized justify-content-around">
                                                <div className="form-group font-weight-bold mb-2 mt-2 custom-input col-11 col-md-5">
                                                    <label className="mb-2" for="usuario">Telefone:</label>
                                                    <input className="form-control" type="tel" placeholder="Insira o telefone" />
                                                </div>

                                                <div className="form-group font-weight-bold mb-2 mt-2 custom-input col-11 col-md-5 input-media">
                                                    <label className="mb-2 custom-label" for="usuario">E-mail:</label>
                                                    <input className="form-control input-login" type="email" placeholder="pimpolhos@outlook.com" />
                                                </div>
                                            </div>

                                            <div className="row rowCentralized justify-content-around">
                                                <div className="form-group font-weight-bold col-11 col-md-5 mb-2 mt-2 custom-input">
                                                    <label className="mb-2" for="usuario">N° Pedido:</label>
                                                    <input type="text" className="form-control" placeholder="Insira o número do pedido" />
                                                </div>

                                                <div className="form-group font-weight-bold col-11 col-md-5 mb-2 mt-2 custom-input input-media">
                                                    <label className="mb-2 custom-label" for="usuario">Endereço:</label>
                                                    <input type="text" className="form-control input-login"
                                                        placeholder="Rua Elias Cutait,  Cidade Jardim, 20" />
                                                </div>
                                            </div>

                                            <div className="row rowCentralized justify-content-around">
                                                <div className="form-group font-weight-bold col-11 col-md-5 mb-2 mt-2 custom-input">
                                                    <label className="mb-2" for="usuario">Mensagem:</label>
                                                    <input type="text" className="form-control input-message"
                                                        placeholder="Insira a mensagem" />
                                                </div>

                                                <div className="col-5">
                                                    <p />
                                                    Atendimento: <br />
                                                    <br />
                                                    Segunda à Sexta, das 08h às 17h

                                                    Sábado, das 09h às 16h
                                                    <p />
                                                </div>
                                            </div>

                                            <div className="row rowCentralized justify-content-center">
                                            <div className="col-3 ">
                                                <button type="submit" className="btn custom-button">Enviar</button>
                                            </div>
                                            </div>

                                        </div>
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
    );
}

export default Contact