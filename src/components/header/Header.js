import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../header/imgs/logo-pimpolhos-certo.png';
import user from '../header/imgs/baby-user.png';
import SearchIcon from '../header/imgs/search.png'
import Logo from '../header/imgs/logo-pimpolhos-certo.png'
import BabyUser from '../header/imgs/baby-user.png'
import MiniCartButton from '../../components/miniCartButton/MiniCartButton';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../environments/environments'
import { useHistory } from 'react-router-dom'

function Header() {
    const userName = localStorage.getItem('UserName')
    const [search, setSearch] = useState("");
    let history = useHistory()
  

    const searchProducts = () => {
        history.push(`/resultsearch/${search}`)
    }

     const buscaInput = (e) => {
        if (e.keyCode === 13) {
            const valor = e.target.value;
            console.log(valor);
        }
    }
    function logout() {
        localStorage.clear()
    }

   





   



    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark headerNavBar ">
                    <div className="container-fluid">
                        <a className="navbar-brand" ><Link to="/"><img src={Logo} alt="Logo" width="150 px" /> </Link></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse row" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 row">

                                <li className="nav-item navSearch col-lg-7 col-11 ">
                                    <div className="d-flex boxSearch">

                                        <input className="form-control me-2" type="search" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => buscaInput(e)} placeholder="Procure aqui " aria-label="Search" />
                                        <button className="btn" type="submit" onClick={() => searchProducts()}><img src={SearchIcon} alt="Logo" width="25px" /></button>
                                    </div>


                                </li>
                                <li className="nav-item col-lg-2 col-md-6 col-4">
                                    <Link to="/cart"> <MiniCartButton totalCart="9.900,00" /></Link>
                                </li>
                                <li className="nav-item   col-xl-2 col-lg-3 col-md-5 col-7">
                                        
                                   {!userName && (
                                   
                                   <div className="row navLinks">
                                        <img src={BabyUser} className="babyPngUser col-1" />
                                   <a className="nav-link active col-xl-6 col-lg-5 col-md-4 col-sm-3 col-7" aria-current="page" ><Link to="../register"> Cadastre-se</Link> </a>
                                        <div className="supportphrase col-2">ou</div>
                                        <a className="nav-link active col-xl-7 col-lg-6 col-md-5 col-sm-4 col-7 loginLink" aria-current="page"> <Link to="../login">  Faça seu Login</Link></a>
                                        </div>)
                                        }{userName &&(
                                        <div className="row navLinks">
                                        <img src={BabyUser} className="babyPngUser col-1" />
                                   <a className="nav-link active col-xl-7 col-lg-5 col-md-4 col-sm-3 col-7" aria-current="page" ><Link to="../teste"> Olá, {userName}</Link> </a>
                                        
                                        <a className="nav-link active col-xl-6 col-lg-5 col-md-4 col-sm-3 col-7 " onClick={logout}> <Link to="../login">Sair</Link> </a>
                                        </div>)}
                                      
                                        
                                      
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>

            </header>



        </>
    )

}

export default Header