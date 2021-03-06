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
                <div className="row row-contact">
                    <div className="col-md-12">




                        <div className="row row-contact justify-content-center">
                            <div class="col-12 col-md-12 col-lg-8">
                                <div className="card">

                                    <h1 className="text-center text-title">Fale Conosco</h1>
                                    <div className="row rowCentralized justify-content-center ">
                                    <div className="col-12
                                    ">
                                        <div className="card2  mb-4">

                                            <div className="row rowCentralized justify-content-around">
                                                <div className="form-group font-weight-bold mb-2 mt-3 custom-input col-11 col-md-5">
                                                    <label className="mb-2" for="usuario">Nome completo:</label>
                                                    <input className="form-control" type="text" placeholder="Insira o nome" />
                                                </div>

                                                <div className="form-group font-weight-bold mb-2 mt-3 custom-input col-11 col-md-5 input-media">
                                                    <label className="mb-2" for="usuario">Telefone:</label>
                                                    <input className="form-control" type="tel" placeholder="(11) 3763-8738" disabled/>
                                                </div>
                                            </div>

                                            <div className="row rowCentralized justify-content-around">
                                                <div className="form-group font-weight-bold col-11 col-md-5 mb-2 mt-2 custom-input">
                                                    <label className="mb-2" for="usuario">E-mail:</label>
                                                    <input type="email" className="form-control" placeholder="Insira o e-mail" />
                                                </div>

                                                <div className="form-group font-weight-bold col-11 col-md-5 mb-2 mt-2 custom-input input-media">
                                                    <label className="mb-2" for="usuario">Whatsapp:</label>
                                                    <input type="tel" className="form-control"
                                                        placeholder="(11) 91426-5144" disabled/>
                                                </div>
                                            </div>

                                            <div className="row rowCentralized justify-content-around">
                                                <div className="form-group font-weight-bold mb-2 mt-2 custom-input col-11 col-md-5">
                                                    <label className="mb-2" for="usuario">Telefone:</label>
                                                    <input className="form-control" type="tel" placeholder="Insira o telefone" />
                                                </div>

                                                <div className="form-group font-weight-bold mb-2 mt-2 custom-input col-11 col-md-5 input-media">
                                                    <label className="mb-2" for="usuario">E-mail:</label>
                                                    <input className="form-control" type="email" placeholder="pimpolhos@outlook.com" disabled/>
                                                </div>
                                            </div>

                                            <div className="row rowCentralized justify-content-around">
                                                <div className="form-group font-weight-bold col-11 col-md-5 mb-2 mt-2 custom-input">
                                                    <label className="mb-2" for="usuario">N?? Pedido:</label>
                                                    <input type="text" className="form-control" placeholder="Insira o n??mero do pedido" />
                                                </div>

                                                <div className="form-group font-weight-bold col-11 col-md-5 mb-2 mt-2 custom-input input-media">
                                                    <label className="mb-2" for="usuario">Endere??o:</label>
                                                    <input type="text" className="form-control"
                                                        placeholder="Rua Elias Cutait,  Cidade Jardim, 20" disabled/>
                                                </div>
                                            </div>

                                            <div className="row rowCentralized justify-content-around">
                                                <div className="form-group font-weight-bold col-11 col-md-5 mb-2 mt-2 custom-input">
                                                    <label className="mb-2" for="usuario">Mensagem:</label>
                                                    <input type="text" className="form-control input-message"
                                                        placeholder="Insira a mensagem" />
                                                </div>

                                                <div className="col-10 col-md-5 col-lg-5">
                                                    <p />
                                                    Atendimento: <br />
                                                    <br />
                                                    Segunda ?? Sexta, das 08h ??s 17h <br />

                                                    S??bado, das 09h ??s 16h
                                                    <p />
                                                </div>
                                            </div>

                                            <div className="row rowCentralized justify-content-center">
                                            <div className="col-10 col-md-5 col-lg-3">
                                                <button type="submit" className="btn custom-button-contact">Enviar</button>
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