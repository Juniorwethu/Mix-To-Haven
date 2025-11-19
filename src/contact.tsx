import React from "react";
import "./about us.css";
import { TbPhone, TbMail, TbBrandInstagram, TbBrandTiktok, TbMapPin } from "react-icons/tb";

const Contact: React.FC = () => {
  return (
    <div className="about-root" 
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column", width: "142%", overflowX: "hidden" }}    
      >
      <section
        className="hero"
        style={{
          display: "grid",
          placeItems: "center",
          minHeight: "40vh",
          padding: "48px 20px",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h1>Contact Us</h1>
          <p>We’d love to help plan your perfect bar experience.</p>
        </div>
        <svg
          className="hero-curve"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{ display: "block", width: "100%", height: 64 }}
        >
          <path d="M0,120 C300,220 1140,0 1440,90 L1440,180 L0,180 Z" fill="white" />
        </svg>
      </section>

      <section className="section">
        <div className="container">
          <h2>Get in Touch</h2>
          <div
            style={{
              display: "grid",
              gap: 18,
              gridTemplateColumns: "1.2fr 0.8fr",
              alignItems: "start",
              marginTop: 16,
            }}
          >
            {/* Left: Map */}
            <article className="card float" style={{ borderRadius: 18, overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "16px 16px 0" }}>
                <div className="icon-badge">
                  <TbMapPin size={18} strokeWidth={1.25} aria-hidden="true" />
                </div>
                <div>
                  <h3 style={{ margin: 0 }}>Our Location</h3>
                  <p style={{ marginTop: 4 }}>159 Allan Rd, Midrand, Gauteng</p>
                </div>
              </div>
              <div style={{ height: 420, width: "100%" }}>
                <iframe
                  title="159 Allan Rd, Midrand, Gauteng"
                  src="https://www.google.com/maps?q=159%20Allan%20Rd%20Midrand%20Gauteng&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </article>

            {/* Right: Contact cards stacked */}
            <div style={{ display: "grid", gap: 16 }}>
              <article className="card float">
                <div className="icon-badge">
                  <TbPhone size={18} strokeWidth={1.25} aria-hidden="true" />
                </div>
                <h3>Phone</h3>
                <p>
                  <a href="tel:+27787983991" style={{ textDecoration: "none" }}>078 798 3991</a>
                </p>
              </article>

              <article className="card float">
                <div className="icon-badge">
                  <TbMail size={18} strokeWidth={1.25} aria-hidden="true" />
                </div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:Mix.To.Haven@outlook.com" style={{ textDecoration: "none" }}>
                    Mix.To.Haven@outlook.com
                  </a>
                </p>
              </article>

              <article className="card float">
                <div className="icon-badge">
                  <TbBrandInstagram size={18} strokeWidth={1.25} aria-hidden="true" />
                </div>
                <h3>Instagram</h3>
                <p>
                  <a href="https://instagram.com/mix.tohaven" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    @mix.tohaven
                  </a>
                </p>
              </article>

              <article className="card float">
                <div className="icon-badge">
                  <TbBrandTiktok size={18} strokeWidth={1.25} aria-hidden="true" />
                </div>
                <h3>TikTok</h3>
                <p>
                  <a href="https://www.tiktok.com/@mix_2_haven" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    @mix_2_haven
                  </a>
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;