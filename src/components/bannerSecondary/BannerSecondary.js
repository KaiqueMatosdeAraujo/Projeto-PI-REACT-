import './BannerSecondary.css'
import Mobile from '../../components/card/imgs/bannerDuckMobile.png'
import Delivery from '../../components/card/imgs/bannerDelivery.png'

function BannerSecondary() {

    return (

        <>

            <div className="banner-mobile">
                <img src={ Mobile } className="img-mobile" width="100%" height="450px"/>
            </div>


            <div className="banner-entrega">
                <img src={ Delivery } className="entregaImg"/>
            </div>
        </>
    )
}

export default BannerSecondary