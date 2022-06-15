import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import './Nav.css'
import Product1 from "../../pages/boyProduct/BoyProduct"


function Nav() {


    const[user,setUser]  = useState("");


const getUser = () =>{
 setUser (localStorage.getItem('UserName'))

}
useEffect(() => {
    getUser()
  }, []);
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
                        <Link to="/boyProduct" className="dropdown-item" >Meninos</Link>
                    </li>
                    <li>
                         <Link to="/accessories" className="dropdown-item" >Acessórios</Link>
                    </li>
                </ul>

                <li className="nav-item menu-li">
                    <Link to="/exchangesReturn" className="nav-link menu-a" >Trocas & Devoluções</Link>
                </li>
                <li className="nav-item menu-li">
                    <Link to="/Contact" className="nav-link menu-a" >Atendimento</Link>
                </li>
                {user &&(
                <li className="nav-item menu-li">
                    <Link to="/profile" className="nav-link menu-a">Meu Perfil</Link>
                </li>)}{!user &&( <li className="nav-item menu-li">
                   
                </li>)}
            </ul>


            
        </>
    )
}


export default Nav