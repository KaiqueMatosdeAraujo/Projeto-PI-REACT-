import { Link, useParams } from 'react-router-dom'

import './ResultSearch.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FreightBanner from '../../components/freightBanner/FreightBanner'
import ProductBanner from '../../components/productBanner/ProductBanner'
import CardP from '../../components/cardProduct/CardProduct'
import  Nav  from '../../components/nav/Nav'
import ItemPage from '../itemPage/ItemPage'
import Filter from '../../components/filter/Filter'
import axios from 'axios';
import { useEffect, useState } from 'react'
import {baseUrl} from '../../environments/environments'
import ProductList from "../../components/productList/ProductList";




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

            
            <div className="cardsHome">
                <ProductList products={products} />
            </div>
           
            <Footer/>
        </>
    )
}

export default ResultSearch