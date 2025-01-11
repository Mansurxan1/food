import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './Testimonial.scss';
import img1 from "@i/comment-imgbg.png";
import img2 from "@i/comment.png";
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
  const testimonialContent = {
    subtitle: "Making Food great again and again",
    description:
      "You need not only Just Food Stalls with Persons but also specialized equipment. Skills to manage Customers, Effective Product catlogues etc to make your.",
    testimonials: [
      {
        id: 1,
        name: "AUGUSTA W. REYNOSO",
        role: "UI/UX DESIGNER",
        image: img2,
        rating: 4,
        text: "You need not only Just Food Stalls with Persons but also specialized equipment, skills to manage Customers. Effective Product catlogues etc very successful to make your.",
      },
      {
        id: 2,
        name: "SARAH JOHNSON",
        role: "FOOD CRITIC",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXwJyDlu0a7PB0wYWLpfJQ3BVsorcMsjpDA&s",
        rating: 5,
        text: "You need not only Just Food Stalls with Persons but also specialized equipment, skills to manage Customers. Effective Product catlogues etc very successful to make your.",
      },
      {
        id: 3,
        name: "MICHAEL CHEN",
        role: "REGULAR CUSTOMER",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvWMLQ9tzvtfTHRXSrmhh6PTqBROeWyGBxrw&s",
        rating: 4,
        text: "You need not only Just Food Stalls with Persons but also specialized equipment, skills to manage Customers. Effective Product catlogues etc very successful to make your.",
      },
    ],
  };

  return (
    <section className="testimonial">
      <div className="container">
        <h2>TESTIMONIAL</h2>
        <h3>{testimonialContent.subtitle}</h3>
        <p className="testimonial__subtitle">{testimonialContent.description}</p>

        <div className="testimonial__slider-container">
          <button className="swiper-button-prev custom"></button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            loop={true}
            className="testimonial__slider"
          >
            {testimonialContent.testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial__card">
                  <span>
                    <img src={img1} alt="" />
                  </span>
                  <img src={testimonial.image} alt={`${testimonial.name}`}
                    className="testimonial__img"
                  />
                  <p className="testimonial__text">{testimonial.text}</p>
                  <div className="rating">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`star ${index < testimonial.rating ? 'filled' : ''}`}
                        size={16}
                      />
                    ))}
                  </div>
                  <h4 className="testimonial__name">{testimonial.name}</h4>
                  <p className="testimonial__role">{testimonial.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-next custom"></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
