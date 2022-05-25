import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'
import CartContext, { CartProvider } from './context/cart.provider'



function App() {
  return (

    <CartProvider>
      
      <Router>
      <Routes/>
      </Router>
      
    </CartProvider>
  );
}

export default App;
