import { Link } from 'react-router-dom'
import './AssessmentsHome.css'
import crianca1 from '../assessmentsHome/img-avaliacoes/crianca1.png';
import crianca2 from '../assessmentsHome/img-avaliacoes/crianca2.png';
import crianca3 from '../assessmentsHome/img-avaliacoes/crianca3.png';
import crianca4 from '../assessmentsHome/img-avaliacoes/crianca4.png';



function AssessmentsHome() {
    return (
        <>
            <div className="avaliacoes">
                <h2 className="avaliacoes-clientes">Avaliações de Clientes </h2>
            </div>
            <hr className="linha" ></hr>


                <div className="clientes">
                    <div className="cliente1">
                        <img className="img-cliente"  src={crianca1} alt="Crianca1"  />
                        <h3 className="legenda">Aline F.</h3>
                        <h4 className="descricao-sobre" align="center">Praia Grande - SP</h4>
                        <p className="paragrafo-sobre" align="center">Chegou antes do previsto! Vocês são ótimos no que fazem.
                            Minha filha amou a nova bebê. Com certeza comprarei novamente.</p>
                    </div>

                    <div className="cliente2">
                        <img className="img-cliente" src={crianca2} alt="Crianca2"  />
                        <h3 className="legenda">Bianca G.</h3>
                        <h4 className="descricao-sobre" align="center">Duque de Caxias - RJ</h4>
                        <p className="paragrafo-sobre" align="center">Hoje foi o dia da princesinha ganhar a tão sonhada boneca. Ficamos encantados com a qualidade da Pimpolhos! Recomendo muito. </p>
                    </div>

                    <div className="cliente3">
                        <img className="img-cliente" src={crianca3} alt="Crianca3" />
                        <h3 className="legenda">Renata B.</h3>
                        <h4 className="descricao-sobre" align="center">Bragança Paulista - SP </h4>
                        <p className="paragrafo-sobre" align="center">Já comprei duas vezes na pimpolhos, e o atendimento é sempre maravilhoso. Produtos ótimos e com bons preços.</p>
                    </div>

                    <div className="cliente4">
                        <img className="img-cliente" src={crianca4} alt="Crianca4" />
                        <h3 className="legenda">Carol S.</h3>
                        <h4 className="descricao-sobre" align="center">São Paulo - SP </h4>
                        <p className="paragrafo-sobre" align="center">Ficamos surpresos com a qualidade e cuidado em cada detalhe. A preocupação do produto ter chegado no prazo e tudo certinho!</p>
                    </div>
                </div>
            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossorigin="anonymous"></script>

        </>
    )

}

export default AssessmentsHome