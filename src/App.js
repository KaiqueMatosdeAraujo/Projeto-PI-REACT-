import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'
import CartContext, { CartProvider } from './context/cart.provider'
import { AuthProvider } from '../src/context/AuthProvider'
import { OrderProvider } from './context/order.provider'
import { FavoriteProvider } from './context/favorites.provider'

function App() {
  return (
    <AuthProvider>
      <OrderProvider>
        <FavoriteProvider>
          <CartProvider>

            <Router>
              <Routes />
            </Router>

          </CartProvider>
        </FavoriteProvider>
      </OrderProvider>
    </AuthProvider>
  );
}

export default App;
