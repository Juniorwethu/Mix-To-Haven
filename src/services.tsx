import React from "react";
import "./about us.css";
import styled from "styled-components";
import {
  TbGlassFull,
  TbLeaf,
  TbBottle,
  TbSparkles,
  TbAdjustmentsAlt,
  TbMessage2,
  TbListCheck,
  TbPalette,
  TbBoom, // fix: replaces TbBoom
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

// Elegant shadcn-like cards with palette variables
const ServiceCard = styled.article`
  display: grid;
  grid-template-columns: 72px 1fr;
  align-items: start;
  gap: 16px;
  padding: 24px 24px;
  border-radius: 20px;
  background: linear-gradient(180deg, var(--card-from, #ffffff), var(--card-to, #f5f8ff));
  border: 1px solid var(--card-border, rgba(47,128,237,.18));
  box-shadow: 0 10px 28px var(--card-shadow, rgba(30,64,175,.10));
  transition: transform .25s ease, box-shadow .3s ease, border-color .3s ease;
  will-change: transform, box-shadow;
  &:hover { transform: translateY(-6px); box-shadow: 0 16px 40px var(--card-shadow-hover, rgba(30,64,175,.16)); }
`;
const EventCard = styled(ServiceCard)`
  grid-template-columns: 44px 1fr;
  padding: 18px 20px;
  border-radius: 18px;
`;

// Palettes for nice, soft color variety
const palettes = [
  { from: "#ffffff", to: "#eef4ff", border: "rgba(30,64,175,.22)", shadow: "rgba(30,64,175,.10)", hover: "rgba(30,64,175,.16)" }, // blue
  { from: "#fff7ed", to: "#ffedd5", border: "rgba(234,88,12,.22)", shadow: "rgba(234,88,12,.10)", hover: "rgba(234,88,12,.16)" },  // orange
  { from: "#fefce8", to: "#fef3c7", border: "rgba(245,158,11,.22)", shadow: "rgba(245,158,11,.10)", hover: "rgba(245,158,11,.16)" }, // amber
  { from: "#ecfdf5", to: "#d1fae5", border: "rgba(16,185,129,.22)", shadow: "rgba(16,185,129,.10)", hover: "rgba(16,185,129,.16)" },  // emerald
  { from: "#ecfeff", to: "#cffafe", border: "rgba(14,165,233,.22)", shadow: "rgba(14,165,233,.10)", hover: "rgba(14,165,233,.16)" },  // sky
  { from: "#fdf2f8", to: "#fce7f3", border: "rgba(236,72,153,.22)", shadow: "rgba(236,72,153,.10)", hover: "rgba(236,72,153,.16)" }, // pink
];

const eventPalettes = [
  { from: "#ffffff", to: "#eef4ff", border: "rgba(30,64,175,.22)", shadow: "rgba(30,64,175,.10)", hover: "rgba(30,64,175,.16)" },
  { from: "#fefce8", to: "#fef3c7", border: "rgba(245,158,11,.22)", shadow: "rgba(245,158,11,.10)", hover: "rgba(245,158,11,.16)" },
  { from: "#ecfdf5", to: "#d1fae5", border: "rgba(16,185,129,.22)", shadow: "rgba(16,185,129,.10)", hover: "rgba(16,185,129,.16)" },
  { from: "#fdf2f8", to: "#fce7f3", border: "rgba(236,72,153,.22)", shadow: "rgba(236,72,153,.10)", hover: "rgba(236,72,153,.16)" },
  { from: "#fff7ed", to: "#ffedd5", border: "rgba(234,88,12,.22)", shadow: "rgba(234,88,12,.10)", hover: "rgba(234,88,12,.16)" },
  { from: "#ecfeff", to: "#cffafe", border: "rgba(14,165,233,.22)", shadow: "rgba(14,165,233,.10)", hover: "rgba(14,165,233,.16)" },
  { from: "#f3e8ff", to: "#ede9fe", border: "rgba(139,92,246,.22)", shadow: "rgba(139,92,246,.10)", hover: "rgba(139,92,246,.16)" },
  { from: "#f1f5f9", to: "#e2e8f0", border: "rgba(15,23,42,.12)", shadow: "rgba(15,23,42,.08)", hover: "rgba(15,23,42,.12)" },
];

// Helper to convert palette to CSS vars
const cssVars = (p: {from:string; to:string; border:string; shadow:string; hover:string}) =>
  ({
    ["--card-from" as any]: p.from,
    ["--card-to" as any]: p.to,
    ["--card-border" as any]: p.border,
    ["--card-shadow" as any]: p.shadow,
    ["--card-shadow-hover" as any]: p.hover,
  } as React.CSSProperties);

const Services: React.FC = () => {
  return (
    <div className="about-root" style={{ minHeight: "100vh" }}>
      <section
        className="hero"
        style={{
          display: "grid",
          placeItems: "center",
          minHeight: "40vh", // a bit shorter than About
          padding: "48px 20px",
          
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h1>Our Services</h1>
              <p>Crafted to elevate every event.</p>
        </div>
        <svg className="hero-curve" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true" style={{ display: "block", width: "100%", height: 64 }}>
          <path d="M0,120 C300,220 1140,0 1440,90 L1440,180 L0,180 Z" fill="white" />
        </svg>
      </section>

      {/* Our Process */}
      <section className="section light">
        <div className="container">
          <h2>Our Process</h2>

          {/* arrow graph */}
          <div className="process-rail">
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

      {/* Events We Cater For */}
      <section className="section">
        <div className="container">
          <h2>Events We Cater For</h2>
          <div className="services-grid" style={{ marginTop: 16 }}>
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
            ].map(({ title, Icon, desc }, i) => (
              <EventCard key={title} style={{ gridColumn: "span 6", ...cssVars(eventPalettes[i % eventPalettes.length]) }}>
                <div className="icon-badge">
                  <Icon size={18} strokeWidth={1.25} aria-hidden="true" />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </EventCard>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section">
        <div className="container">
          <h2>What We Offer</h2>

          {/* modern row layout with thin, elegant icons */}
          <div style={{ display: "grid", gap: 18, marginTop: 16 }}>
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
            ].map(({ title, Icon, desc }, i) => {
              const p = palettes[i % palettes.length];
              return (
                <ServiceCard key={title} style={cssVars(p)}>
                  <div className="icon-badge lg" style={{ margin: 0 }}>
                    <Icon size={28} strokeWidth={1.25} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 style={{ marginTop: 2 }}>{title}</h3>
                    <p style={{ marginTop: 6 }}>{desc}</p>
                  </div>
                </ServiceCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us – compact pills, different to About */}
      <section className="section light">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 16 }}>
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
                className="float"
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr",
                  alignItems: "center",
                  gap: 12,
                  padding: "16px 18px",
                  borderRadius: 18,
                  background: "linear-gradient(180deg,#ffffff,#f5f8ff)",
                  border: "1px solid rgba(47,128,237,.18)",
                  boxShadow: "0 10px 28px rgba(30,64,175,.10)",
                  minWidth: 280,
                  flex: "1 1 320px",
                }}
              >
                <div className="icon-badge">
                  <Icon size={18} strokeWidth={1.25} aria-hidden="true" />
                </div>
                <div>
                  <strong>{title}</strong>
                  <p style={{ margin: 4 }}>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Ready to chat about your event?</h2>
          <p style={{ margin: 0, opacity: 0.9 }}>
            Contact us to book our bespoke mobile bar services—weddings, corporate functions, or private parties.
          </p>
          <a
            className="btn"
            href="https://wa.me/27787983991"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: 10 }}
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
