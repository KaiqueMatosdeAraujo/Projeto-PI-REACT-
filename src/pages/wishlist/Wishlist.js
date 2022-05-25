import './Wishlist.css'

import bebe1 from './img_wishlist/bebe1.png'
import bebe2 from './img_wishlist/bebe2.jpg'
import bebe3 from './img_wishlist/bebe3.jpg'
import ListProduct from '../../components/productWishlist/ProductWishlist'
import Header from '../../components/header/Header'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'



function Wishlist() {
    return (
        <>
          
          
           

                

                <div className="row row-wishlist">
                    <div className="produtosFav row">
                        <div className="col-lg-12">

                            <ListProduct image={bebe1} name="Bebê Reborn Guilherme" codigo="S48002" valor="549,00" />
                            <ListProduct image={bebe2} name="Bebe Reborn Nicole Pandinha" codigo="S48004" valor="569,00" />
                            <ListProduct image={bebe3} name="Bebe Reborn Leo Sonequinha" codigo="S48044" valor="299,99" />

                        </div>
                    </div>
                </div>
        
  
         
        </>
    )
}
export default Wishlist