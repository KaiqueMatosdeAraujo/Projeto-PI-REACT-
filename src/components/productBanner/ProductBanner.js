import './ProductBanner.css'
import BannerPagamento from './imgs/banner-categorias-pagamento.png'

function ProductBanner() {
    return (
        <>
                <img src={BannerPagamento} alt="" className='imagemBanner'/>
        </>
    )
}

export default ProductBanner