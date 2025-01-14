import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Star, ArrowLeft } from 'lucide-react';
import { useFoodContext } from '../CartContext/Food';

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

export default function MenuId() {
  const { id } = useParams();
  const { foodItems, addToCart } = useFoodContext();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const dish = foodItems.find(item => item.id === Number(id));

  if (!dish) {
    return <div>Dish not found</div>;
  }

  return (
    <div className="min-h-screen from-orange-50 to-white pb-16 pt-28">
      <div className="container mx-auto px-4 pt-10">
        <Link to="/menu" className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors duration-200 mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Menu
        </Link>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div data-aos="fade-right">
            <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={dish.image} 
                alt={dish.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div data-aos="fade-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{dish.name}</h1>
            <div className="flex items-center mb-4">
              <StarRating rating={dish.rating} />
              <span className="ml-4 text-2xl font-bold text-orange-600">${dish.price}</span>
            </div>
            <p className="text-gray-600 mb-6">{dish.longDescription}</p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-600 mb-8">
              {dish.ingredients?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <button 
              onClick={() => addToCart(dish.id)}
              className="bg-orange-600 text-white py-3 px-8 rounded-full hover:bg-orange-700 transition-colors duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

