import './Assessments.css'
import camera from './imgs/camera-fotografica.png'

import {useState} from 'react'


function Assessments() {



    return (
        <>
     
            
              
                   
                    
                        <div class="container containerAssessments row rowAssessments">

                            <br />
                            <div class="col-12 dentro">De modo geral, qual foi sua experiência em comprar na Pimpolhos ?

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

                                <textarea class="form-control textareaAssessments" id="exampleFormControlTextarea1" rows="3"
                                    placeholder="Escreva aqui sua mensagem."></textarea>
                                    <div className="col-md-12 col-12 div-button">
                                        <button type="button" className="btn custom-btn-assessments">Enviar</button>
                                    </div>
                                <p class="foto-bebe">
                                    Insira uma foto com o seu bebê.
                                </p>
                                <button class="btn"><img src={camera} alt="" className='foto-avaliacao' /></button>
                            </div>
                        </div>

                   
             
       

               
            </>
            )
}

            export default Assessments