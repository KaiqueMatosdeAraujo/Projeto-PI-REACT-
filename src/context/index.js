import { CartProvider } from './cart.provider'
import { OrderProvider } from './order.provider'
import {CounterProvider} from './Counter.provider'
import { AuthProvider } from './AuthProvider'

function Contexts(props) {

    return (
        <AuthProvider>
            <OrderProvider>
                <CartProvider>
                    <CounterProvider>
                    {props.children}
                    </CounterProvider>
                </CartProvider>
            </OrderProvider>
        </AuthProvider>
    )
}

export default Contexts