import { Switch, Route ,Router } from "react-router-dom";
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import ItemPage from './pages/itemPage/ItemPage'
import Profile from './pages/profile/Profile'
import Nav from "./components/nav/Nav";
import AssessmentsHome from "./components/assessmentsHome/AssessmentsHome";
import Contact from './pages/contactUs/Contact'
import SuccessPassword from './pages/success_password/SuccessPassword'
import Wishlist from "./pages/wishlist/Wishlist";
import {history} from '../src/History'
import SuccessPurchase from './pages/successPurchase/SuccessPurchase'
import MyAccount from './pages/myAccount/MyAccount'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import Register from './pages/register/Register'
import UpdatePassword from "./pages/updatePassword/UpdatePassword";
import Assessments from "./components/assessments/Assessments";
import MoreDetails from './components/moreDetails/MoreDetails'
 import Delivery from './pages/delivery/Delivery'
import ExchangesReturn from './pages/exchangesReturn/exchangesReturn'
import Login from './pages/login/Login'

import BoyProduct from "./pages/boyProduct/BoyProduct";
import Accessories from "./pages/accessoriesProducts/AccessoriesProducts"
import ResultSearch from './pages/resultSearch/ResultSearch'


export const Routes = () => {
    return (
        <Router history={history}>
        <Switch>
            <Route path="/successPurchase" component={SuccessPurchase}/>
            <Route path="/" component={Home} exact />
            <Route path="/product" component={Product} />
            <Route path="/boyProduct" component={BoyProduct}/>
            <Route path="/accessories" component={Accessories}/>
            <Route path="/cart" component={Cart} />
            <Route path="/itemPage/:codProduto" component={ItemPage} />
            <Route path="/profile" component={Profile} />
            <Route path="/nav" component={Nav} exact/>
            <Route path="/assessmentsHome" component={AssessmentsHome} exact/>
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/register" component={Register} />
            <Route path="/updatePassword" component={UpdatePassword} />
            <Route path="/assessments" component={Assessments} />
            <Route path="/moreDetails" component={MoreDetails} />
            <Route path="/Contact" component={Contact} />
            <Route path="/SuccessPassword" component={SuccessPassword} />
            <Route path="/Wishlist" component={Wishlist}/>
             <Route path="/delivery" component={Delivery} /> 
            <Route path="/exchangesReturn" component={ExchangesReturn} />
            <Route path="/login" component={Login} />
            <Route path="/myAccount" component={MyAccount} />
           
            <Route path="/resultsearch/:name" component={ResultSearch}/> 
  
        </Switch>
        </Router>
    )
}