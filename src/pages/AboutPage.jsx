import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Clock, Utensils, UserCheck, Leaf, Gift, Calendar, ChefHat, Shield, Truck, Home } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const sections = [
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Working hours",
      content: "Our restaurant is open 24 hours a day, 7 days a week! We are always ready to welcome you.",
      image: "https://townsquare.media/site/701/files/2022/03/attachment-come-in-were-open.jpg?w=780&q=75"
    },
    {
      icon: <Utensils className="w-8 h-8 text-orange-500" />,
      title: "Dishes and menu",
      content: "Our restaurant offers a wide range of national and international dishes. We have fast food, special dishes, as well as options for vegetarians.",
      image: "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002670/img/basic/a0002670_main.jpg"
    },
    {
      icon: <UserCheck className="w-8 h-8 text-orange-500" />,
      title: "Personal service and amenities",
      content: "We are constantly improving our services to provide the best service to our customers. We have fast delivery, advance table reservations, and other special services.",
      image: "https://www.gloriafood.com/wp-content/uploads/2024/01/shutterstock_145332205.jpg"
    },
    {
      icon: <Leaf className="w-8 h-8 text-orange-500" />,
      title: "Healthy and environmentally friendly products",
      content: "We use only the best quality, environmentally friendly and fresh products. Our chefs love their work and do everything possible to prepare the best dishes for you.",
      image: "https://www.nh-hotels.com/nhpro/assets/uploads/2024/05/14113107/eco-food.jpg"
    },
    {
      icon: <Gift className="w-8 h-8 text-orange-500" />,
      title: "Special offers and promotions",
      content: "We offer new special offers and promotions every month! We have a loyalty system and discounts for our regular customers.",
      image: "https://restaurantify.com/wp-content/uploads/2023/11/SECONDARY-BANNER-Best-Restaurant-Loyalty-Program_-5-Successful-Examples.webp"
    },
    {
      icon: <Calendar className="w-8 h-8 text-orange-500" />,
      title: "Events and special services",
      content: "We have the opportunity to host birthdays, holidays, and other special events. You can have a great time with family or friends in our restaurant.",
      image: "https://pischanrestaurant.com/wp-content/uploads/2022/11/celebrations-privite-events.jpg"
    },
    {
      icon: <ChefHat className="w-8 h-8 text-orange-500" />,
      title: "High-quality and professional chefs",
      content: "Our chefs are experienced and skilled in preparing the best dishes. They prepare each dish professionally.",
      image: "https://images.stockcake.com/public/6/b/7/6b71afd1-6155-4aaf-8deb-a3e404c143dd_large/chefs-preparing-meal-stockcake.jpg"
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Food quality and safety",
      content: "Food safety is a top priority in our restaurant. We fully comply with all sanitary and hygiene requirements.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25q5CXe4ng2JrzrwyacciaWgvpjaenSairg&s"
    },
    {
      icon: <Truck className="w-8 h-8 text-orange-500" />,
      title: "Online ordering and delivery services",
      content: "You can order online from our restaurant. We deliver food to your home quickly and conveniently.",
      image: "https://financesonline.com/uploads/2023/11/Online-food-ordering-solution-app-1-1-scaled.jpg"
    },
    {
      icon: <Home className="w-8 h-8 text-orange-500" />,
      title: "Restaurant environment and design",
      content: "Our restaurant has a modern and comfortable atmosphere. You will be greeted by friendly and attentive service.",
      image: "https://sumesshmenonassociates.com/wp-content/uploads/2022/09/FOO-BANDRA-SLIDER-1-1920-x-950.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-orange-400 mt-20 pt-5 to-red-500 text-white  pb-3">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-philosopher" data-aos="fade-down">
              About
            </h1>
            <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="200">
              More information about the history and activities of our restaurant
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6">Our History</h2>
              <p className="text-gray-600 mb-4">
                Our restaurant was founded in 2010 and since then we have been providing our customers with high quality food and service. We started our business from a small family restaurant and today we have become one of the most popular and beloved places in our city.
              </p>
              <p className="text-gray-600">
                Our goal is to leave a memorable impression on every customer who visits us and encourage them to come back again and again. We are constantly improving our services and introducing new ideas and innovations.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="200">
              <img 
                src="https://nmaahc.si.edu/sites/default/files/images/header/sweethome_diningroom_1.jpg"
                alt="Restaurant history" 
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
                <img src={section.image} alt={section.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {section.icon}
                    <h3 className="text-xl font-semibold ml-4">{section.title}</h3>
                  </div>
                  <p className="text-gray-600">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-philosopher"  data-aos="fade-up">Visit Us</h2>
          <p className="text-xl text-gray-700 mb-4" data-aos="fade-up" data-aos-delay="200">
            Try our delicious dishes and have an unforgettable experience!
          </p>
        </div>
      </section>
    </div>
  );
}

