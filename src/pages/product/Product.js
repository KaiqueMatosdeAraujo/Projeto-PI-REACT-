import './Product.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FreightBanner from '../../components/freightBanner/FreightBanner'
import ProductBanner from '../../components/productBanner/ProductBanner'
import Pagination  from '../../components/pagination/Pagination'
import CardP from '../../components/cardProduct/CardProduct'
import emilly from './imgs/emilly.jpg'
import bruna from './imgs/bruna.jpg'
import bianca from './imgs/bianca1.jpg'
import alice from './imgs/alice.jpg'
import mayara from './imgs/mayara.jpg'
import renata from './imgs/renata.jpg'
import joelma from './imgs/joelma.jpg'
import camila from './imgs/camila.jpg'
import  Nav  from '../../components/nav/Nav'


function Product(props) {
    return (
        <>
            <FreightBanner />
            <Header />
            <Nav />
            <ProductBanner />
            
            
            <div className="row nomePagina">
                <h2>MENINAS</h2>
            </div>

            <div className="cards">
                <CardP Image={ emilly } Name="Bebê Reborn Emilly" price="619" parcel="61,90"/>
                <CardP Image={ bruna } Name="Bebê Reborn Bruna" price="499" parcel="49,90"/>
                <CardP Image={ bianca } Name="Bebê Reborn Bianca" price="599" parcel="59,90"/>
                <CardP Image={ alice } Name="Bebê Reborn Alice" price="659" parcel="65,90"/>
            </div>

            <div className="cards">
                <CardP Image={ mayara } Name="Bebê Reborn Mayara" price="799" parcel="79,90"/>
                <CardP Image={ renata } Name="Bebê Reborn Renata" price="659" parcel="65,90"/>
                <CardP Image={ joelma } Name="Bebê Reborn Joelma" price="619" parcel="61,90"/>
                <CardP Image={ camila } Name="Bebê Reborn Camila" price="459" parcel="45,90"/>
            </div>
           

            <Pagination />
            <Footer/>
        </>
    )
}

export default Product