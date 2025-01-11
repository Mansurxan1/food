import { Link } from 'react-router-dom';
import about from "@i/about.jpg";
import aboutbg from "@i/about-bg.svg";

const About = () => {
  const aboutData = [
    {
      id: 1,
      image: about,
      alt: "Person enjoying healthy food",
      title: "ABOUT US",
      subtitle: "Food Stalls with Persons but to Product marketing plane catlogues etc to.",
      description: `
        There are many things are needed to start the Fast Food Business. 
        You need not only Just Food Stalls with Persons but also 
        equipment make your marketing plane Effective.
      `,
    },
  ];

  return (
    <section className="relative py-32 px-24">
      <div className="absolute top-[-250px] left-0 w-full z-[-1]">
        <img src={aboutbg} alt="about background image" className="max-w-[580px] w-full" />
      </div>
      <div className="container z-[]">
        {aboutData.map((item) => (
          <div className="flex items-center gap-16" key={item.id}>
            <div className="flex-1 max-w-[555px] overflow-hidden rounded-[50px] z-5">
              <img src={item.image} alt={item.alt}
                className="max-w-[555px] w-full shadow-lg transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-orange-500 text-xl font-medium mb-4">{item.title}</h2>
              <h3 className="font-philosopher font-semibold text-4xl mb-6 text-gray-800 leading-tight">{item.subtitle}</h3>
              <p className="text-gray-600 leading-6 mb-8">{item.description}</p>
              <Link to={"/"} className="bg-orange-500 z-10 text-white py-3 px-8 rounded-lg text-base font-medium cursor-pointer transition-colors duration-300 hover:bg-orange-600">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

