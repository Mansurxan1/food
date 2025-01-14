import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { ShoppingCart, Info } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { useFoodContext } from '../../CartContext/Food';

const Banner = () => {
  const { foodItems, addToCart } = useFoodContext();

  return (
    <section className="banner md:h-screen h-[75vh] w-full ">
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
            <div className="banner__slide w-full h-screen bg-cover bg-center flex items-center justify-end relative"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="banner__content relative z-10 text-white max-w-[500px] mr-20 text-right">
                <h2 className="banner__title text-5xl md:text-7xl font-extrabold mb-4  font-philosopher">
                  {item.name}
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
                  <button 
                    onClick={() => addToCart(item.id)}
                    className="banner__button banner__button--cart flex items-center justify-center px-6 py-3 rounded-full text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300 font-roboto"
                  >
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

