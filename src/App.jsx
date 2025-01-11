import { CartProvider } from './CartContext/CartContext'
import Router from './router/Router'


const App = () => {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  )
}

export default App