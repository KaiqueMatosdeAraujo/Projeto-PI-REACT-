import './Footer.css';
import { Link } from 'react-router-dom';

import american from '../footer/img-footer/american.png';
import boleto from '../footer/img-footer/boleto.png';
import facebook from '../footer/img-footer/facebook.png';
import instagram from '../footer/img-footer/instagram.png';
import mastercard from '../footer/img-footer/mastercard.png';
import pix from '../footer/img-footer/pix.png';
import visa from '../footer/img-footer/visa.png';
import whatsapp from '../footer/img-footer/whatsapp.png';
import youtube from '../footer/img-footer/youtube.png';


function Footer() {
    return (
        <>
            <footer>



                <div className="footer">

                    <div class="accordion accordion-flush accordionFooter" id="accordionFlushExample">
                        <div class="accordion-item footerAccordion">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Pimpolhos
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    
                                    <ul type="none">    
                                        <li><Link to="" className="nav-Link" >Login</Link></li>
                                        <li><Link to=""  className="nav-Link">Cadastre-se</Link></li>
                                        <li><Link to="" className="nav-Link">Recuperar senha </Link></li>
                                    </ul>   
                                    
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item footerAccordion">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Termos
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul type="none">    
                                        <li><Link to="" className="nav-Link" >Termos de serviço</Link></li>
                                        <li><Link to=""  className="nav-Link">Politica de privacidade</Link></li>
                                        <li><Link to="" className="nav-Link">Politica de cookies </Link></li>
                                    </ul> 
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item footerAccordion">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Ajuda
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul type="none">    
                                        <li><Link to="" className="nav-Link" >Trocas</Link></li>
                                        <li><Link to=""  className="nav-Link">Devoluções</Link></li>
                                        <li><Link to="" className="nav-Link">Sugestões </Link></li>
                                        <li><Link to="" className="nav-Link">Fale Conosco</Link></li>
                                    </ul> 
                                </div>
                            </div>
                        </div>

                        <div className="redesMobile row">

                            <p>Siga a gente nas redes sociais</p>

                            <ul className=" nav flex-column">
                                <li className="nav-item-img">
                                    <Link to="" className="img-footer"><img src={instagram} height="30px" width="30px" alt="instagram" /></Link>
                                    <Link to="" className="img-footer"><img src={facebook} height="30px" width="30px" alt="facebook" /></Link>
                                    <Link to="" className="img-footer"><img src={whatsapp} height="30px" width="30px" alt="whatsapp" /></Link>
                                    <Link to="" className="img-footer"><img src={youtube} height="30px" width="30px" alt="youtube" /></Link>
                                </li>
                            </ul>


                            {/*PAGAMENTO */}


                            <p>Pague com </p>

                            <ul className="nav flex-column">
                                <li className="nav-item-img">
                                    <div className="img-footer"><img src={pix} height="35px" width="35px" alt="pix" /></div>
                                    <div className="img-footer"><img src={mastercard} height="40px" width="40px" alt="mastercard" /></div>
                                    <div className="img-footer"><img src={visa} height="40px" width="40px" alt="visa" /></div>
                                    <div className="img-footer"><img src={american} height="40px" width="40px" alt="american" /></div>
                                    <div className="img-footer"><img src={boleto} height="35px" width="35px" alt="boleto" /></div>
                                </li>
                            </ul>
                        </div>

                    </div>

                    
                    <div className="footerDesktop col-12">
                    
                        <div className="coluna-1">
                            <ul className="nav flex-column teste">
                                <li className="nav-item">
                                    <Link to="" className="nav-Link" >Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-Link">Cadastre-se</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="nav-Link">Recuperar senha </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="nav-Link">Fale Conosco</Link>
                                </li>
                            </ul>
                        </div>

                        <div className=" coluna-2">
                            <ul className="nav flex-column teste">
                                <li className="nav-item ">
                                    <Link to="" className="nav-Link" aria-current="page">Termos de serviço</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="" className="nav-Link">Politica de privacidade</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="nav-Link" >Politica de cookies </Link>
                                </li>
                            </ul>
                        </div>

                        <div className=" coluna-3">
                            <ul className="nav flex-column teste">
                                <li className="nav-item">
                                    <Link to="" className="nav-Link" aria-current="page">Trocas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="nav-Link">Devoluções</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="nav-Link">Sugestões </Link>
                                </li>
                            </ul>
                        </div>
                    


                        {/* REDES SOCIAIS */}


                        <div className="redes row">

                            <p>Siga a gente nas redes sociais</p>

                            <ul className=" nav flex-column">
                                <li className="nav-item-img">
                                    <Link to="" className="img-footer"><img src={instagram} height="30px" width="30px" alt="instagram" /></Link>
                                    <Link to="" className="img-footer"><img src={facebook} height="30px" width="30px" alt="facebook" /></Link>
                                    <Link to="" className="img-footer"><img src={whatsapp} height="30px" width="30px" alt="whatsapp" /></Link>
                                    <Link to="" className="img-footer"><img src={youtube} height="30px" width="30px" alt="youtube" /></Link>
                                </li>
                            </ul>


                            {/*PAGAMENTO */}


                            <p>Pague com </p>

                            <ul className="nav flex-column">
                                <li className="nav-item-img">
                                    <div className="img-footer"><img src={pix} height="35px" width="35px" alt="pix" /></div>
                                    <div className="img-footer"><img src={mastercard} height="40px" width="40px" alt="mastercard" /></div>
                                    <div className="img-footer"><img src={visa} height="40px" width="40px" alt="visa" /></div>
                                    <div className="img-footer"><img src={american} height="40px" width="40px" alt="american" /></div>
                                    <div className="img-footer"><img src={boleto} height="35px" width="35px" alt="boleto" /></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* copyright */}


                <div className="copyright">

                    <p className="devs">
                        <hr />
                        Desenvolvido por grupo Pimpolhos <br />
                        RD - Quero ser dev
                    </p>
                </div>
                
            </footer>

        </>
    );
}

export default Footer;