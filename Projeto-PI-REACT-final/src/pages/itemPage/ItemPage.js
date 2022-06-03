import { useParams } from 'react-router-dom'
import './ItemPage.css'
import Freight from '../../components/freightBanner/FreightBanner'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import RelatableContainer from '../../components/relatableProductsContainer/RelatableProductsContainer'
// import Heart from '../card/imgs/heart (2).png'
import Heart from '../../components/card/imgs/heart (2).png'
import CartContext from "../../context/cart.provider";
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () =>
  toast.success("Adicionado ao carrinho ", {
    position: "top-right",
  });

function ItemPage(props) {

  const { addToCart } = useContext(CartContext);
  const { codProduto } = useParams()
  const [product, setProduct] = useState({})
  const { alterarQuantidade } = useContext(CartContext);



  let parcela = product.preco / 10;
  let parcelaFormatada = parseFloat(parcela.toFixed(2));
  let parcel = parcelaFormatada.toLocaleString("pt-br", { minimumFractionDigits: 2, });




  useEffect(() => {
    getProduct()
    // setProductDetails(amount)
  }, [])

  const getProduct = () => {
    axios.get(`http://localhost:8080/produto/${codProduto}`)
      .then((response) => {
        setProduct(response.data)

      })
  }


  return (
    <>
      <div className="bgPage">
        <Freight />
        <Header />
        <Nav />
        <div className="container containerConteudo-ProductInfoMain  col-12 col-md-11">

          <div className="container container-imagem">

            <div className="row imgMaiorFlex">
              <div className="imgProduto col-12 col-lg-5 col-md-10">

                <img src={product.imgProduto} className="img-thumbnail imgMaior" alt="ImagemPrincipal" />

              </div>

              <div className="ContainerInfoProduto col-12 col-lg-7">

                <div className="infoBonecos">
                  <div className="row align-items-center">
                    <h2 className="nomeBebe col-9 col-md-10">{product.nome}</h2><br/>

                    <div className="col-3 col-md-2"><img src={Heart} className="imgFav" /></div>
                  </div>

                  <div className="row row-marca-codigo">
                    <div className="produtoSubtitulo col-md-6 col-12">CÓDIGO: {product.codProduto} </div>
                   
                  </div>



                  <div className="precoContainer row">
                    <div className="nomeBebe PrecoBebeInfo ">R$ {product.preco},00</div> <br/><br/>
                    <div className=" PrecoBebeInfoDescricao">Em até 10x de R$ {parcel} sem juros</div>


                  </div>


                  <div className="row botoesInfoProduto">

                    
                    <button
                      type="button"
                      className="comprar"
                      onClick={() => {
                        addToCart(product);
                        notify();
                      }}
                    >
                      <strong>Adicionar ao Carrinho</strong>
                    </button>

                  </div>



                  <ToastContainer autoClose={500} />
                </div>
              </div>

            </div>
          </div>


        </div>
        <br />

        <div class="container  containerConteudo col-11">

          <h4 class="nomeBebe ">Descrição técnica:</h4>
          <br />
          <div class="row ">



            <div class="row">
              <span class="descricaoTecSubTitles nomeBebe">Tamanho:</span>
              <span class="descricaoTecContent">{product.dimensao} </span>
            </div>

            <div class="descricaoTecSubTitles nomeBebe"> Marca:</div>
            <div class="descricaoTecContent">Pimpolhos</div>

            <div class="descricaoTecSubTitles nomeBebe"> Material:</div>
            <div class="descricaoTecContent">{product.material}</div>

            <div class="descricaoTecSubTitles nomeBebe"> Peso:</div>
            <div class="descricaoTecContent"> Cerca de {product.peso} kg</div>

            <div class="descricaoTecSubTitles nomeBebe"> Acompanha:</div>
            <div class="descricaoTecContent">{product.conteudoProduto} </div>
          </div>

        </div>
        <br />
        <RelatableContainer>
        </RelatableContainer>
        <Footer />
      </div>
    </>
  )
}
export default ItemPage