import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import './BoyProduct.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FreightBanner from '../../components/freightBanner/FreightBanner'
import ProductBanner from '../../components/productBanner/ProductBanner'
import Pagination  from '../../components/pagination/Pagination'
import  Nav  from '../../components/nav/Nav'
import Filter from '../../components/filter/Filter'
import axios from 'axios'
import ProductList from '../../components/productList/ProductList'




function Product(props) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        axios.get('http://localhost:8080/produto/buscarCategoria?cod_categoria=1').then((response) => {
            setProducts(response.data)
        })
    }
    return (
        <>
            <FreightBanner />
            <Header />
            <Nav />
            <ProductBanner />
            
            
            <div className="row rowCentralized nomePagina">
                <h2>MENINOS</h2>
            </div>

            <Filter />

            <div className="cardsHome">
                <ProductList products={products}/>

            </div>
           

            <Pagination />
            <Footer/>
        </>
    )
}

export default Product