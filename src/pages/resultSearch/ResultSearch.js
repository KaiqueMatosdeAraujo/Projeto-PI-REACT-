import { Link, useParams } from 'react-router-dom'

import './resultSearch.css'
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
import axios from 'axios';
import { useEffect, useState } from 'react'
import {baseUrl} from '../../environments'




function ResultSearch(props) {
    const {name} = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        searchProducts()
    }, []);

    const searchProducts = () => {
        axios.get(`${baseUrl}/produto/buscar?nome=${name}`)
            .then((response) => {
                console.log(response.data)
                setProducts(response.data)
            })
            .catch((error) => {
                console.error("Ops! ocorreu um erro" + error)
            })
    }

    return (
        <>
            <FreightBanner />
            <Header />
            <Nav />
            <ProductBanner />
            
            
            <div className="row rowCentralized nomePagina">
                <h2>Resultados para: {name}</h2>
            </div>

            <Filter />

            <div className="cards-home">
                {products.map((item) => {
                    return(
                        <Link to="/ItemPage" > <CardP Image={ item.imgProduto } Name={item.nome} price={item.preco} parcel="61,90"/></Link>
                    )

                })}
           
            
            </div>
           

            <Pagination />
            <Footer/>
        </>
    )
}

export default ResultSearch