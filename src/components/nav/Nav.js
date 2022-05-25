import { Link } from 'react-router-dom'
import './Nav.css'




function Nav() {
    return (
        <>

            <ul className="menu nav menu-a">
                <Link to="" className="nav-link-nav dropdown-toggle" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                </Link>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                        <Link to="/product" className="dropdown-item" >Meninas</Link>
                    </li>
                    <li>
                        <Link to="/product" className="dropdown-item" >Meninos</Link></li>
                    <li>
                        
                    </li>
                    <li><Link to="/product" className="dropdown-item" >Acessórios</Link></li>
                </ul>

                <li className="nav-item menu-li">
                    <Link to="/exchangesReturn" className="nav-link menu-a" >Trocas & Devoluções</Link>
                </li>
                <li className="nav-item menu-li">
                    <Link to="/Contact" className="nav-link menu-a" >Atendimento</Link>
                </li>
                <li className="nav-item menu-li">
                    <Link to="/profile" className="nav-link menu-a">Meu Perfil</Link>
                </li>
            </ul>


            
        </>
    )
}


export default Nav