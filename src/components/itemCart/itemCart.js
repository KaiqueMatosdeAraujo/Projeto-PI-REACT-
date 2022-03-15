import { Link } from 'react-router-dom'


import lixeira from '../../pages/cart/imgs/lixeira.png'

function ItemCart(props) {
    return (

        <>

            <div className="menu-produto col-12">
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

                
            </div>
            





        </>
    )
}

export default ItemCart