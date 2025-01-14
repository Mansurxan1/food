import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Features.scss"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Leaf, UtensilsCrossed, Home, Users, Clock, Edit, DollarSign, Calendar, Gift, Truck } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-12 h-12 text-green-500" />,
    title: "Fresh & Organic Ingredients",
    description: "Our restaurant only uses fresh and eco-friendly ingredients. The taste and quality of the dishes are our priority!",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    icon: <UtensilsCrossed className="w-12 h-12 text-orange-500" />,
    title: "Unique Culinary Experience",
    description: "Our professional chefs prepare the finest dishes from world cuisine.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    icon: <Home className="w-12 h-12 text-blue-500" />,
    title: "Cozy Atmosphere",
    description: "Our restaurant creates a comfortable and friendly environment. You can enjoy quality time with your family and friends.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    icon: <Users className="w-12 h-12 text-purple-500" />,
    title: "Professional Staff",
    description: "Our friendly and professional staff ensures your maximum comfort.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    icon: <Clock className="w-12 h-12 text-red-500" />,
    title: "Fast & Reliable Service",
    description: "We prepare and serve your orders as quickly as possible.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    icon: <Edit className="w-12 h-12 text-yellow-500" />,
    title: "Customizable Dishes",
    description: "Each customer can customize their dish according to their preferences, such as changing ingredients or requesting allergy-friendly options.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    icon: <DollarSign className="w-12 h-12 text-green-500" />,
    title: "Affordable Prices",
    description: "We provide high-quality food at affordable prices.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    icon: <Calendar className="w-12 h-12 text-blue-500" />,
    title: "Online Table Booking",
    description: "You can easily book a table in advance. Convenient and fast!",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    icon: <Gift className="w-12 h-12 text-pink-500" />,
    title: "Event Hosting",
    description: "We provide spaces for birthdays, anniversaries, and other special events.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    icon: <Gift className="w-12 h-12 text-purple-500" />,
    title: "Loyalty Program",
    description: "We offer loyalty cards and bonus systems for regular customers.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    icon: <Truck className="w-12 h-12 text-indigo-500" />,
    title: "Delivery Service",
    description: "We deliver our restaurant’s food to your home quickly and conveniently.",
    image: "/placeholder.svg?height=200&width=300"
  },
];

export default function Features() {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleResize = () => {
      if (window.innerWidth <= 450) {
        setCenterSlidePercentage(100);
      } else if(window.innerWidth <= 1050) {
        setCenterSlidePercentage(50); 
      }else{
        setCenterSlidePercentage(33.33); 
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-philosopher text-[#DC780B]" data-aos="fade-up">Our Features</h2>
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={centerSlidePercentage}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button type="button" onClick={onClickHandler} title={label} className="absolute left-0 top-1/2 z-10 -mt-10 p-4 bg-white rounded-full shadow-lg">
                <span className="sr-only">Previous</span>
                &#10094;
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button type="button" onClick={onClickHandler} title={label} className="absolute right-0 top-1/2 z-10 -mt-10 p-4 bg-white rounded-full shadow-lg">
                <span className="sr-only">Next</span>
                &#10095;
              </button>
            )
          }
        >
          {features.map((feature, index) => (
            <div key={index} className="px-4 ">
              <div className="bg-white rounded-lg shadow-lg mb-6 p-6 min-h-[240px]" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
