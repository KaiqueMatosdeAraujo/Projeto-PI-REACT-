import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SuccessPurchase.css'
import BannerFreight from '../../components/freightBanner/FreightBanner'
import ImagemSucesso from './imgs/checked.png'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import SuccessPurschaseItens from '../../components/successPurchaseItens/SuccessPurchaseItens'
import ItensProducts from '../../components/successPurchaseItens/ItensProducts'


function SucessPurchase(props) {



    return (
        <>
        <BannerFreight/>
        <Header/>
        <Nav/>
        <div className="container-fluid mt-5">
    <div className="row">
      <div className="col-md-12">

        <div className="container">
          <div className="card ContainerCompleto col-12">

            <div className="row justify-content-center">
            <img src={ImagemSucesso} alt="" className='img-checked' />

              <div className="col-md-10">
              <div className="p-sucesso">
                <p className="p-sucesso-title p">
                    Compra realizada com sucesso!!
                </p >

                <p className="p-segunto-texto">
                    A confirmação do seu pedido foi enviada para seu e-mail
                </p>
                <SuccessPurschaseItens formPagment="Cartão de Crédito" parcel="4 X Vezes Sem Juros" delivery="Correios"/>
            </div>
                <hr/>
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Produto</th>
                        <th scope="col">Preço</th>
                    </tr>
                </thead>
                <tbody>
                <ItensProducts id="1" name="Bebê Reborn Realista -" subname="Abigail Pode Dar Banho" value="999,99"/>
                <ItensProducts id="2" name="Bebê reborn Alice -" subname="Com coelinho" value="599,99"/>
        
                        
                    
                <ItensProducts id="Total" name="" subname="" value="1.599,98"/>
                </tbody>
            </table>
            <div className="d-flex justify-content-center">
            <Link to="/profile"> <button type="button" className="btn custom-button1"> Meus Pedidos</button></Link>
            </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <Footer/>
        </>
    )
}

export default SucessPurchase


  