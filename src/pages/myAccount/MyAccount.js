
import './MyAccount.css'
import Freight from '../../components/freightBanner/FreightBanner'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import cadastro from './img-myAccount/cadastro.png'
import localizacao from './img-myAccount/localizacao.png'
import lixeira from './img-myAccount/lixeira.png'
import mastercard from './img-myAccount/mastercard.png'
import american from './img-myAccount/american.png'
import chip from './img-myAccount/chip.png'
import elo from './img-myAccount/elo.png'
import hipercard from './img-myAccount/hipercard.png'
import miniLixeira from './img-myAccount/miniLixeira.png'
import visa from './img-myAccount/visa.png'
import checklist from './img-myAccount/checklist.png'
import desejos from './img-myAccount/desejos.png'
import user from './img-myAccount/user.png'
import { Link } from 'react-router-dom'

import {useState} from 'react'

function MyAccount() {

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    
    return (
        <>
         
            {/* <!-- INÍCIO DO NAV/TAB --> */}
           



                {/* <!-- INICIO DO CONTEUDO NAV/TAB --> */}
               {/* <div class="tab-content" id="myTabContent">*/}
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">




                        <h1>Minha Conta</h1>
                        <div className={toggleState === 1 ? "container row": "content"}>


                            <div className="col-md-6 col-12">
                                <div className="cardContentTitleDC"> <img className="emotes" src={cadastro} />Dados Cadastrais</div>
                                <div className="container">
                                    <div className="cardContent row">
                                        <div className="col-12">
                                            <label for="inputAddressEndereco" id="InputEnderecoTitle">
                                                Nome:</label>
                                            <input type="text" className="form-control " id="inputAddressEndereco" placeholder="Osvaldo Silva"
                                                aria-label="Disabled input example" Disabled />
                                        </div>

                                        <div className="col-6">
                                            <label for="inputAddressBairro" id="InputBairroTitle">
                                                CPF:</label>
                                            <input type="text" className="form-control col-12" id="inputAddressBairro"  placeholder="000.000.000-00"
                                                aria-label="Disabled input example" Disabled />
                                        </div>


                                        <div className="col-6">
                                            <label for="inputAddressCidade" id="InputCidadeTitle">
                                                Nascimento:</label>
                                            <input type="text" className="form-control" id="inputAddressCidade" placeholder="01/01/2021"
                                                aria-label="Disabled input example" Disabled />
                                        </div>

                                        <div className="col-12">
                                            <label for="inputAddressCEP" id="InputCEPTitle">E-mail:</label>
                                            <input type="text" className="form-control" id="inputAddressCEP" placeholder="osvaldoSilva@gmail.com"
                                                aria-label="Disabled input example" Disabled />
                                        </div>



                                        <div className="col-6">
                                            <label for="inputAddressComplemento" id="InputComplementoTitle">Telefone:</label>
                                            <input type="text" className="form-control" id="inputAddressComplemento" placeholder="(11) 99999-9999 "
                                                aria-label="Disabled input example" Disabled />
                                        </div>

                                        <div className="col-6">
                                            <label for="inputAddressPontodeReferencia" id="InputPontodeReferenciaTitle"> Celular:</label>
                                            <input type="text" className="form-control" id="inputAddressPontodeReferencia"
                                                placeholder=" (11) 99999-9999 " aria-label="Disabled input example" Disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-6 col-12">
                                <div className="cardContentTitleDC"><img className="emotes" src={localizacao} alt="" /> Endereço Principal
                                </div>
                                <div className="cardContent row">

                                    <div className="col-12">
                                        <label for="inputAddressEndereco" id="InputEnderecoTitle">
                                            Endereço:</label>
                                        <input type="text" className="form-control" id="inputAddressEndereco"
                                            placeholder="Av. Corifeu de Azevedo Marques, 3097" aria-label="Disabled input example" Disabled />
                                    </div>

                                    <div className="col-5">
                                        <label for="inputAddressBairro" id="InputBairroTitle">
                                            Bairro:</label>
                                        <input type="text" className="form-control" id="inputAddressBairro" placeholder="Vila Butantã"
                                            aria-label="Disabled input example" Disabled />
                                    </div>

                                    <div className="col-4">
                                        <label for="inputAddressCidade" id="InputCidadeTitle">
                                            Cidade:</label>
                                        <input type="text" className="form-control" id="inputAddressCidade" placeholder="São Paulo"
                                            aria-label="Disabled input example" Disabled />
                                    </div>

                                    <div className="col-3">
                                        <label for="inputAddressUF" id="InputUFTitle">
                                            UF:</label>
                                        <input type="text" className="form-control" id="inputAddressUF" placeholder="SP"
                                            aria-label="Disabled input example" Disabled />
                                    </div>


                                    <div className="col-4">
                                        <label for="inputAddressCEP" id="InputCEPTitle">
                                            CEP:</label>
                                        <input type="text" className="form-control" id="inputAddressCEP" placeholder="05212040"
                                            aria-label="Disabled input example" Disabled />
                                    </div>

                                    <div className="col-6">
                                        <label for="inputAddressComplemento" id="InputComplementoTitle">
                                            Complemento:</label>
                                        <input type="text" className="form-control" id="inputAddressComplemento" placeholder=" "
                                            aria-label="Disabled input example" Disabled />
                                    </div>

                                    <div className="col-10">
                                        <label for="inputAddressPontodeReferencia" id="InputPontodeReferenciaTitle">
                                            Ponto de Referência:</label>
                                        <input type="text" className="form-control" id="inputAddressPontodeReferencia"
                                            placeholder=" Em frente a USP " aria-label="Disabled input example" Disabled />
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Modal Cadastro botão --> */}

                            <button type="button" className="btn edit col-md-6 col-8" data-bs-toggle="modal"
                                data-bs-target="#modalEditarDados">Editar Dados Cadastrais</button>

                            {/* <!-- Modal Cadastro botão --> */}

                            <div className="modal fade" id="modalEditarDados" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <div className="modalcontentTitle" id="exampleModalLabel">Editar Dados</div>
                                            <button type="button" className="btn modalclose" data-bs-dismiss="modal" aria-label="Close">X</button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="container row">


                                                <div className="col-md-6 col-12">
                                                    <div className="cardContentTitleDC"><img className="emotes" src={cadastro} />

                                                        Dados Cadastrais</div>
                                                    <div className="container">
                                                        <div className="cardContent row">
                                                            <div className="col-12">
                                                                <label for="inputAddressNome" id="inputNome">
                                                                    Nome:</label>
                                                                <input type="text" className="form-control " id="inputAddressNome" placeholder="Osvaldo Silva" />
                                                            </div>

                                                            <div className="col-6">
                                                                <label for="inputAddressSexo" id="inputSexo">
                                                                   CPF:</label>
                                                                <input type="text" className="form-control col-12" id="inputAddressSexo" placeholder="000.000.000-00"
                                                                    aria-label="Disabled input example" Disabled />
                                                            </div>


                                                            <div className="col-6">
                                                                <label for="inputAddressNascimento" id="inputNascimento">
                                                                    Nascimento:</label>
                                                                <input type="text" className="form-control" id="inputAddressNascimento" placeholder="01/01/2021"
                                                                    aria-label="Disabled input example" Disabled />
                                                            </div>

                                                            <div className="col-12">
                                                                <label for="inputAddressEmail" id="inputEmail">E-mail:</label>
                                                                <input type="text" className="form-control" id="inputAddressEmail"
                                                                    placeholder="osvaldoSilva@gmail.com" aria-label="Disabled input example" Disabled />
                                                            </div>



                                                            <div className="col-6">
                                                                <label for="inputAddressTelefone" id="inputTelefone">Telefone:</label>
                                                                <input type="text" className="form-control" id="inputAddressTelefone"
                                                                    placeholder="(11) 99999-9999 " />
                                                            </div>

                                                            <div className="col-6">
                                                                <label for="inputAddress" id="inputCelular"> Celular:</label>
                                                                <input type="text" className="form-control" id="inputCelular" placeholder=" Em frente a USP " />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-md-6 col-12">
                                                    <div className="cardContentTitleDC"><img className="emotes" src={localizacao} />
                                                        Endereço Principal</div>

                                                    <div className="cardContent row modalEndereco">

                                                        <div className="col-9">
                                                            <label for="inputAddress" id="inputEndereco">
                                                                Endereço:</label>
                                                            <input type="text" className="form-control" id="inputEndereco"
                                                                placeholder="Av. Corifeu de Azevedo Marques" />
                                                        </div>

                                                        <div className="col-md-2 col-3">
                                                            <label for="inputAddress" id="inputNumero">
                                                                Nº:</label>
                                                            <input type="text" className="form-control" id="inputNumero" placeholder="3097" />
                                                        </div>

                                                        <div className="col-4">
                                                            <label for="inputAddress" id="InputBairroTitle">
                                                                Bairro:</label>
                                                            <input type="text" className="form-control" id="inputAddressBairro" placeholder="Vila Butantã" />
                                                        </div>

                                                        <div className="col-5">
                                                            <label for="inputAddress" id="InputCidadeTitle">
                                                                Cidade:</label>
                                                            <input type="text" className="form-control" id="inputAddressCidade" placeholder="São Paulo" />
                                                        </div>

                                                        <div className="col-2">
                                                            <label for="inputAddress" id="InputUFTitle">
                                                                UF:</label>
                                                            <input type="text" className="form-control" id="inputAddressUF" placeholder="SP" />
                                                        </div>



                                                        <div className="col-md-5 col-4">
                                                            <label for="inputAddress" id="InputCEPTitle">
                                                                CEP:</label>
                                                            <input type="text" className="form-control" id="inputAddressCEP" placeholder="05212040" />
                                                        </div>


                                                        <div className="col-5">
                                                            <label for="inputAddress" id="InputComplementoTitle">
                                                                Complemento:</label>
                                                            <input type="text" className="form-control" id="inputAddressComplemento" placeholder=" " />
                                                        </div>

                                                        <div className="col-10">
                                                            <label for="inputAddress" id="InputPontodeReferenciaTitle">
                                                                Ponto de Referência:</label>
                                                            <input type="text" className="form-control" id="inputAddressPontodeReferencia"
                                                                placeholder=" Em frente a USP " />
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn cancelar" data-bs-dismiss="modal">Cancelar</button>
                                            <button type="button" className="btn salvar" data-bs-dismiss="modal">Salvar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Outros Endereços --> */}

                            <div className="cardContent" id="cardenderecos">
                                <div className="row titleContainer">
                                    <div className="col-md-5 col-8 titleContainersecondary">Outros Endereços</div>

                                    <div className="textoapoio col-md-3 col-5" id="AdicionarEnde">Adicione novos endereços</div>
                                </div>
                                <br />
                                <div className="row enderecoCartao">
                                    <div className="col-8">
                                        <div className="row  enderecoCartao">
                                            <div className="col-md-8 col-12" id="listaEnde"> Endereços Adicionais:</div><br /><br />

                                            <div className="col-12 col-md-7">
                                                <div className="input-group">
                                                    <img className="imgLocation" src={localizacao} height="15%" />
                                                    <input type="text" className="form-control" id="enderecoExtra1" placeholder="Rua Lorem,1689"
                                                        aria-label="Disabled input example" Disabled />
                                                    <button className="btn "><img src={lixeira} alt="" width="35%" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-8 col-md-4">
                                        <div className="col-md-12 col-12">
                                            <button type="button" className="btn Cadastro" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <strong>+</strong> Cadastrar novo endereço
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog modal-lg">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <div className="modalcontentTitle" id="exampleModalLabel">Cadastre um novo endereço</div>
                                                <button type="button" className="btn modalclose" data-bs-dismiss="modal" aria-label="Close">X</button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="cardContent row modalEndereco">

                                                    <div className="col-10">
                                                        <label for="inputEndereco" id="inputEndereco">
                                                            Endereço:</label>
                                                        <input type="text" className="form-control" id="inputEndereco"
                                                            placeholder="Av. Corifeu de Azevedo Marques" />
                                                    </div>

                                                    <div className="col-2">
                                                        <label for="inputAdressNumCadastroEnde" id="inputNumCadastroEnde">
                                                            Nº:</label>
                                                        <input type="text" className="form-control" id="inputAdressNumCadastroEnde" placeholder="3097" />
                                                    </div>

                                                    <div className="col-4">
                                                        <label for="inputAddressBairro" id="InputBairroTitle">
                                                            Bairro:</label>
                                                        <input type="text" className="form-control" id="inputAddressBairro" placeholder="Vila Butantã" />
                                                    </div>

                                                    <div className="col-5">
                                                        <label for="inputCidade" id="inputCidade">
                                                            Cidade:</label>
                                                        <input type="text" className="form-control" id="inputAddressCidade" placeholder="São Paulo" />
                                                    </div>

                                                    <div className="col-3">
                                                        <label for="inputAddressUF" id="InputUFTitle">
                                                            UF:</label>
                                                        <input type="text" className="form-control" id="inputAddressUF" placeholder="SP" />
                                                    </div>


                                                    <div className="col-4">
                                                        <label for="inputAddressCEP" id="InputCEPTitle">
                                                            CEP:</label>
                                                        <input type="text" className="form-control" id="inputAddressCEP" placeholder="05212040" />
                                                    </div>

                                                    <div className="col-6">
                                                        <label for="inputAddressComplemento" id="InputComplementoTitle">
                                                            Complemento:</label>
                                                        <input type="text" className="form-control" id="inputAddressComplemento" placeholder=" " />
                                                    </div>

                                                    <div className="col-10">
                                                        <label for="inputAddressPontodeReferencia" id="InputPontodeReferenciaTitle">
                                                            Ponto de Referência:</label>
                                                        <input type="text" className="form-control" id="inputAddressPontodeReferencia"
                                                            placeholder=" Em frente a USP " />
                                                    </div>



                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn cancelar" data-bs-dismiss="modal">Cancelar</button>
                                                <button type="submit" className="btn salvar" data-bs-dismiss="modal">Salvar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* <!--  Final Outros Endereços --> */}

                            <div className="cardContent" id="cardenderecos">
                                <div className="row  teste titleContainer">
                                    <div className=" col-md-5 col-12 titleContainersecondary">Meus Cartões</div>
                                </div>
                                <br />
                                <div className="row enderecoCartao">
                                    <div className="col-12 col-md-8">
                                        <div className="row enderecoCartao">
                                            <div className="col-9 col-md-8">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text"><img className="cartaocadastrado" src={mastercard}
                                                        alt="" /></span>
                                                    <input type="text" className="form-control" id="enderecoExtra1" placeholder="4658 XXXX XXXX XXXX 9867"
                                                        aria-label="Disabled input example" Disabled />
                                                    <button className="btn "><img src={lixeira} alt="" width="35%" /></button>
                                                </div>


                                                <div className="input-group mb-3">
                                                    <span className="input-group-text"><img src={visa} alt="" /></span>
                                                    <input type="text" className="form-control" id="enderecoExtra1" placeholder="4658 XXXX XXXX XXXX 9867"
                                                        aria-label="Disabled input example" Disabled />
                                                    <button className="btn "><img src={lixeira} alt="" width="35%" /></button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="col-8 col-md-4">
                                        <button type="button" className="btn Cadastro" data-bs-toggle="modal" data-bs-target="#novocartao">
                                            <strong>+</strong> Cadastrar novo cartão
                                        </button>
                                    </div>
                                </div>
                            </div>


                            {/* <!--Modal Cartão--> */}

                            <div className="modal fade" id="novocartao" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <div className="modalcontentTitle" id="exampleModalLabel">Novo Cartão</div>
                                            <button type="button" className="btn modalclose" data-bs-dismiss="modal" aria-label="Close">x</button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="pag">
                                                <div className="row">
                                                    <div className=" imagens col-12">
                                                        <a href="#"><img src={mastercard} width="7%" /></a>
                                                        <a href="#"> <img src={visa} width="34px" /></a>
                                                        <a href="#"> <img src={american} width="34px" /></a>
                                                        <a href="#"> <img src={elo} width="34px" /></a>
                                                        <a href="#"> <img src={hipercard} width="42px" /></a>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="cartFake col-9">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                <img src={chip} alt="" />
                                                            </div>
                                                        </div><br />
                                                        <div className="row">
                                                            <div className="num col-8">
                                                                <strong>5858 6858 6989 5875</strong>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="nomeCartao col-7">
                                                                <strong>Osvaldo Silva</strong>
                                                            </div>
                                                            <div className="data col-3">
                                                                <strong>05/25</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="row">
                                                        <div className=" col-8">
                                                            <label for=""><strong>Número do cartão</strong> </label>
                                                            <input className="form-control form-control-lg" type="" placeholder="5858 6858 6989 5875"
                                                                aria-label=".form-control-lg example" />
                                                            <br />
                                                        </div>

                                                        <div className=" col-4">
                                                            <label for=""><strong>Validade</strong> </label>
                                                            <input className="form-control form-control-lg" type="" placeholder="05/25"
                                                                aria-label=".form-control-lg example" />
                                                            <br />

                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12">
                                                                <label for=""><strong>Nome do Títular</strong> </label>
                                                                <input className="form-control form-control-lg" type="" placeholder="Osvaldo Silva"
                                                                    aria-label=".form-control-lg example" />
                                                                <br />

                                                            </div>

                                                            <div className="row">
                                                                <div className="col-3">
                                                                    <label for=""><strong>Cod. Seg</strong> </label>
                                                                    <input className="form-control form-control-lg" type="" placeholder="CCV"
                                                                        aria-label=".form-control-lg example" />
                                                                </div>
                                                                <a className="helpCard" href="">?</a>



                                                            </div>
                                                            <div className="modal-footer Card">
                                                                <button type="button" className="btn cancelar" data-bs-dismiss="modal">Cancelar</button>
                                                                <button type="button" className="btn salvar" data-bs-dismiss="modal">Salvar</button>
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
                {/*</div>*/}
            


           
        </>
    )
}

export default MyAccount