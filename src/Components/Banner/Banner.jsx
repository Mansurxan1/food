import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { ShoppingCart, Info } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';

const foodItems = [
  {
    id: 1,
    image: "https://www.jocooks.com/wp-content/uploads/2019/10/egg-muffins-1-16.jpg",
    title: 'Vegie Muffen',
    description: "Healthy and delicious vegetable muffins.",
    price: 16,
    rating: 4.5,
  },
  {
    id: 2,
    image: "https://www.birleysandwiches.co.uk/images/general/_storeCarouselImage/Salads-Gallery-7.jpg",
    title: 'Salads',
    description: 'Salads made from freshly picked vegetables.',
    price: 12,
    rating: 3.9,
  },
  {
    id: 3,
    image: "https://olo-images-live.imgix.net/9a/9ae46a167167498d837bb27cbfadaa43.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=7aa99fc5440dc064071f0f545fe1ce16",
    title: 'Burger',
    description: "Juicy and delicious meat burger.",
    price: 10,
    rating: 3.8,
  },
  {
    id: 4,
    image: "https://www.eatthis.com/wp-content/uploads/sites/4/2023/07/BoneInRibeye-Outback.jpg?quality=82&strip=1",
    title: 'Delmonico Steak',
    description: "Taste a premium quality steak.",
    price: 14,
    rating: 4.9,
  },
  {
    id: 5,
    image: "https://redcoralhalal.com/wp-content/uploads/2020/02/butter-chicken-.jpg",
    title: 'Egg Masala',
    description: 'A classic dish of Indian cuisine.',
    price: 9,
    rating: 3.3,
  },
  {
    id: 6,
    image: "https://i1.wp.com/www.husbandsthatcook.com/wp-content/uploads/2015/06/peach-melba1.jpg?fit=2048%2C1365&ssl=1",
    title: 'Peach Melba',
    description: 'Sweet and delicious peach Melba dessert.',
    price: 15,
    rating: 4.6,
  },
];

const Banner = () => {
  return (
    <section className="banner h-screen w-full">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="banner__slider w-full h-full"
      >
        {foodItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="banner__slide w-full h-screen bg-cover bg-center flex items-center justify-end relative"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="banner__content relative z-10 text-white max-w-[500px] mr-20 text-right">
                <h2 className="banner__title text-7xl font-extrabold mb-4 font-philosopher">
                  {item.title}
                </h2>
                <p className="banner__description text-lg mb-6 font-roboto">
                  {item.description}
                </p>
                <div className="banner__details flex justify-end items-center mb-8">
                  <p className="banner__price text-2xl font-extrabold mr-8 font-philosopher">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="banner__rating flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i + 1 <= Math.floor(item.rating) ? (
                          <FaStar className="filled text-yellow-500" />
                        ) : i < item.rating ? (
                          <CiStar className="half-filled text-yellow-500" />
                        ) : (
                          <CiStar className="text-gray-400" />
                        )}
                      </span>
                    ))}
                    <span className="banner__rating-number ml-2 text-white text-sm">
                      ({item.rating.toFixed(1)})
                    </span>
                  </div>
                </div>
                <div className="banner__buttons flex justify-end gap-4">
                  <button className="banner__button banner__button--cart flex items-center justify-center px-6 py-3 rounded-full text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300 font-roboto">
                    <ShoppingCart size={20} className="mr-2" />
                    Add To Cart
                  </button>
                  <button className="banner__button banner__button--info flex items-center justify-center px-6 py-3 rounded-full text-white border-2 border-white hover:bg-white hover:bg-opacity-10 transition-all duration-300 font-roboto">
                    <Info size={20} className="mr-2" />
                    Food Details
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
