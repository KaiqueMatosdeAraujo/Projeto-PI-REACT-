import './TabsMyAccount.css'
import { Link } from 'react-router-dom'
import Wishlist from '../../pages/wishlist/Wishlist'
import Assessments from '../assessments/Assessments'

function TabsMyAccount(props) {
    return (
        <>
            <ul className="nav nav-tabs">

                <li className="nav-item">
                    <Link to="" className="nav-link active disabled" tabindex="-1" aria-disabled="true" >Minha conta</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Wishlist" className="nav-link disabled" tabindex="-1" aria-disabled="true" >Favoritos</Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link disabled" tabindex="-1" aria-disabled="true">Pedidos</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Assessments" className="nav-link disabled" tabindex="-1" aria-disabled="true">Avaliação</Link>
                </li>

            </ul>
            <link to="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </>
    )
}



export default TabsMyAccount

