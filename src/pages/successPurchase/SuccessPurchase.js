import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SuccessPurchase.css'
import Nav from '../../components/nav/Nav'
import BannerFreight from '../../components/freightBanner/FreightBanner'
import ImagemSucesso from './imgs/checked.png'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import SuccessPurschaseItens from '../../components/successPurchaseItens/SuccessPurchaseItens'

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
          <div className="card ">

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
                    <tr>
                        <th scope="row">1</th>
                        <td>Bebê Reborn Realista - <br /> Abigail Pode Dar Banho</td>
                        <td>R$ 999,99</td>
                        
                        
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Bebê reborn Alice - <br /> Com coelinho</td>
                        <td>R$ 599,99</td>
                        
                    </tr>
                    <tr>
                        <th scope="row">Total</th>
                        <td></td>
                        <td>R$ 1.599,98</td>
                        
                    </tr>
                </tbody>
            </table>
            <div className="d-flex justify-content-center">
            <Link to="/"> <button type="button" className="btn custom-button"> Ir para Home</button></Link>
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


  