import React from "react";
import "./about us.css";
import "./testimonies.css";
import { TbQuote, TbStarFilled, TbStar } from "react-icons/tb";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sipho Ndlovu",
      text:
        "The bartenders were the life of the party! So professional and the cocktails were absolutely amazing. Our guests couldn't stop talking about them.",
      rating: 5,
    },
    {
      name: "Emily Williams",
      text:
        "I've had whisky sours at many top restaurants, and the one I had from MixtoHaven was right up there with the best. Perfectly balanced and delicious. Incredible service!",
      rating: 5,
    },
    {
      name: "Naledi Khumalo",
      text:
        "We opted for the dry bar for our event, and it was a huge hit. The mocktails were creative and so refreshing. It was great to have such a sophisticated non-alcoholic option.",
      rating: 4,
    },
    {
      name: "David Chen",
      text:
        "Great staff and fantastic service from start to finish. They made planning the bar for our wedding so easy. Highly recommend their team.",
      rating: 4,
    },
    {
      name: "Thando Nkosi",
      text:
        "Exceptional service! The team was friendly, efficient, and the drinks were top‑notch. They really elevated our corporate event.",
      rating: 5,
    },
    {
      name: "Jessica Brown",
      text:
        "The cocktail bar was a highlight of our celebration. The mixologists were not only skilled but also so charismatic. Every drink was a work of art.",
      rating: 5,
    },
    {
      name: "Lindiwe Dlamini",
      text:
        "They nailed everything — from the bespoke cocktail menu to flawless service. Our guests were genuinely impressed and kept asking who organised the bar.",
      rating: 5,
    },
    {
      name: "Ruan van der Merwe",
      text:
        "Professional, punctual and the gin cocktails were spot-on. The team made our birthday function effortless and memorable.",
      rating: 5,
    },
    {
      name: "Thabo Mokoena",
      text:
        "Great value and superb execution for our community event. Friendly team who worked well with our schedule and guests loved the drinks.",
      rating: 4,
    },
  ];

  return (
    <div className="testimonies-root">
      <section className="hero testimonies-hero">
        <div className="container">
          <h1 className="testimonies-hero-title">What Our Clients Say</h1>
          <p className="testimonies-hero-subtitle">Real feedback from unforgettable events.</p>
        </div>
        <svg className="hero-curve" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,120 C300,220 1140,0 1440,90 L1440,180 L0,180 Z" fill="white" />
        </svg>
      </section>

      <section className="section testimonies-section">
        <div className="container">
          <div className="services-grid testimonies-grid">
            {testimonials.map((t) => (
              <article key={t.name} className="card float testimonies-card">
                <div className="testimonies-quote-icon">
                  <TbQuote size={22} aria-hidden="true" />
                </div>
                <p className="testimonies-text">{t.text}</p>
                <div className="testimonies-footer">
                  <strong>{t.name}</strong>
                  <span aria-label={`${t.rating} out of 5 stars`} className="testimonies-stars">
                    {Array.from({ length: 5 }).map((_, i) =>
                      i < t.rating ? <TbStarFilled key={i} /> : <TbStar key={i} />
                    )}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
