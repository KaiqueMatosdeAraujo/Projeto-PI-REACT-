
import {useState} from 'react'
import Assessments from '../../components/assessments/Assessments'
import MoreDetails from '../../components/myRequests/MyRequests'
import Wishlist from '../wishlist/Wishlist'
import './Profile.css'
import user from './imgs/user.png'
import checklist from './imgs/checklist.png'
import desejos from './imgs/desejos.png'
import BannerFreight from '../../components/freightBanner/FreightBanner'
import Nav from '../../components/nav/Nav'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import MyAccount from '../myAccount/MyAccount'
import MyRequests from '../../components/myRequests/MyRequests'
import TabsMenu from '../../components/tabs/tabs'

function Profile() {

    

    return (
        <>
        <div className="bgPage">
           <BannerFreight/>
            <Header />
            <Nav/>
          <TabsMenu/>
            <Footer />
            </div>
        </>
    )
}
export default Profile
