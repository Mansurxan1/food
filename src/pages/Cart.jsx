import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useFoodContext } from '../CartContext/Food';

const Cart = () => {
  const { foodItems, cartItems, addToCart, removeFromCart, clearCart, getTotalPrice } = useFoodContext();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Filter only items that are in the cart
  const cartProducts = foodItems.filter(item => cartItems[item.id]);

  if (cartProducts.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-28">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Add some delicious items to your cart!</p>
          <Link 
            to="/menu" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-28">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Your Cart</h2>
          <button
            onClick={clearCart}
            className="flex items-center text-red-500 hover:text-red-600 transition-colors duration-200"
          >
            <Trash2 size={20} className="mr-2" />
            Clear Cart
          </button>
        </div>
        <div className="grid gap-8">
          {cartProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6"
              data-aos="fade-up"
            >
              <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition-colors duration-200"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-medium text-gray-800">{cartItems[item.id]}</span>
                    <button
                      onClick={() => addToCart(item.id)}
                      className="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition-colors duration-200"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="text-xl font-bold text-orange-600">
                    ${(item.price * cartItems[item.id]).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-gray-800">Total:</span>
            <span className="text-2xl font-bold text-orange-600">${getTotalPrice().toFixed(2)}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/menu"
              className="flex-1 text-center py-3 px-6 border-2 border-orange-600 text-orange-600 rounded-full hover:bg-orange-600 hover:text-white transition-colors duration-200"
            >
              Continue Shopping
            </Link>
            <button className="flex-1 py-3 px-6 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors duration-200">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

