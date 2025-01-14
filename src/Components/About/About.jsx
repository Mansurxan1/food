import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import bg from "../../assets/images/about.jpg";

export default function About() {
  const [services, setServices] = useState([]);
  const [aboutText, setAboutText] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const fetchServices = () => {
      const serviceData = [
        { id: 1, text: '24/7 service' },
        { id: 2, text: 'National and world cuisine' },
        { id: 3, text: 'Eco-friendly products' }
      ];
      setServices(serviceData); 
    };

    const fetchAboutText = () => {
      const textData = [
        "Our restaurant is a place that offers high-quality food and focuses on creating a comfortable environment for customers.",
        "We always aim to satisfy our customers."
      ];
      setAboutText(textData);
    };

    fetchServices(); 
    fetchAboutText(); 
  }, []); 

  return (
    <section className="py-16 bg-gray-50 ">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-4 font-philosopher text-[#DC780B]">About</h2>
            <div className="text-gray-600 mb-6">
              {aboutText.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              {services.map(service => (
                <li key={service.id}>{service.text}</li>
              ))}
            </ul>
            <Link to={"about"} className='font-philosopher font-bold rounded-3xl border-4 border-none text-white px-5 py-2 bg-[#DC780B]'>
              All
            </Link>
          </div>
          <div data-aos="fade-left" data-aos-delay="200">
            <img 
              src={bg} 
              alt="Restoran interyeri" 
              className="rounded-[45px] shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
