import React from "react";
import "./about us.css";
import "./services.css";
import {
  TbGlassFull,
  TbLeaf,
  TbBottle,
  TbSparkles,
  TbAdjustmentsAlt,
  TbMessage2,
  TbListCheck,
  TbPalette,
  TbBoom,
  TbGlassCocktail,
  TbGlassOff,
  TbGlassGin,
  TbGlassChampagne,
  TbGlass,
  TbBeer,
  TbStars,
  TbCalendarEvent,
  TbCalendarHeart,
  TbClipboardCheck,
  TbPackage,
  TbTag,
  TbBuildingStore,
  TbUsers,
  TbConfetti,
  TbWallet
} from "react-icons/tb";

const Services: React.FC = () => {
  return (
    <div className="services-root">
      <section className="services-hero">
        <div className="container services-hero-container">
          <h1 className="services-hero-title">Our Services</h1>
          <p className="services-hero-subtitle">Crafted to elevate every event.</p>
        </div>
        <svg className="hero-curve services-hero-curve" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,120 C300,220 1140,0 1440,90 L1440,180 L0,180 Z" fill="white" />
        </svg>
      </section>

      {/* Our Process */}
      <section className="section light services-section">
        <div className="container">
          <h2 className="services-section-title">Our Process</h2>

          {/* arrow graph */}
          <div className="services-process-rail">
            <div className="process-step">
              <div className="icon-badge sm">
                <TbMessage2 size={18} strokeWidth={1.25} aria-hidden="true" />
              </div>
              <h3>Consultation</h3>
              <p>We learn about your event, venue, guest count, and vision.</p>
            </div>

            <div className="process-step">
              <div className="icon-badge sm">
                <TbListCheck size={18} strokeWidth={1.25} aria-hidden="true" />
              </div>
              <h3>Menu Curation</h3>
              <p>Tailored cocktails, mocktails, taps, and spirits to your theme.</p>
            </div>

            <div className="process-step">
              <div className="icon-badge sm">
                <TbPalette size={18} strokeWidth={1.25} aria-hidden="true" />
              </div>
              <h3>Setup & Styling</h3>
              <p>Stylish bars, premium glassware, and refined details.</p>
            </div>

            <div className="process-step">
              <div className="icon-badge sm">
                <TbSparkles size={18} strokeWidth={1.25} aria-hidden="true" />
              </div>
              <h3>Service</h3>
              <p>Friendly professionals deliver seamless service.</p>
            </div>

            <div className="process-step">
              <div className="icon-badge sm">
                <TbBoom size={18} strokeWidth={1.25} aria-hidden="true" />
              </div>
              <h3>Clear‑down</h3>
              <p>We pack down, manage waste, and leave it spotless.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="section services-gallery-section">
        <div className="container">
          <div className="services-gallery-grid">
            <img
              src="/bar.4.jpg"
              alt="Stylish mobile bar setup"
              className="services-gallery-img-rect"
            />
            <img
              src="/drink.4.jpg"
              alt="A vibrant cocktail"
              className="services-gallery-img-circle"
            />
            <img
              src="/Bar.2.jpeg"
              alt="Mix to Haven bar"
              className="services-gallery-img-rect"
            />
            <img
              src="/drink.5.jpg"
              alt="A refreshing drink"
              className="services-gallery-img-circle"
            />
            <img
              src="/drinks.3.jpg"
              alt="A classic cocktail"
              className="services-gallery-img-rect"
            />
          </div>
        </div>
      </section>

      {/* Events We Cater For */}
      <section className="section services-gallery-section">
        <div className="container">
          <h2 className="services-section-title">Events We Cater For</h2>
          <div className="services-events-grid">
            { [
              {
                title: "Weddings",
                Icon: TbCalendarHeart,
                desc:
                  "From elegant reception bars to signature cocktails that match your theme—unforgettable moments all day and night.",
              },
              {
                title: "Private Parties",
                Icon: TbConfetti,
                desc:
                  "Birthdays, anniversaries, engagements—our bars keep the good times flowing with style.",
              },
              {
                title: "Corporate Events",
                Icon: TbClipboardCheck,
                desc:
                  "Professional, refined service for launches, networking, conferences, staff parties, and client entertaining.",
              },
              {
                title: "Brand Activations",
                Icon: TbStars,
                desc:
                  "Eye‑catching bar setups, custom menus, and memorable service that brings your brand to life.",
              },
              {
                title: "Festivals & Outdoor Events",
                Icon: TbBeer,
                desc:
                  "High‑volume, efficient bars designed for busy venues, outdoor celebrations, and large gatherings.",
              },
              {
                title: "Charity Galas & Fundraisers",
                Icon: TbWallet,
                desc:
                  "Elegant, seamless bar service that elevates guest experience and supports your event goals.",
              },
              {
                title: "Holiday & Seasonal Events",
                Icon: TbCalendarEvent,
                desc:
                  "Christmas, New Year’s, summer socials—tailored menus and styling for every season.",
              },
              {
                title: "Pop‑Up Events",
                Icon: TbBuildingStore,
                desc:
                  "Flexible, stylish bar builds perfect for markets, rooftops, and temporary venues.",
              },
            ].map(({ title, Icon, desc }) => (
              <div key={title} className="services-event-card">
                <div className="icon-badge">
                  <Icon size={18} strokeWidth={1.25} aria-hidden="true" />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Circle Images */}
      <section className="section services-images-section">
        <div className="container">
          <div className="services-images-flex">
            <img
              src="/drinks.3.jpg"
              alt="A refreshing beverage"
              className="services-gallery-img-circle"
            />
            <img
              src="/drinks.2.jpg"
              alt="Another fine drink"
              className="services-gallery-img-circle"
            />
          </div>
        </div>
      </section>


      {/* What We Offer */}
      <section className="section services-gallery-section">
        <div className="container">
          <h2 className="services-section-title">What We Offer</h2>
          <div className="services-offerings-grid">
            { [
              {
                title: "Drinks Bar",
                Icon: TbBottle,
                desc:
                  "A curated bar that caters to every taste—from sparkling refreshers to signature pours—delivered with elegance to keep guests happy and hydrated.",
              },
              {
                title: "Cocktail Bar",
                Icon: TbGlassCocktail,
                desc:
                  "Expert mixologists crafting timeless classics and bold signatures with premium spirits and fresh ingredients.",
              },
              {
                title: "Mocktail Bar",
                Icon: TbGlassOff,
                desc:
                  "Vibrant, alcohol‑free creations that look as stunning as they taste—handcrafted so every guest feels included.",
              },
              {
                title: "Gin Bar",
                Icon: TbGlassGin,
                desc:
                  "Premium gins, artisan tonics, and creative garnishes for crisp, custom G&Ts and tasting flights with flair.",
              },

              // Added services
              {
                title: "Prosecco / Champagne Bar",
                Icon: TbGlassChampagne,
                desc:
                  "A luxurious station pouring chilled bubbles—perfect for weddings, toasts, and milestone celebrations.",
              },
              {
                title: "Whisky / Rum Tasting Bar",
                Icon: TbGlassFull,
                desc:
                  "A guided tasting featuring premium bottles, flavour notes, and curated pours for enthusiasts.",
              },
              {
                title: "Juice & Smoothie Bar",
                Icon: TbGlass,
                desc:
                  "Fresh‑pressed juices and vibrant smoothies for daytime events, wellness gatherings, or family‑friendly venues.",
              },
              {
                title: "Mobile Beer Tap Bar",
                Icon: TbBeer,
                desc:
                  "Craft beers, lagers, or guest kegs from a stylish tap setup—ideal for festivals, parties, and outdoor events.",
              },
              {
                title: "Welcome Drinks Service",
                Icon: TbStars,
                desc:
                  "Beautifully presented arrival drinks that set the tone the moment guests walk in.",
              },
              {
                title: "Table Service Add‑On",
                Icon: TbUsers,
                desc:
                  "Waitstaff delivering drinks to guests so the experience feels seamless and elevated.",
              },
              {
                title: "Glassware & Ice Packages",
                Icon: TbPackage,
                desc:
                  "Crystal glassware, crushed and cubed ice—handled end‑to‑end so you don’t worry about logistics.",
              },
              {
                title: "Custom Drinks Menu Design",
                Icon: TbTag,
                desc:
                  "Tailored, branded menu boards or printed cards designed to match your event theme.",
              },
              {
                title: "Full Event Bar Management",
                Icon: TbClipboardCheck,
                desc:
                  "End‑to‑end service including stock, logistics, setup, and breakdown—so you can relax and enjoy.",
              },
            ].map(({ title, Icon, desc }) => {
              return (
                <div key={title} className="services-offering-card">
                  <div className="icon-badge lg">
                    <Icon size={28} strokeWidth={1.25} aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Two Square Images */}
      <section className="section services-images-section">
        <div className="container">
          <div className="services-gallery-grid">
            <img
              src="/drink.4.jpg"
              alt="Bar service detail"
              className="services-gallery-img-rect"
            />
            <img
              src="/drinks.2.jpg"
              alt="Cocktail preparation"
              className="services-gallery-img-rect"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us – compact pills, different to About */}
      <section className="section light services-gallery-section">
        <div className="container">
          <h2 className="services-section-title">Why Choose Us</h2>
          <div className="services-why-grid">
            { [
              {
                title: "Personalised Setups",
                Icon: TbAdjustmentsAlt,
                text: "Bars designed to fit your venue, theme, and guest list.",
              },
              {
                title: "Professional Team",
                Icon: TbSparkles,
                text: "Friendly, efficient staff who bring theatre and service.",
              },
              {
                title: "Quality Ingredients",
                Icon: TbLeaf,
                text: "Premium spirits, fresh produce, and house-made mixers.",
              },
            ].map(({ title, Icon, text }) => (
              <article
                key={title}
                className="services-why-card"
              >
                <div className="icon-badge">
                  <Icon size={18} strokeWidth={1.25} aria-hidden="true" />
                </div>
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band services-gallery-section">
        <div className="container services-cta-container">
          <h2 className="services-section-title">Ready to chat about your event?</h2>
          <p className="services-cta-text">
            Contact us to book our bespoke mobile bar services—weddings, corporate functions, or private parties.
          </p>
          <a
            className="btn services-cta-btn"
            href="https://wa.me/27787983991"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
