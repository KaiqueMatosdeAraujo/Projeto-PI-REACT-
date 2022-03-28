import { useState } from "react";
import './tabs.css'
import WishList from '../../pages/wishlist/Wishlist'
import MyAccount from '../../pages/myAccount/MyAccount'
import MyRequests from '../../components/myRequests/MyRequests'
import Review from '../../components/assessments/Assessments'
import User from '../../pages/profile/imgs/user.png'
import Checklist from '../../pages/profile/imgs/checklist.png'
import Desejos from '../../pages/profile/imgs/desejos.png'

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className=" container container-profile navtabContainer">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabsProfile active-tabs" : "tabsProfile"}
                    onClick={() => toggleTab(1)}
                >
                    <div className="row rowCentralized">
                        <div className="col-md-2 col-2">
                            <img src={User} alt="" className='emotes' /></div>
                        <div className="col-9 col-5">Minha Conta</div>
                    </div>
                </button>
                <button
                    className={toggleState === 2 ? "tabsProfile active-tabs" : "tabsProfile"}
                    onClick={() => toggleTab(2)}
                >
                     <div className="row rowCentralized">
                        <div className="col-2">
                            <img src={Checklist} alt="" className='emotes' /></div>
                        <div className="col-9">Meus Pedidos</div>
                    </div>
                </button>
                <button
                    className={toggleState === 3 ? "tabsProfile active-tabs" : "tabsProfile"}
                    onClick={() => toggleTab(3)}
                >
                      <div className="row rowCentralized">
                        <div className="col-2">
                            <img src={Desejos} alt=""  /></div>
                        <div className="col-10">Lista de Desejos</div>
                    </div>
                </button>
                <button
                    className={toggleState === 4 ? "tabsProfile active-tabs" : "tabsProfile"}
                    onClick={() => toggleTab(4)}
                >  <div className="row rowCentralized">
                <div className="col-2">
                    <svg className="svgReview" width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 13.9163C19.0477 13.4281 17.9663 13.2507 16.9079 13.4092C15.8496 13.5676 14.8675 14.0539 14.1 14.7997C13.1637 15.7372 12.6377 17.008 12.6377 18.333C12.6377 19.658 13.1637 20.9288 14.1 21.8663L18.8167 26.6663C18.9716 26.8226 19.1559 26.9465 19.359 27.0312C19.5621 27.1158 19.78 27.1593 20 27.1593C20.22 27.1593 20.4379 27.1158 20.641 27.0312C20.8441 26.9465 21.0284 26.8226 21.1833 26.6663L25.9 21.9497C26.8363 21.0122 27.3623 19.7413 27.3623 18.4163C27.3623 17.0913 26.8363 15.8205 25.9 14.883C25.1421 14.1237 24.1646 13.6218 23.1059 13.4483C22.0471 13.2748 20.9606 13.4386 20 13.9163ZM23.5333 19.5163L20 23.0497L16.4667 19.5163C16.3105 19.3614 16.1865 19.1771 16.1019 18.974C16.0172 18.7709 15.9737 18.553 15.9737 18.333C15.9737 18.113 16.0172 17.8951 16.1019 17.692C16.1865 17.4889 16.3105 17.3046 16.4667 17.1497C16.7789 16.8393 17.2014 16.665 17.6417 16.665C18.082 16.665 18.5044 16.8393 18.8167 17.1497C18.9716 17.3059 19.1559 17.4299 19.359 17.5145C19.5621 17.5991 19.78 17.6427 20 17.6427C20.22 17.6427 20.4379 17.5991 20.641 17.5145C20.8441 17.4299 21.0284 17.3059 21.1833 17.1497C21.4956 16.8393 21.918 16.665 22.3583 16.665C22.7986 16.665 23.2211 16.8393 23.5333 17.1497C23.6896 17.3046 23.8135 17.4889 23.8982 17.692C23.9828 17.8951 24.0263 18.113 24.0263 18.333C24.0263 18.553 23.9828 18.7709 23.8982 18.974C23.8135 19.1771 23.6896 19.3614 23.5333 19.5163ZM20 3.33301C17.8113 3.33301 15.644 3.7641 13.6219 4.60168C11.5999 5.43926 9.76254 6.66692 8.21489 8.21456C5.08929 11.3402 3.33334 15.5794 3.33334 19.9997C3.31877 23.8482 4.65133 27.5806 7.10001 30.5497L3.76667 33.883C3.53541 34.1174 3.37875 34.415 3.31646 34.7383C3.25417 35.0616 3.28904 35.3962 3.41667 35.6997C3.5551 35.9996 3.77951 36.2515 4.06142 36.4237C4.34332 36.5958 4.67001 36.6802 5.00001 36.6663H20C24.4203 36.6663 28.6595 34.9104 31.7851 31.7848C34.9107 28.6592 36.6667 24.4199 36.6667 19.9997C36.6667 15.5794 34.9107 11.3402 31.7851 8.21456C28.6595 5.08896 24.4203 3.33301 20 3.33301ZM20 33.333H9.01667L10.5667 31.783C10.8771 31.4707 11.0513 31.0483 11.0513 30.608C11.0513 30.1677 10.8771 29.7453 10.5667 29.433C8.38432 27.2531 7.0253 24.3839 6.72116 21.3143C6.41702 18.2448 7.18658 15.1647 8.89872 12.5989C10.6109 10.0331 13.1597 8.14027 16.1109 7.24296C19.0621 6.34565 22.2331 6.49935 25.0837 7.67786C27.9343 8.85638 30.2881 10.9868 31.7441 13.7062C33.2 16.4255 33.6681 19.5656 33.0686 22.5914C32.469 25.6171 30.8389 28.3414 28.4559 30.3001C26.073 32.2587 23.0846 33.3306 20 33.333Z"
                            fill="black" />
                    </svg></div>
                <div className="col-9">Avaliações</div>
            </div>
               
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "tab-content active-content" : "content"}
                >
                    <div className="titleCard">
                        
                    <h2 className='tabInfoTitle'>Minha Conta</h2> 
                    <MyAccount />
                    </div>
                </div>

                <div
                    className={toggleState === 2 ? "tab-content  active-content" : "content"}
                ><div className="titleCard">
                    <h2 className='tabInfoTitle'>Meus Pedidos</h2> 
                    <MyRequests     status = "Processando pagamento"
                        data = "27/02/2022"
                        price = "549,00"
                        methodPayment = "Cartão de crédito"
                        cardNumber = "4658 ** ** 9867"/>
                    </div>
                </div>

                <div
                    className={toggleState === 3 ? "tab-content  active-content" : "content"}
                >
                    <div className="titleCard">
                    <h2 className='tabInfoTitle'>Lista de Desejos</h2> 
                    <WishList />
                    </div>
                </div>

                <div
                    className={toggleState === 4 ? "tab-content  active-content" : "content"}
                >
                    <div className="titleCard">
                    <h2 className='tabInfoTitle'>Avaliações</h2> 
                    <Review />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tabs;