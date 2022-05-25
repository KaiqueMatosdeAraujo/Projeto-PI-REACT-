import './Pagination.css'
import { Link } from 'react-router-dom'

function Pagination() {
    return (
        <>
           <div className="paginacao1">
                <nav aria-label="Page navigation example" className="text-center">
                    <ul className="pagination">
                        <li className ="page-item"><Link to="product" className="page-link paginacao">1</Link></li>
                        <li className ="page-item"><Link to="product" className="page-link paginacao">2</Link></li>
                        <li className ="page-item"><Link to="product" className="page-link paginacao">3</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Pagination