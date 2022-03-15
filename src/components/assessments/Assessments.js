import './Assessments.css'
import camera from './imgs/camera-fotografica.png'


function Assessments() {
    return (
        <>
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="tab-pane fade" id="Avaliacoes" role="tabpanel" aria-labelledby="avaliacoes-tab">
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
                                <br />
                                <p class="foto-bebe">
                                    Insira uma foto com o seu bebê.
                                </p>
                                <button class="btn"><img src={camera} alt="" className='foto-avaliacao' /></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                    crossorigin="anonymous"></script>
            </>
            )
}

            export default Assessments