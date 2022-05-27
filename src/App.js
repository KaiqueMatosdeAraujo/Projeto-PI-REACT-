import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'
import CartContext, { CartProvider } from './context/cart.provider'
import {AuthProvider} from '../src/context/AuthProvider'


function App() {
  return (
<AuthProvider>
    <CartProvider>
      
      <Router>
      <Routes/>
      </Router>
      
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
