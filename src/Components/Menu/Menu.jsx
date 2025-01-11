import { Plus, Minus, } from 'lucide-react'
import './Menu.scss';
import { useCart } from '@/CartContext/CartContext';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Menu = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const menuItems = [
    {
      id: 1,
      name: 'Vegie Muffen',
      price: 16,
      rating: 4.5,
      image: "https://www.jocooks.com/wp-content/uploads/2019/10/egg-muffins-1-16.jpg",
      description: "Healthy and delicious vegetable muffins.",
    },
    {
      id: 2,
      name: 'Salads',
      price: 12,
      rating: 3.9,
      image: "https://www.birleysandwiches.co.uk/images/general/_storeCarouselImage/Salads-Gallery-7.jpg",
      description: 'Salads made from freshly picked vegetables.',
    },
    {
      id: 3,
      name: 'Burger',
      price: 10,
      rating: 3.8,
      image: "https://olo-images-live.imgix.net/9a/9ae46a167167498d837bb27cbfadaa43.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=7aa99fc5440dc064071f0f545fe1ce16",
      description: "Juicy and delicious meat burger.",
    },
    {
      id: 4,
      name: 'Delmonico Steak dish',
      price: 14,
      rating: 4.9,
      image: "https://www.eatthis.com/wp-content/uploads/sites/4/2023/07/BoneInRibeye-Outback.jpg?quality=82&strip=1",
      description: "Taste a premium quality steak.",
    },
    {
      id: 5,
      name: 'Egg Masala',
      price: 9,
      rating: 3.3,
      image: "https://redcoralhalal.com/wp-content/uploads/2020/02/butter-chicken-.jpg",
      description: 'A classic dish of Indian cuisine.',
    },
    {
      id: 6,
      name: 'Peach Melba dish',
      price: 15,
      rating: 4.6,
      image: "https://i1.wp.com/www.husbandsthatcook.com/wp-content/uploads/2015/06/peach-melba1.jpg?fit=2048%2C1365&ssl=1",
      description: 'Sweet and delicious peach Melba dessert.',
    }
  ];
  const menuInfo = [
    {
      id: 1,
      subtitle: "Food Full of treaty Love",
      description:
        "There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers.",
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            size={16}
            className={`star ${index < rating ? 'filled' : ''}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="menu">
      <div className="container">
        <h2>MENU</h2>
        {menuInfo.map((info) => (
          <div key={info.id}>
            <h3>{info.subtitle}</h3>
            <p className="menu__description">{info.description}</p>
          </div>
        ))}
        <div className="menu__grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu__grid-card">
              <div className="menu__img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="menu__grid-content">
                <div className="menu__grid-header">
                  <h4>{item.name}</h4>
                  <span className="price">${item.price}</span>
                </div>
                <p>{item.description}</p>
                <div className="menu__grid-footer">
                  <div className="quantity">
                    {cartItems[item.id] ? (
                      <>
                        <button className="quantity__button" 
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="quantity__num">{cartItems[item.id]}</span>
                        <button className="quantity__button" 
                          onClick={() => addToCart(item.id)}
                        >
                          <Plus size={16} />
                        </button>
                      </>
                    ) : (
                      <button className="add__button"
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
        <Link to={"/"} className="menu__all">Learn More</Link>
      </div>
    </section>
  );
};

export default Menu;


