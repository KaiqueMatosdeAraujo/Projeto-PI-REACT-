import { CartProvider } from './cart.provider'
import { OrderProvider } from './order.provider'
import {CounterProvider} from './Counter.provider'

function Contexts(props) {

    return (
        <OrderProvider>
            <CartProvider>
                <CounterProvider>
                {props.children}
                </CounterProvider>
            </CartProvider>
        </OrderProvider>
    )
}

export default Contexts