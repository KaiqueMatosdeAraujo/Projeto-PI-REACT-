import './Filter.css'


function Filter() {
    return (
        <>
            <div className="row justify-content-end row-filter">
                <div className="col-7 col-md-3 col-lg-2">
                    <select className="form-select inputFiltro" aria-label="Default select example">
                        <option selected>Ordenar Por :</option>
                        <option value="1">Maior Preço</option>
                        <option value="2">Menor Preço</option>
                        <option value="3">Mais Vendidos</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Filter