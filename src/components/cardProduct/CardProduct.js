import { Link } from 'react-router-dom'
import React, { useContext } from 'react';
import './CardProduct.css'
import Heart from './imgs/heart (2).png'
import CartContext from '../../context/cart.provider'

function CardProduct(props) {
    const { addToCart } = useContext(CartContext)

    return (
        
        <>
            <div className="cards">
                <div className="container-card">
                    <ul className="lista-produtos">
                        <li className="item-produto">
                            <div className="fav">
                                <a className="fav-icon"><img src={ Heart }width="25px" height="25px" /></a>
                                <br />
                            </div>
                            <img src={ props.Image } className="imagem-produto" width="215" height="215" />
                            <br />
                            <Link to="../paginas/PaginaItem2.html"><div className="nome-produto">{props.Name}</div></Link>

                            <div className="precos">
                                <div className="preco">R$ {props.price},00</div>
                                <div className="parcelado">OU 10X DE R$ {props.parcel}</div>
                            </div>

                            <button type="button" className="comprar" onClick={() => addToCart(props.product)}>Comprar</button>

                        </li>
                    </ul>
                </div>
            </div>
               
            </>

            )
}


            export default CardProduct