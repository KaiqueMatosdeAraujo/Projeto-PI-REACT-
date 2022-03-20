import { Link } from 'react-router-dom'


import lixeira from '../../pages/cart/imgs/lixeira.png'

function ItemCart(props) {
    return (

        <>

            {/* <div className="menu-produto col-12">
                <ul className="sub-produto">
                    <li className="img-produto">
                        <img src={props.doll1} className="doll1" width="100px" height="100px" />
                    </li>
                    <li className="descricao-produto">{props.name}</li>
                    <li className="sub-preco">R${props.price}</li>
                    <li className="qtd">
                        <input type="button" className="adicionar" name="mais2" id="mais2" value="+" />
                        <input type="text" className="campo-qtd" name="format2" value="0" id="format2" size="2" />
                        <input type="button" className="subtrair" name="menos2" id="menos2" value="-" />
                    </li>
                    <li className="sub-total">R${props.total}</li>
                    <li className="lixeira">
                        <img src={lixeira} alt="lixeira" width="30px" height="30px" />
                    </li>
                </ul>

                
            </div> */}

            <div className="cart-product">
                <div className="cart-image">
                    <img src={props.doll1} className="doll1" width="100px" height="100px" />
                </div>
                <div className="cart-product-info">
                    <p className="cart-product-name">{props.name}</p>
                    <p className="cart-price-sm">R$399,90</p>
                    <small>x 1</small>
                </div>
            </div>
            <div className="remove-1">
                    <img src={lixeira} alt="lixeira" width="30px" height="30px" />
                </div>
            <div className="cart-quantity-md">
                
                <div className="cart-quantity-controls">
                    <button className="btn-menos">-</button>
                    <input className="number-qtd" type="number" value="1" />
                    <button className="btn-mais">+</button>
                </div>
            </div>
            <div className="cart-unit-price">
                <h4>R${props.price}</h4>
            </div>
            <div className="cart-product-total">
                <h4>R${props.total}</h4>
            </div>

            <div className="cart-controls-sm">
                <div className="remove">
                    <img src={lixeira} alt="lixeira" width="30px" height="30px" />
                </div>
                <div className="quantity-controls-sm">
                    <button className="btn-menos">-</button>
                    <input className="number-qtd" type="number" value="1" />
                    <button className="btn-mais">+</button>

                </div>
            </div>







        </>
    )
}

export default ItemCart