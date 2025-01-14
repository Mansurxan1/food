import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Plus, Minus, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFoodContext } from '../../CartContext/Food';

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={`${
            index < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          } transition-colors duration-200`}
        />
      ))}
      <span className="text-sm text-gray-600 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
};

const Menu = () => {
  const { foodItems, cartItems, addToCart, removeFromCart } = useFoodContext();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const menuInfo = [
    {
      id: 1,
      subtitle: 'Food Full of Treaty Love',
      description:
        'There are many things needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers.',
    },
  ];

  return (
    <section className="menu py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl text-orange-600 font-philosopher font-bold mb-4 tracking-wide">
            Menu
          </h2>
          {menuInfo.map((info) => (
            <div key={info.id}>
              <h3 className="font-serif text-4xl mb-6 text-gray-800">{info.subtitle}</h3>
              <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">{info.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Link to={`/menu/${item.id}`}>
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-10" />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-2xl font-bold text-gray-800 font-serif">{item.name}</h4>
                  <span className="text-xl font-bold text-orange-600">${item.price}</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">{item.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {cartItems[item.id] ? (
                      <div className="flex items-center gap-2">
                        <button
                          className="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition-colors duration-200"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-medium text-gray-800">{cartItems[item.id]}</span>
                        <button
                          className="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition-colors duration-200"
                          onClick={() => addToCart(item.id)}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-orange-700 transition-colors duration-200"
                        onClick={() => addToCart(item.id)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                  <StarRating rating={item.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="200">
          <Link to="/menu">
            <button className="inline-block py-3 px-8 border-2 border-orange-600 text-orange-600 font-semibold rounded-full hover:bg-orange-600 hover:text-white transition-colors duration-200">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;


