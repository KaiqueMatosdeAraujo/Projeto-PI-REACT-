import './BannerCarrousel.css'
import Banner1  from './../card/imgs/bannerDuckDesktop.jpg'
import Banner2  from './../card/imgs/bannerDolls.jpg'
import Banner3  from './../card/imgs/bannerLogo.webp'



function BannerCarrousel() {
    return (
        <>



            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ Banner1 } className="banner" width="100%" height="330px"/>
                    </div>
                    <div className="carousel-item">
                        <img src={ Banner2 } className="banner" width="100%" height="330px" />
                    </div>
                    <div className="carousel-item">
                        <img src={ Banner3 } className="banner" width="100%" height="330px" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </>
    )

}

export default BannerCarrousel