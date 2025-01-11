import phone from "@i/phone.jpg";
import appstore from "@i/appstore.png";
import googleplay from "@i/googleplay.png";

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
    <section className="bg-[#FBF1E7] py-[114px] mb-[213px]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 px-4">
        <div className="flex-1">
          <h2 className="text-[#e67e22] font-medium text-lg mb-4 uppercase">Take Away</h2>
          {takeAwayContent.map((content) => (
            <div key={content.id}>
              <h3 className="font-philosopher text-4xl  text-gray-800 mb-6">{content.subtitle}</h3>
              <p className="text-gray-600 leading-relaxed mb-8">{content.description}</p>
            </div>
          ))}
          <div className="flex gap-4">
            <button className="store bg-black text-white p-3 rounded-lg border border-gray-400">
              <img src={appstore} alt="App Store" />
            </button>
            <button className="store bg-transparent p-3 rounded-lg border border-gray-400">
              <img src={googleplay} alt="Google Play" />
            </button>
          </div>
        </div>

        <div className="relative flex-1 flex justify-center">
          <img src={phone} alt="Mobile app interface preview"
            className="absolute top-[-323px] w-[323px] h-[651px] rounded-[45px] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default TakeAway;
