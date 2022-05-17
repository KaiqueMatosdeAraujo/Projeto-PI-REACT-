import React, { useContext } from 'react';
import CardProduct from '../cardProduct/CardProduct'
import ItemCart from "../itemCart/itemCart"
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
                            ? <ItemCart   name={item.nome} price={item.preco}  unity="399,99" total="399,99"/>
                            : <div className="cards-home">
                                <CardProduct Image={item.imgProduto} Name={item.nome} price={item.preco} product={item} parcel="61,90"></CardProduct>
                            </div>

                        }
                        </> 
                   )
                })
        )
    }

    return (
        <ul>
            {listProducts()}
        </ul>
    )
}

export default ProductList;

