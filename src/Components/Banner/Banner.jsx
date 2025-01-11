import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { ShoppingCart, Info } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Banner.scss';
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
    <section className="banner">
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
        className="banner__slider"
      >
        {foodItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="banner__slide" style={{ backgroundImage: `url(${item.image})` }}>
              <div className="banner__content">
                <h2 className="banner__title">{item.title}</h2>
                <p className="banner__description">{item.description}</p>
                <div className="banner__details">
                  <p className="banner__price">${item.price.toFixed(2)}</p>
                  <div className="banner__rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i + 1 <= Math.floor(item.rating) ? (
                          <FaStar className="filled" />
                        ) : i < item.rating ? (
                          <CiStar className="half-filled" />
                        ) : (
                          <CiStar />
                        )}
                      </span>
                    ))}
                    <span className="banner__rating-number">({item.rating.toFixed(1)})</span>
                  </div>

                </div>
                <div className="banner__buttons">
                  <button className="banner__button banner__button--cart">
                    <ShoppingCart size={20} />
                    Add To Cart
                  </button>
                  <button className="banner__button banner__button--info">
                    <Info size={20} />
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
