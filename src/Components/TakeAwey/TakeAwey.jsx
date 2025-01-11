import './TakeAwey.scss';
import phone from "@i/phone.jpg"
import appstore from "@i/appstore.png"
import googleplay from "@i/googleplay.png"

const TakeAway = () => {
   const takeAwayContent = [
    {
      id: 1,
      subtitle: "Food Stalls with Persons but to Product marketing plane.",
      description:
        "There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment with Persons but also Just Food Stalls with Persons.",
    },
  ];
  return (
    <section className="take__away">
      <div className="container">
        <div className="take__away-wrapper">
          <div className="take__away-content">
            <h2>TAKE AWAY</h2>
            {takeAwayContent.map((content) => (
              <div key={content.id}>
                <h3>{content.subtitle}</h3>
                <p>{content.description}</p>
              </div>
            ))}
            <div className="take__away-download">
              <button className="store"><img src={appstore} alt={appstore}/></button>
              <button className="store"><img src={googleplay} alt={googleplay} /></button>
            </div>
          </div>
          <div className="take__awey-phone">
            <img 
              src={phone} 
              alt="Mobile app interface preview" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakeAway;

