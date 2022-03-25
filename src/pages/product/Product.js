import { Link } from 'react-router-dom'

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
import ItemPage from '../itemPage/ItemPage'
import Filter from '../../components/filter/Filter'


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

            <Filter />

            <div className="cards">
            <Link to="/ItemPage" > <CardP Image={ emilly } Name="Bebê Reborn Emilly" price="619" parcel="61,90"/></Link>
            <Link to="/ItemPage" > <CardP Image={ bruna } Name="Bebê Reborn Bruna" price="499" parcel="49,90"/></Link>
            <Link to="/ItemPage" > <CardP Image={ bianca } Name="Bebê Reborn Bianca" price="599" parcel="59,90"/></Link>
            <Link to="/ItemPage" >  <CardP Image={ alice } Name="Bebê Reborn Alice" price="659" parcel="65,90"/></Link>
            </div>

            <div className="cards">
               <Link to="/ItemPage" ><CardP Image={ mayara } Name="Bebê Reborn Mayara" price="799" parcel="79,90"/></Link>
               <Link to="/ItemPage" ><CardP Image={ renata } Name="Bebê Reborn Renata" price="659" parcel="65,90"/></Link>
               <Link to="/ItemPage" ><CardP Image={ joelma } Name="Bebê Reborn Joelma" price="619" parcel="61,90"/></Link>
               <Link to="/ItemPage" ><CardP Image={ camila } Name="Bebê Reborn Camila" price="459" parcel="45,90"/></Link>
            </div>
           

            <Pagination />
            <Footer/>
        </>
    )
}

export default Product