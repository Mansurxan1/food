import { FoodProvider } from './CartContext/Food'
import Router from './router/Router'


const App = () => {
  return (
    <FoodProvider>
      <Router />
    </FoodProvider>
  )
}

export default App