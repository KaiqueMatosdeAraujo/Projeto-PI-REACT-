import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../header/imgs/logo-pimpolhos-certo.gif';
import user from '../header/imgs/baby-user.png';
import Cart from './imgs/cart.png'
function Header(props) {
    return (
        <>
            <header>
               <div className="container-fluid noPadding">
                    <nav className="navbar navbar-expand-lg custom-nav">
                        <div className="container-fluid containerHeader noPadding">
                            
                        <Link to="/"><img src={logo} alt="Logo" className='logo'/></Link>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex custom-form ">
                                <input className="form-control me-2" type="search" placeholder="Pesquise" aria-label="Search"/>
                            </form>
                            

                            <div className="teste2">
                                <button type="button" className="btn custom-btn cart ">
                                     <p><Link to="/cart"><span className="cartIcon"></span>| 0,00</Link></p>
                                </button>

                                <span className="login-cadatro ">
                                <img src={user} alt="User" className='icone'/> 
                                    <p><Link to="../login"> login ou</Link>  <br/><Link to="../register">cadastre-se</Link></p>
                                </span>
                            </div>
                        </div>
                        </div>
                    </nav>
                </div>
            </header>


            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>
           
        </>
    )
}

export default Header