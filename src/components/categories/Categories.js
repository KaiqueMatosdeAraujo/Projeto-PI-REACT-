import './Categories.css'
import Boys from '../../components/card/imgs/categoriaMenino.png'
import Girls from '../../components/card/imgs/categoriaMenina.png'
import Acessories from '../../components/card/imgs/categoriaAcessorios.png'
import { Link } from 'react-router-dom'
function Categories() {
    return (
        <>
        <div className="categorias">
                <Link to="/product" className="cat-menina">
                    <img className="img-cat" src={ Boys } width="300px" height="200px"/></Link>
                <Link to="/product" className="cat-menino" >
                    <img className="img-cat" src={ Girls } width="300px" height="200px"/></Link>
                <Link to="/product" className="cat-acessorio">
                    <img className="img-cat" src={ Acessories } width="300px" height="200px"/></Link>
            </div>

        </>
    )
}

export default Categories