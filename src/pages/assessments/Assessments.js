import './Assessments.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import camera from './imgs/camera-fotografica.png'
import user from './imgs/user.png'
import checklist from './imgs/checklist.png'
import desejos from './imgs/desejos.png'

function Assessments() {
    return (
        <>
            <Header />
            {/* INÍCIO DO NAV/TAB */}
            {/*<div class="container navtabContainer ">

                <ul class="nav nav-tabs margin-tab" id="myTab" role="tablist">

                    <li class="nav-item principal" role="presentation">
                        <button class="nav-link principal active col-12" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                            type="button" role="tab" aria-controls="home" aria-selected="true">
                            <img src={user} alt="" className='emotes' />Minha Conta</button>
                    </li>




                    <li class="nav-item principal" role="presentation">
                        <button class="nav-link principal col-12 " id="pedidos-tab" data-bs-toggle="tab" data-bs-target="#MeusPedidos"
                            type="button" role="tab" aria-controls="pedidos" aria-selected="false">
                            <img src={checklist} alt="" className='emotes' /> Meus Pedidos</button>
                    </li>



                    <li class="nav-item principal" role="presentation">
                        <button class="nav-link principal" id="desejos-tab" data-bs-toggle="tab" data-bs-target="#ListadeDesejos"
                            type="button" role="tab" aria-controls="desejos" aria-selected="false">
                            <img src={desejos} alt="" className='emotes' />Lista de desejos</button>
                    </li>



                    <li class="nav-item principal" role="presentation">
                        <button class="nav-link principal" id="avaliacoes-tab" data-bs-toggle="tab" data-bs-target="#Avaliacoes"
                            type="button" role="tab" aria-controls="avaliacoes" aria-selected="false">
                            <svg class="emotes" width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 13.9163C19.0477 13.4281 17.9663 13.2507 16.9079 13.4092C15.8496 13.5676 14.8675 14.0539 14.1 14.7997C13.1637 15.7372 12.6377 17.008 12.6377 18.333C12.6377 19.658 13.1637 20.9288 14.1 21.8663L18.8167 26.6663C18.9716 26.8226 19.1559 26.9465 19.359 27.0312C19.5621 27.1158 19.78 27.1593 20 27.1593C20.22 27.1593 20.4379 27.1158 20.641 27.0312C20.8441 26.9465 21.0284 26.8226 21.1833 26.6663L25.9 21.9497C26.8363 21.0122 27.3623 19.7413 27.3623 18.4163C27.3623 17.0913 26.8363 15.8205 25.9 14.883C25.1421 14.1237 24.1646 13.6218 23.1059 13.4483C22.0471 13.2748 20.9606 13.4386 20 13.9163ZM23.5333 19.5163L20 23.0497L16.4667 19.5163C16.3105 19.3614 16.1865 19.1771 16.1019 18.974C16.0172 18.7709 15.9737 18.553 15.9737 18.333C15.9737 18.113 16.0172 17.8951 16.1019 17.692C16.1865 17.4889 16.3105 17.3046 16.4667 17.1497C16.7789 16.8393 17.2014 16.665 17.6417 16.665C18.082 16.665 18.5044 16.8393 18.8167 17.1497C18.9716 17.3059 19.1559 17.4299 19.359 17.5145C19.5621 17.5991 19.78 17.6427 20 17.6427C20.22 17.6427 20.4379 17.5991 20.641 17.5145C20.8441 17.4299 21.0284 17.3059 21.1833 17.1497C21.4956 16.8393 21.918 16.665 22.3583 16.665C22.7986 16.665 23.2211 16.8393 23.5333 17.1497C23.6896 17.3046 23.8135 17.4889 23.8982 17.692C23.9828 17.8951 24.0263 18.113 24.0263 18.333C24.0263 18.553 23.9828 18.7709 23.8982 18.974C23.8135 19.1771 23.6896 19.3614 23.5333 19.5163ZM20 3.33301C17.8113 3.33301 15.644 3.7641 13.6219 4.60168C11.5999 5.43926 9.76254 6.66692 8.21489 8.21456C5.08929 11.3402 3.33334 15.5794 3.33334 19.9997C3.31877 23.8482 4.65133 27.5806 7.10001 30.5497L3.76667 33.883C3.53541 34.1174 3.37875 34.415 3.31646 34.7383C3.25417 35.0616 3.28904 35.3962 3.41667 35.6997C3.5551 35.9996 3.77951 36.2515 4.06142 36.4237C4.34332 36.5958 4.67001 36.6802 5.00001 36.6663H20C24.4203 36.6663 28.6595 34.9104 31.7851 31.7848C34.9107 28.6592 36.6667 24.4199 36.6667 19.9997C36.6667 15.5794 34.9107 11.3402 31.7851 8.21456C28.6595 5.08896 24.4203 3.33301 20 3.33301ZM20 33.333H9.01667L10.5667 31.783C10.8771 31.4707 11.0513 31.0483 11.0513 30.608C11.0513 30.1677 10.8771 29.7453 10.5667 29.433C8.38432 27.2531 7.0253 24.3839 6.72116 21.3143C6.41702 18.2448 7.18658 15.1647 8.89872 12.5989C10.6109 10.0331 13.1597 8.14027 16.1109 7.24296C19.0621 6.34565 22.2331 6.49935 25.0837 7.67786C27.9343 8.85638 30.2881 10.9868 31.7441 13.7062C33.2 16.4255 33.6681 19.5656 33.0686 22.5914C32.469 25.6171 30.8389 28.3414 28.4559 30.3001C26.073 32.2587 23.0846 33.3306 20 33.333Z"
                                    fill="black" />
                            </svg>
                            Avaliações</button>
                    </li>




                </ul>

                {/* FIM DO NAV/TAB */}



            {/* INICIO DO CONTEUDO NAV/TAB */}
            {/*<div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">


                        <div class="tab-pane fade" id="MeusPedidos" role="tabpanel" aria-labelledby="pedidos-tab">

                            <div class="titleCard" id="titleCardMinhaConta"><h1>Meus pedidos</h1>


                                <div class="tab-pane fade" id="ListadeDesejos" role="tabpanel" aria-labelledby="desejos-tab">
    <div class="titleCard" id="titleCardMinhaConta">*/}





            <div class="titleCard" id="titleCardMinhaConta">
                <h1>Avaliações de Clientes</h1>
                <div class="container row">

                    <br />
                    <div class="col-12">De modo geral, qual foi sua experiência em comprar na Pimpolhos ?

                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Selecione como se sente.</option>
                            <option value="1">Muito insatisfeito</option>
                            <option value="2">Insatisfeito</option>
                            <option value="3">Satisfeito</option>
                            <option value="4">Muito satisfeito</option>
                        </select>
                        <br />
                    </div>
                    <br />
                    <div class="mensagem-avaliacao col-12">Sua avaliação é muito importante para nós, nos deixe um comentario e
                        ele poderá aparecer na página inicial do nosso site.</div><br />

                    <div class="mb-3 col-12">

                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                            placeholder="Escreva aqui sua mensagem."></textarea> 
                            <div className="col-md-3 col-8">
                            <button type="button" className="btn custom-btn-assessments" data-bs-toggle="modal" data-bs-target="#maisdetalhes2">Enviar</button>
                        </div>

                        <br />
                        <p class="foto-bebe">
                            Insira uma foto com o seu bebê.
                        </p>
                        <button class="btn"><img src={camera} alt="" className='foto-avaliacao' /></button>
                        {/*
                                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                                                        placeholder="Escreva aqui sua mensagem."></textarea> */}
                    </div>
                </div>

            </div>



            {/* </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                    {/*<Footer />*/}

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossorigin="anonymous"></script>
        </>
    )
}

export default Assessments