import React from "react";
import "./about us.css";
import { TbQuote, TbStarFilled, TbStar } from "react-icons/tb";

const Testimonies: React.FC = () => {
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
  ];

  return (
    <div className="about-root" style={{ minHeight: "100vh" }}>
      <section className="hero" style={{ display: "grid", placeItems: "center", minHeight: "60vh" }}>
        <div className="container">
          <h1>What Our Clients Say</h1>
          <p>Real feedback from unforgettable events.</p>
        </div>
        <svg className="hero-curve" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,120 C300,220 1140,0 1440,90 L1440,180 L0,180 Z" fill="white" />
        </svg>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {testimonials.map((t) => (
              <article key={t.name} className="card" style={{ gridColumn: "span 4" }}>
                <div style={{ color: "#60a5fa", marginBottom: 10 }}>
                  <TbQuote size={22} aria-hidden="true" />
                </div>
                <p style={{ marginBottom: 18 }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <strong>{t.name}</strong>
                  <span aria-label={`${t.rating} out of 5 stars`} style={{ display: "inline-flex", gap: 2, color: "#f59e0b" }}>
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

export default Testimonies;
