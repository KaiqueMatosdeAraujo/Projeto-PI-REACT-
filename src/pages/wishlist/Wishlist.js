import './Wishlist.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import bebe1 from './img_wishlist/bebe1.png'
import bebe2 from './img_wishlist/bebe2.jpg'
import bebe3 from './img_wishlist/bebe3.jpg'
import ListProduct from '../../components/productWishlist/ProductWishlist'



function Wishlist() {
    return (
        <>
          

            <div className="titleCard" id="titleCardMinhaConta">

                <div className="nome row">
                    <div className="col-12">
                        <h1>Lista de Desejos</h1>
                    </div>
                </div>

                <div className="row row-wishlist">
                    <div className="produtosFav row">
                        <div className="col-lg-12">

                            <ListProduct image={bebe1} name="Bebê Reborn Guilherme" codigo="S48002" valor="549,00" />
                            <ListProduct image={bebe2} name="Bebe Reborn Nicole Pandinha" codigo="S48004" valor="569,00" />
                            <ListProduct image={bebe3} name="Bebe Reborn Leo Sonequinha" codigo="S48044" valor="299,99" />

                        </div>
                    </div>
                </div>
            </div>

         
        </>
    )
}
export default Wishlist