import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./Testimonial.scss"
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import img1 from "@i/comment-imgbg.png";
import img2 from "@i/comment.png";

const Testimonial = () => {
  const testimonialContent = {
    subtitle: "Making Food great again and again",
    description:
      "You need not only Just Food Stalls with Persons but also specialized equipment. Skills to manage Customers, Effective Product catalogues etc to make your.",
    testimonials: [
      {
        id: 1,
        name: "AUGUSTA W. REYNOSO",
        role: "UI/UX DESIGNER",
        image: img2,
        rating: 4,
        text: "You need not only Just Food Stalls with Persons but also specialized equipment, skills to manage Customers. Effective Product catalogues etc very successful to make your.",
      },
      {
        id: 2,
        name: "SARAH JOHNSON",
        role: "FOOD CRITIC",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXwJyDlu0a7PB0wYWLpfJQ3BVsorcMsjpDA&s",
        rating: 5,
        text: "You need not only Just Food Stalls with Persons but also specialized equipment, skills to manage Customers. Effective Product catalogues etc very successful to make your.",
      },
      {
        id: 3,
        name: "MICHAEL CHEN",
        role: "REGULAR CUSTOMER",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvWMLQ9tzvtfTHRXSrmhh6PTqBROeWyGBxrw&s",
        rating: 4,
        text: "You need not only Just Food Stalls with Persons but also specialized equipment, skills to manage Customers. Effective Product catalogues etc very successful to make your.",
      },
    ],
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-orange-500 font-medium text-lg mb-4 text-center">
          TESTIMONIAL
        </h2>
        <h3 className="text-gray-800 font-philosopher font-bold text-3xl mb-6 text-center">
          {testimonialContent.subtitle}
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
          {testimonialContent.description}
        </p>

        <div className="relative max-w-3xl mx-auto">
          <button className="swiper-button-prev custom-button left-0 p-6 -translate-y-1/2">
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            loop={true}
            className="testimonial-slider"
          >
            {testimonialContent.testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col items-center bg-white shadow-md p-8 rounded-lg">
                  <div className="relative">
                    <img src={img1}
                      alt={img1} className="absolute top-0 left-1/2 transform -translate-x-1/2 h-28"
                    />
                    <img  src={testimonial.image} alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover mb-6"
                    />
                  </div>
                  <p className="text-gray-600 mb-6">{testimonial.text}</p>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} className={`${
                          index < testimonial.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                        size={16}
                      />
                    ))}
                  </div>
                  <h4 className="text-lg font-medium text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-next custom-button p-6 right-0 -translate-y-1/2">
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
