import './Filter.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Filter() {
    return (
        <>
            <Header/>
            <div className="row justify-content-end">
                <div className="col-6 col-md-3 col-lg-2">
                    <select className="form-select inputFiltro" aria-label="Default select example">
                        <option selected>Ordenar Por :</option>
                        <option value="1">Maior Preço</option>
                        <option value="2">Menor Preço</option>
                        <option value="3">Mais Vendidos</option>
                    </select>
                </div>
            </div>
            {/*<Footer/>*/}
        </>
    )
}

export default Filter