import React from 'react'
import './termos.css'
import BannerFreight from '../../components/freightBanner/FreightBanner'
import Nav from '../../components/nav/Nav'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function exchangesReturn() {
    return (
        <>
        <div className="global">

        <BannerFreight/>
        <Header/>
        <Nav/>
            <br />
            <br />
            <br />
            <div className="Principal" >
                <h4 className="fw-bold"> Trocas e Devoluções.</h4>
                <br/>
                <b className="lh-base bold">Este documento estabelece os procedimentos de Garantia que abrangem a Política de Troca e Devolução dos produtos adquiridos no site oficial PIMPOLHOS. Sua leitura é indispensável para que o visitante finalize um pedido e conheça as normas fixadas para aproveitar da melhor forma possível a facilidade oferecida através desse website.</b>
                <br />
                <br />
                <h4 className="fw-bold">1-Troca de Produtos.</h4>
                <p></p>
                <p className="lh-base bolder">1.1 Conforme prevê o Código de Defesa do Consumidor, Artigo 26, a PIMPOLHOS realizará a troca dos produtos adquiridos por seus clientes, desde que seja constatado vício ou defeito em até 90 dias da data do recebimento, devendo o cliente, obrigatoriamente, comunicar a Equipe de Atendimento através dos canais Email sac@pimpolhos.com.br ou na Guia Atendimentos disponíveis no website e seguir as instruções recebidas para que o pedido de troca seja analisado e processado.</p>
                <p className="text-start fw-light"> a) Desprendimento espontâneo de membros ou cabeça do corpo da boneca, exceto no caso de segurar a Bebê pelos membros ou cabeça ou qualquer outro movimento agressivo.</p>
                <p className="text-start fw-light">b) Descolamento espontâneo dos cílios. Sem que se toque ou deixe nada resvalar nos mesmos.</p>
                <p className="text-start fw-light">c) Queda muito expressiva de cabelo em manipulações delicadas. Constatado o mau uso, a garantia não valerá.</p>
                <p className="text-start fw-light">d) Chupetas que não fixam corretamente na boca. Pedimos gentilmente que, ao receber o Bebê, verifique se a chupeta se encaixa. O ímã pode se desprender durante o transporte.</p>
                <p className="text-start fw-light">e) Manchas estranhas ou desgaste da pintura antes de QUALQUER manipulação.</p>
                <p className="lh-base bold"> <b className="garantia">A garantia não cobre problemas ocasionados por má utilização da boneca, vide Manual de Cuidados </b>, ou seja, quando a sua utilização é diversa da proposta do produto. Por exemplo: uma Boneca Bebê Reborn de Pano não é adequada ao banho, e caso isso ocorra, não haverá garantia.</p>
                <br />
                <h5 className="fw-bold">2-Devolução de Produtos:</h5>
                <br />
                <p className="lh-base bold">2.1 Caso o cliente PIMPOLHOS deseje devolver um produto adquirido pela loja virtual, independentemente do motivo ou causa (arrependimento da compra), poderá fazê-lo no prazo de até 7 dias a contar de seu recebimento, devendo comunicar seu interesse dentro do prazo legal, entrando em contato com a equipe de Atendimento, através dos canais disponíveis no website e aguardar as instruções de procedimento. Vide CDC Artigo 49.</p>
                <p className="lh-base bold">2.1.1 É indispensável para análise do pedido de devolução o envio do(s) produto(s) com a Nota Fiscal respectiva, DANFE, sob pena de paralisação do procedimento até o recebimento pela PIMPOLHOS O(s) produto(s) deverá(ão) ser enviado(s) em sua(s) embalagem(s) original(ais) acompanhado de todos os manuais, acessórios e embalagem da PIMPOLHOS, sendo estes, partes integrantes do produto e, portanto, indispensáveis.</p>
                <p className="lh-base bold">2.1.2 O pedido de desistência passará por uma avaliação, para verificar se houve o atendimento dos requisitos acima e se tal(is) produto(s) não foi/foram utilizado(s) ou danificado(s), mesmo que parcialmente. Caso alguma destas situações tenha ocorrido, a devolução não será aceita e a PIMPOLHOS não tem a obrigação de aceitar.</p>
                <p className="lh-base bold">2.1.3 A PIMPOLHOS terá o prazo de até 10 (dez) dias úteis, após a confirmação do recebimento do(s) produto(s) em seu Centro Administrativo em São Paulo para analisar o pedido de devolução e, ocorrendo o preenchimento dos requisitos apresentados anteriormente, a compra será cancelada e os valores pagos serão restituídos ao cliente, na mesma modalidade em que foi efetuado o pagamento.</p>
                <br />
                <br />
                <p className="text-start">Atualização: 26 de Dezembro de 2021</p>
                <br />
                <p className="text-start">PIMPOLHOS</p>

            </div>

            {/* FIM DO CONTEUDO DE TERMOS   */}
            <br />
            <Footer/>
        </div>

        </>
    )
}

export default exchangesReturn