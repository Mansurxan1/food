import { Plus, Minus } from 'lucide-react'
import { useCart } from '@/CartContext/CartContext'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Menu = () => {
  const { cartItems, addToCart, removeFromCart } = useCart()
  const menuItems = [
    {
      id: 1,
      name: 'Vegie Muffen',
      price: 16,
      rating: 4.5,
      image: 'https://www.jocooks.com/wp-content/uploads/2019/10/egg-muffins-1-16.jpg',
      description: 'Healthy and delicious vegetable muffins.',
    },
    {
      id: 2,
      name: 'Salads',
      price: 12,
      rating: 3.9,
      image: 'https://www.birleysandwiches.co.uk/images/general/_storeCarouselImage/Salads-Gallery-7.jpg',
      description: 'Salads made from freshly picked vegetables.',
    },
    {
      id: 3,
      name: 'Burger',
      price: 10,
      rating: 3.8,
      image: 'https://olo-images-live.imgix.net/9a/9ae46a167167498d837bb27cbfadaa43.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=7aa99fc5440dc064071f0f545fe1ce16',
      description: 'Juicy and delicious meat burger.',
    },
    {
      id: 4,
      name: 'Delmonico Steak dish',
      price: 14,
      rating: 4.9,
      image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2023/07/BoneInRibeye-Outback.jpg?quality=82&strip=1',
      description: 'Taste a premium quality steak.',
    },
    {
      id: 5,
      name: 'Egg Masala',
      price: 9,
      rating: 3.3,
      image: 'https://redcoralhalal.com/wp-content/uploads/2020/02/butter-chicken-.jpg',
      description: 'A classic dish of Indian cuisine.',
    },
    {
      id: 6,
      name: 'Peach Melba dish',
      price: 15,
      rating: 4.6,
      image: 'https://i1.wp.com/www.husbandsthatcook.com/wp-content/uploads/2015/06/peach-melba1.jpg?fit=2048%2C1365&ssl=1',
      description: 'Sweet and delicious peach Melba dessert.',
    },
  ]
  const menuInfo = [
    {
      id: 1,
      subtitle: 'Food Full of Treaty Love',
      description:
        'There are many things needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers.',
    },
  ]

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            size={16}
            className={`${
              index < rating ? 'text-yellow-600' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <section className="menu py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl text-orange-600 font-medium mb-4 uppercase">MENU</h2>
        {menuInfo.map((info) => (
          <div key={info.id}>
            <h3 className="font-serif text-4xl mb-6 text-gray-800">{info.subtitle}</h3>
            <p className="max-w-3xl mx-auto text-gray-500 leading-relaxed">{info.description}</p>
          </div>
        ))}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <div className="w-full h-64 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transform transition duration-300 hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-2xl font-bold text-gray-800 font-philosopher ">{item.name}</h4>
                  <span className="text-xl ont-bold text-gray-800">${item.price}</span>
                </div>
                <p className="text-sm text-left  text-gray-500 mb-6">{item.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {cartItems[item.id] ? (
                      <>
                        <button
                          className="bg-orange-600 text-white p-[10px] rounded-md hover:bg-orange-700 transition"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-medium">{cartItems[item.id]}</span>
                        <button
                          className="bg-orange-600 text-white p-[10px] rounded-md hover:bg-orange-700 transition"
                          onClick={() => addToCart(item.id)}
                        >
                          <Plus size={16} />
                        </button>
                      </>
                    ) : (
                      <button
                        className="bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700 transition"
                        onClick={() => addToCart(item.id)}
                      >
                        <Plus size={20} />
                      </button>
                    )}
                  </div>
                  <StarRating rating={item.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/" className="inline-block mt-8 py-2 px-8 border-2 border-orange-600 text-orange-600 rounded-md hover:bg-orange-600 hover:text-white transition">
          Learn More
        </Link>
      </div>
    </section>
  )
}

export default Menu
