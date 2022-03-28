import './Contact.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav';
import FreightBanner from '../../components/freightBanner/FreightBanner';

function Contact() {
    return (
        <>
        <div className="pageContact">
            <FreightBanner />
            <Header />
            <Nav />

            <div className="container-fluid mt-5">
                <div className="row rowCentralized row-contact justify-content-center">
                    <div class="col-12 col-md-12 col-lg-8">
                        <div className="cardContact card">
                            <h1 className="text-center text-title">Fale Conosco</h1>
                            <div className="row rowCentralized justify-content-center ">
                                <div className="col-12">
                                    <div className="card2  mb-4">
                                        <div className='row rowCentralized'>
                                            <div className='teste-contact'>
                                                <div className='container col-lg-5'>
                                                    <div className="row rowCentralized justify-content-around">
                                                        <div className="form-group font-weight-bold mb-2 mt-3 custom-input col-11 col-md-10 col-lg-12">
                                                            <label className="mb-2" for="usuario">Nome completo:</label>
                                                            <input className="form-control" type="text" placeholder="Insira o nome" />
                                                        </div>
                                                    </div>

                                                    <div className="row rowCentralized justify-content-around">
                                                        <div className="form-group font-weight-bold col-11 col-md-10 col-lg-12 mb-2 mt-2 custom-input">
                                                            <label className="mb-2" for="usuario">E-mail:</label>
                                                            <input type="email" className="form-control" placeholder="Insira o e-mail" />
                                                        </div>
                                                    </div>

                                                    <div className="row rowCentralized justify-content-around">
                                                        <div className="form-group font-weight-bold mb-2  mt-2 custom-input col-11 col-md-10 col-lg-12">
                                                            <label className="mb-2" for="usuario">Telefone:</label>
                                                            <input className="form-control" type="tel" placeholder="Insira o telefone" />
                                                        </div>
                                                    </div>

                                                    <div className="row rowCentralized justify-content-around">
                                                        <div className="form-group font-weight-bold col-11 col-md-10 col-lg-12 mb-2 mt-2 custom-input">
                                                            <label className="mb-2" for="usuario">N° Pedido:</label>
                                                            <input type="text" className="form-control" placeholder="Insira o número do pedido" />
                                                        </div>
                                                    </div>

                                                    <div className="row rowCentralized justify-content-around">
                                                        <div className="form-group font-weight-bold col-11 col-md-10 col-lg-12 mb-2 mt-2 custom-input">
                                                            <label className="mb-2" for="usuario">Mensagem:</label>
                                                            <input type="text" className="form-control input-message"
                                                                placeholder="Insira a mensagem" />
                                                        </div>
                                                    </div>

                                                    <div className="row rowCentralized rowButton">
                                                        <div className="col-5 col-md-4 col-lg-3">
                                                            <button type="submit" className="btn custom-button-contact btn-ipad">Enviar</button>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className='container col-lg-5'>
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
                                                            <input className="form-control" type="email" placeholder="pimpolhos@outlook.com" disabled />
                                                        </div>
                                                    </div>


                                                    <div className="row rowCentralized justify-content-around">
                                                        <div className="form-group font-weight-bold col-11 col-md-10 col-lg-12 mb-2 mt-2 custom-input input-media">
                                                            <label className="mb-2" for="usuario">Endereço:</label>
                                                            <input type="text" className="form-control"
                                                                placeholder="Rua Elias Cutait,  Cidade Jardim, 20" disabled />
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

                                                    <div className="row rowCentralized rowButton">
                                                        <div className="col-5 col-md-4 col-lg-3">
                                                            <button type="submit" className="btn custom-button-contact btn-mobile">Enviar</button>
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
            </div>

            <Footer />
            </div>
        </>
    );
}

export default Contact