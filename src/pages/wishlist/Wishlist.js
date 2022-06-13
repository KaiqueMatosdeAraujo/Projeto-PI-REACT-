import './Wishlist.css'

import bebe1 from './img_wishlist/bebe1.png'
import bebe2 from './img_wishlist/bebe2.jpg'
import bebe3 from './img_wishlist/bebe3.jpg'
import ListProduct from '../../components/productWishlist/ProductWishlist'
import Header from '../../components/header/Header'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import { useEffect, useState } from 'react'



function Wishlist(props) {

    const favoritos = JSON.parse(localStorage.getItem('favorite'))
    console.log(favoritos)
    // const [successDelete, setsuccessDelete] = useState(false);

    // useEffect(() => {
      
    //  }, [successDelete]); 

    const listFavoritos = () => {
        return favoritos == null ? (
            <div>vazio</div>
        ) : (
        favoritos.map((item) => {
            return (
                <>
                    <div className="row row-wishlist">
                        <div className="produtosFav row">
                            <div className="col-lg-12">

                                <ListProduct image={item.imgProduto} name={item.nome} codigo={item.codProduto} valor={item.preco} product={item} />

                            </div>
                        </div>
                    </div>
                </>
            )
        })
        )
    }

    return (
        <>
            {listFavoritos()}
        </>
    )
}
export default Wishlist