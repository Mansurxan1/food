import './Features.scss';
import home from "../../assets/images/home.svg"
import delivery from "../../assets/images/delivery.svg"
import icon from "../../assets/images/icon.svg"

const Features = () => {
  const features = [
    {
      icon: home,
      title: 'Quality Food',
      description: 'It can be a very secure path to earn good money and make you very successful creative entrepreneur.'
    },
    {
      icon: delivery,
      title: 'Food Delivery',
      description: 'It can be a very secure path to earn good money and make you very successful creative entrepreneur.'
    },
    {
      icon: icon,
      title: 'Super Taste',
      description: 'It can be a very secure path to earn good money and make you very successful creative entrepreneur.'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>FEATURES</h2>
        <h3>Food With A New Passion</h3>
        <div className="features__grid">
          {features.map((feature, index) => (
            <div key={index} className="features__grid-card">
              <div className="icon-wrapper">
                <span className="icon"><img src={feature.icon} alt={feature.icon} /></span>
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

