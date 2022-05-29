import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'
import { CartProvider } from './context/cart.provider'
import { OrderProvider } from './context/order.provider'



function App() {
  return (
    <OrderProvider>
      <CartProvider>
        <Router>
        <Routes/>
        </Router>
      </CartProvider>
    </OrderProvider>
    
  );
}

export default App;
