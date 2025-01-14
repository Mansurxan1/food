import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Features from '../Components/Features/Features';

function FeaturesPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r pt-28 from-orange-400 to-red-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-down">
              Our Restaurant Features
            </h1>
            <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="200">
              Quality food, comfortable atmosphere and professional service - all in one place
            </p>
            <button size="lg" variant="secondary" data-aos="zoom-in" data-aos-delay="400">
              Book Now
            </button>
          </div>
        </div>
      </section>

      <Features />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6">Our Kitchen Experience</h2>
              <p className="text-gray-600 mb-6">
                Our professional chefs will prepare the best dishes from the world's cuisine for you.
                See their skills with your own eyes!
              </p>
              <button variant="outline">Learn more...</button>
            </div>
            <div data-aos="fade-left" data-aos-delay="200">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/IX1LsvuPSNY?si=A7GBsLkiex6-4ach" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">What do our fans say?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay={i * 100}>
                <p className="text-gray-600 mb-4">
                "I had a wonderful experience at this restaurant. The food is delicious, the service is excellent, and the atmosphere is very comfortable!"
                </p>
                <div className="flex items-center">
                  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXwJyDlu0a7PB0wYWLpfJQ3BVsorcMsjpDA&s'} alt="Mijoz" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">Customer Name</h4>
                    <p className="text-gray-500">Regular visitor</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-orange-400 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-philosopher" data-aos="fade-up">Visit Now</h2>
          <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="200">
            Try our delicious dishes and have an unforgettable experience!
          </p>
        </div>
      </section>
    </div>
  );
}
export default FeaturesPage
