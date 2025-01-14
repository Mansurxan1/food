import { createContext, useContext, useState } from 'react';

const FoodContext = createContext();

const initialFoodItems = [
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
    name: 'Delmonico Steak',
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
    name: 'Peach Melba',
    price: 15,
    rating: 4.6,
    image: 'https://www.ocado.com/cmscontent/recipe_image_large/30535517.jpg?Z6nj',
    description: 'Sweet and delicious peach Melba dessert.',
  },
];

export function FoodProvider({ children }) {
  const [foodItems] = useState(initialFoodItems);  
  const [cartItems, setCartItems] = useState({}); 

  const addToCart = (id) => {
    setCartItems(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCartItems(prev => {
      const newCart = { ...prev };
      if (newCart[id] > 1) {
        newCart[id]--;
      } else {
        delete newCart[id];
      }
      return newCart;
    });
  };

  const clearCart = () => {
    setCartItems({});
  };

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((a, b) => a + b, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cartItems).reduce((total, [id, quantity]) => {
      const item = foodItems.find(item => item.id === Number(id));
      return total + (item?.price || 0) * quantity;
    }, 0);
  };

  return (
    <FoodContext.Provider value={{
      foodItems,
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </FoodContext.Provider>
  );
}

export function useFoodContext() {
  const context = useContext(FoodContext);
  if (!context) {
    throw new Error('useFoodContext must be used within a FoodProvider');
  }
  return context;
}
