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
    <section className="features py-20 px-24 text-center bg-white">
      <div className="container">
        <h2 className="text-orange-500 font-medium text-base mb-4">FEATURES</h2>
        <h3 className="font-philosopher font-bold text-3xl mb-12 text-gray-800">Food With A New Passion</h3>
        <div className="features__grid grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="features__grid-card p-8 text-center">
              <div className="icon-wrapper w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-gray-100">
                <span className="icon mt-1 text-xl">
                  <img src={feature.icon} alt={feature.icon} />
                </span>
              </div>
              <h4 className="font-philosopher font-bold text-xl mb-4 text-gray-800">{feature.title}</h4>
              <p className="text-gray-600 leading-6">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

