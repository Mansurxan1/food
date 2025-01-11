import { Link } from 'react-router-dom';
import './About.scss';
import about from "@i/about.jpg"
import aboutbg from "@i/about-bg.svg"

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
    <section className="about">
      <div className="about__bg">
        <img src={aboutbg} alt="about background image" />
      </div>
      <div className="container">
        {aboutData.map((item) => (
          <div className="about__content" key={item.id}>
            <div className="about__image">
              <img src={item.image} alt={item.alt} className="about__image-img" />
            </div>
            <div className="about__content-text">
              <h2>{item.title}</h2>
              <h3>{item.subtitle}</h3>
              <p>{item.description}</p>
              <Link to={"/"} className="about__btn"> Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
