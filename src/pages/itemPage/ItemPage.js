import { Link } from 'react-router-dom'
import Freight from '../../components/freightBanner/FreightBanner'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import RelatableContainer from '../../components/relatableProductsContainer/RelatableProductsContainer'
import InfoMain from '../../components/productInfoMain/ProductInfoMain'
import Description from '../../components/productInfoDescription/ProductInfoDescription'




import MainImage from '../../pages/product/imgs/camila.jpg'
import MiniImg1 from '../../pages/product/imgs/detalheCamila.jpg'
import MiniImg2 from '../../pages/product/imgs/detalheCamila2.jpg'
import MiniImg3 from '../../pages/product/imgs/detalheBanheiraCamila.jpg'



function ItemPage() {
    return (
        <>
  <div className="bgPage">
            <Freight />
            <Header />
            <Nav />
            <InfoMain
                nameProduct="Bebê Reborn Camila"
                MainImg={MainImage}
                miniImg1={MiniImg1}
                miniImg2={MiniImg2}
                miniImg3={MiniImg3}
                codeProduct="48002"
                brand="PIMPOLHOS"
                price="459,00"
                parcel="45,90" />
            <br />
            <Description className="lastContainer"
                sex="Menina"
                size="55"
                material="100% de silicone"
                weight="1.500 g"
                content="Um bebe reborn + Roupas igual da foto + Chupeta Magnética + Mamadeira + Certidão de Nascimento" />

            <br />
            <RelatableContainer>
            </RelatableContainer>
            <Footer />
            </div>
        </>
    )
}
export default ItemPage