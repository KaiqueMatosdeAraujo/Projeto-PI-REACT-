import './ProductInfoMain.css'
import Heart from '../card/imgs/heart (2).png'
import { Link } from 'react-router-dom'
function ProductInfoMain(props) {

  const trocarImagem  =(el) => {
    var imgProduto = document.getElementById("imgProduto");
    imgProduto.src = el.src;
    
  }
  return (
    <>
      <div className="container containerConteudo-ProductInfoMain  col-12 col-md-11">

        <div className="container container-imagem">

          <div className="row">
            <div className="col-12 col-lg-5 ">
              <img src={props.MainImg} className="img-thumbnail imgMaior" alt="ImagemPrincipal" />

              <div className="row miniImg">
                <div className="col-3">
                  <img src={props.miniImg1} className="img-thumbnail" alt="Imagem2" onClick={ ()=> trocarImagem() } />
                </div>
                <div className="col-3">
                  <img src={props.miniImg2} className="img-thumbnail" alt="Imagem3" />
                </div>
                <div className="col-3">
                  <img src={props.miniImg3} className="img-thumbnail" alt="Imagem4" />
                </div>


              </div>
            </div>

            <div className="ContainerInfoProduto col-12 col-lg-7">

              <div className="infoBonecos">
                <div className="row align-items-center">
                  <h2 className="nomeBebe col-9 col-md-10">{props.nameProduct}</h2>

                  <div className="col-3 col-md-2"><img src={Heart} className="imgFav" /></div>
                </div>

                <div className="row row-marca-codigo">
                  <div className="produtoSubtitulo col-md-6 col-12">CÓDIGO: {props.codeProduct} </div>
                  <div className="produtoSubtitulo v2 col-md-6 col-12"> MARCA: {props.brand} </div>
                </div>

                <div className="precoContainer row">
                  <div className="nomeBebe PrecoBebeInfo ">R$ {props.price}</div>
                  <div className=" PrecoBebeInfoDescricao">Em até 10x de R$ {props.parcel} sem juros</div>

                  <div className="row botoesInfoProduto">
                    <input type="button" className="subtrair col-lg-1 col-md-1 col-2" name="menos" id="menos" value="-" />
                    <input type="text" className="campo-qtd col-lg-1 col-md-1 col-2" name="format" value="0" id="format" size="2" />
                    <input type="button" className="adicionar col-lg-1 col-md-1 col-2" name="mais" id="mais" value="+" />

                      <Link to="../cart" className="col-xl-6 col-lg-10 col-md-5 col-12 " ><button className="btn btnAdicionarAoCarrinho "
                      type="submit">Adicionar Ao Carrinho</button></Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>

    </>
  )
}


function id(el) {
  return document.getElementById(el);
}
window.onload = function () {
  id('mais').onclick = function () {
    id('format').value = parseInt(id('format').value) + 1;


  }
  id('menos').onclick = function () {
    if (id('format').value > 0)
      id('format').value = parseInt(id('format').value) - 1;


  }
}




export default ProductInfoMain