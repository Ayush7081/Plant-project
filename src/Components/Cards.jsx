import React from "react";
import webdevlopment from '../image/webdevlopment.jpg';
import seo1 from '../image/seo1.jpg';
import branding from '../image/branding.jpg';
import digitalmarketing from '../image/digitalmarketing.jpg';
import landingpage from '../image/landingpage.jpg';

const cardsData = [
  {
    id: 1,
    image: seo1 ,
    heading: "Web devlopement",
    paragraph: "Creates a professional online presence, improves user experience, boosts business credibility, and reaches a wider audience. Basically, it's like building your digital storefront for the world to see.",
    link: "#",
  },
  {
    id: 2,
    image: webdevlopment,
    heading: "SEO",
    paragraph: " SEO makes your website more visible, driving more visitors and building trust with users. It's like making sure your shop's at the busiest corner in town, rather than a quiet back alley.",
    link: "#",
  },
  {
    id: 3,
    image: branding,
    heading: "Branding",
    paragraph: "Branding boosts recognition, builds trust, and distinguishes you from the competition. It fosters customer loyalty and adds perceived value, making your offerings more appealing.",
    link: "#",
  },
  {
    id: 4,
    image: digitalmarketing,
    heading: "Digital Marketing",
    paragraph: "Digital marketing extends your reach, targets your audience precisely, and offers measurable results. It's like having a supercharged megaphone to get your message to exactly the right people.",
    link: "#",
  },
  {
    id: 5,
    image: landingpage,
    heading: "Landing Pages",
    paragraph: "Landing pages are conversion machines. They focus your visitors' attention on a single call to action, boosting lead generation and sales. Plus, they provide valuable data on user behavior.",
    link: "#",
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-green-100">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="group bg-white text-green-900 subpixel-antialiased	 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110"
        >
          <img
            src={card.image}
            alt={card.heading}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition duration-300">
              {card.heading}
            </h2>
            <p className="text-gray-600 mb-4">{card.paragraph}</p>
            <a
              href={card.link}
              className="text-blue-500 font-semibold hover:text-blue-700 transition duration-300"
            >
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
