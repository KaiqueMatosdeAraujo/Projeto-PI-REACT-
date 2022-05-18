import React, { useContext } from 'react';
import CardProduct from '../cardProduct/CardProduct'
import ItemCart from "../itemCart/itemCart"
import './ProductList.css'
function ProductList(props) {


    const products = props.products || []

    const listProducts = () => {
        return (
            products.length == 0
                ? <h2>Carrinho Vazio</h2>
                : products.map((item) => {
                    return (
                        <>
                             { props.cart 
                            ?  <div className="cart-item">
                               <form action="" style={{backgroundColor:'white'}}>
                            <ItemCart doll1={item.imgProduto}  id={item.codProduto} name={item.nome} price={item.preco} product={item} />
                            </form>
                            </div>

                            : <div className="cardsHome">
                                <CardProduct Image={item.imgProduto} Name={item.nome} price={item.preco} product={item} parcel="61,90"></CardProduct>
                            </div>

                        }
                        </> 
                   )
                })
        )
    }

    return (
<>
            {listProducts()}
      </>
    )
}

export default ProductList;

