import React from "react";
import "./about us.css";
import { TbCheck, TbPhone, TbMail } from "react-icons/tb";

const Prices: React.FC = () => {
	// price list as card data
	const items = [
		{ name: "Travel fee", price: "R25 per km" },
		{
			name: "Labour fees",
			price: "R450",
			note:
				"Includes: Bar collection & shopping, buying/collecting equipment, fixing/prepping gear, prepping garnishes, writing menu items, general bartender/event labour.",
		},
		{ name: "Three Interchangeable Panel Bar", price: "R1900" },
		{ name: "Two Frame Bar Stand", price: "R1450" },
		{ name: "Designer Bars", price: "Quote upon request" },
		{ name: "Bartenders", price: "R250 / hr (4 hrs min)" },
		{ name: "Waiter / Waitresses", price: "R150 / hr (4 hrs min)" },
		{ name: "Champagne Wall", price: "From R950" },
		{ name: "Champagne Glasses", price: "From R10 / glass" },
		{ name: "Sticker Designing", price: "From R250" },
		{ name: "Sticker Prices", price: "R300 – R500 (design dependent)" },
	];

	const packages = [
		{
			title: "Essential Package – 4 Hours",
			ideal: "Small gatherings, home events, intimate celebrations",
			guests: "Up to 40 guests",
			price: "From R9,500",
			includes: [
				"1 × Professional Bartender",
				"Cocktail & Dry Bar Setup",
				"1 Signature Cocktails + 1 Classic Options",
				"High-quality Plastic Cups",
				"Ice, Fresh Garnishes & Mixers",
				"Mobile Bar Unit",
				"Delivery, Setup & Breakdown",
			],
			extra: "Glassware available on request (quoted separately).",
			menuSignature: [
				"Haven Sunset – Gin, orange, cranberry, citrus syrup",
				"Berry Bliss – Gin, mixed berries, lemon, light tonic",
			],
			menuClassic: ["Mojito", "Whiskey & Ginger"],
			menuMocktail: ["Virgin Mojito", "Citrus Cooler"],
		},
		{
			title: "Premium Package – 6 Hours",
			ideal: "Birthdays, corporate socials, engagement parties",
			guests: "Up to 80 guests",
			price: "From R14,500",
			includes: [
				"2 × Professional Bartenders",
				"Cocktail, Gin & Mocktail Service",
				"3 Signature Cocktails + 1 Classic Options",
				"High-quality Plastic Cups",
				"Ice, Fresh Ingredients & Garnish Station",
				"Custom Menu Board",
				"Mobile Bar Unit",
				"Delivery, Setup & Breakdown",
			],
			extra: "Glassware available on request (quoted separately).",
			menuSignature: [
				"Passion Martini – Vodka, passionfruit, vanilla, citrus",
				"Tropical Storm – Rum, pineapple, lime, mint",
				"Ruby Gin Fizz – Pink gin, lemon, grenadine, soda",
			],
			menuClassic: ["Margarita", "Long Island Iced Tea", "Gin & Tonic (citrus or berry garnish)"],
			menuMocktail: ["Passionfruit Spritz", "Pineapple & Mint Refresher"],
		},
		{
			title: "Deluxe Experience – 6 Hours",
			ideal: "Weddings & milestone celebrations",
			guests: "Up to 120 guests",
			price: "From R19,500",
			includes: [
				"3 × Bartenders + 1 Barback",
				"Cocktail, Gin, Champagne & Mocktail Bar",
				"3 Signature Cocktails + 2 Classics",
				"Premium Spirits & House-Infused Mixers",
				"High-quality Plastic Cups",
				"Ice Stations & Creative Garnishes",
				"Styled Bar Setup to Match Event Theme",
				"Welcome Drinks on Arrival",
				"Mobile Bar Unit",
				"Delivery, Setup & Breakdown",
			],
			extra: "Glassware available on request (quoted separately).",
			menuSignature: [
				"Royal Gin Garden – Top-shelf gin, cucumber, elderflower, tonic",
				"Haven Gold Fashioned – Whiskey, honey, bitters",
				"Lychee Luxe – Lychee, vodka, jasmine, lemonade",
				"Midnight Ember – rum, cola reduction, charred orange",
			],
			menuClassic: [
				"Negroni",
				"Espresso Martini",
				"Mojito Variants (classic / berry / pineapple)",
				"Whiskey Sours",
				"Cosmopolitan",
				"Paloma",
			],
			menuMocktail: ["Lychee Fizz", "Virgin Pina Colada", "Sparkling Berry Citrus"],
			welcomeDrinks: ["Sparkling rosé refreshers", "Seasonal fruit spritzers"],
		},
	];

	// Duplicate items for seamless looping
	const carouselItems = [...items, ...items];

	return (
		<div className="price-root">
			<section className="hero price-hero">
				<div className="container">
					<h1 className="price-hero-title">Pricing</h1>
					<p className="price-hero-subtitle">Transparent packages for every occasion.</p>
				</div>
				<svg className="hero-curve" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true">
					<path d="M0,120 C300,220 1140,0 1440,90 L1440,180 L0,180 Z" fill="white" />
				</svg>
			</section>
			{/* Carousel styles */}
			<style>{`
        .price-carousel {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
        }
        .price-carousel:hover .price-carousel__container {
          animation-play-state: paused;
        }
        .price-carousel__container {
          display: flex;
          width: max-content;
          animation: marquee 36s linear infinite;
        }
        .price-carousel__slide {
          flex-shrink: 0;
          width: 340px; /* Fixed width for consistent speed calculation */
          padding-left: 16px;
          box-sizing: content-box;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
			{/* Price List */}
			<section className="section price-list-section">
				<div className="container">
					<h2 className="price-section-title">Price List</h2>
					<div className="price-carousel">
						<div className="price-carousel__container">
							{carouselItems.map((i, index) => (
								<div className="price-carousel__slide" key={`${i.name}-${index}`}>
									<article className="card float price-package-card">
										<h3 className="price-package-name">{i.name}</h3>
										<p className="price-package-price">{i.price}</p>
										{i.note && (
											<p className="price-package-note">{i.note}</p>
										)}
									</article>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* Packages */}
			<section className="section price-packages-section">
				<div className="container">
					<h2 className="price-section-title">Packages</h2>
					<div className="price-packages-grid">
						{packages.map((p) => (
							<article
								key={p.title}
								className="card float price-package-detail-card"
							>
								<h3>{p.title}</h3>
								<p className="price-package-ideal">
									<strong>Ideal for:</strong> {p.ideal}
								</p>
								<p className="price-package-guests">
									<strong>Guests:</strong> {p.guests}
								</p>
								<p className="price-package-amount">{p.price}</p>
								
								<strong className="price-package-includes-title">What's Included:</strong>
								<ul className="price-package-includes-list">
									{p.includes.map((inc) => (
										<li key={inc} className="price-package-includes-item">
											<TbCheck size={18} className="price-package-includes-icon" />
											<span>{inc}</span>
										</li>
									))}
								</ul>

								{p.extra && <p className="price-package-extra">{p.extra}</p>}

								{/* Menus (only if defined) */}
								{p.menuSignature && (
									<div className="price-package-menu-section">
										<strong className="price-package-menu-title">Signature Cocktails:</strong>
										<ul className="price-package-menu-list">
											{p.menuSignature.map((m) => (
												<li key={m}>{m}</li>
											))}
										</ul>
									</div>
								)}
								{p.menuClassic && (
									<div className="price-package-menu-section">
										<strong className="price-package-menu-title">Unlimited Classic Options:</strong>
										<ul className="price-package-menu-list">
											{p.menuClassic.map((m) => (
												<li key={m}>{m}</li>
											))}
										</ul>
									</div>
								)}
								{p.menuMocktail && (
									<div className="price-package-menu-section">
										<strong className="price-package-menu-title">Mocktails:</strong>
										<ul className="price-package-menu-list">
											{p.menuMocktail.map((m) => (
												<li key={m}>{m}</li>
											))}
										</ul>
									</div>
								)}
								{(p as any).welcomeDrinks && (
									<div className="price-package-menu-section">
										<strong className="price-package-menu-title">Welcome Drinks:</strong>
										<ul className="price-package-menu-list">
											{(p as any).welcomeDrinks.map((m: string) => (
												<li key={m}>{m}</li>
											))}
										</ul>
									</div>
								)}
							</article>
						))}
					</div>
					<p className="price-packages-note">
						Need a fully bespoke package? Reach out for a custom proposal tailored to your event scale and vision.
					</p>
				</div>
			</section>
			{/* Please Note */}
			<section className="section light price-note-section">
  <div className="container">
    <h2 className="price-section-title">Please Note</h2>

    <article className="card float price-note-card">
      <div className="price-note-content">
        <div className="price-note-list-wrapper">
          <ul className="price-note-list">
            <li>
              All packages include high‑quality plastic cups as standard. Glassware is optional and can be added on request
              (quoted separately).
            </li>
            <li>
              The cocktail, mocktail, and drink menus shown are examples — clients are welcome to customise selections.
            </li>
            <li>
              Final pricing may vary based on guest count, travel distance, menu customisation, and additional services requested.
            </li>
          </ul>
        </div>

        <div className="price-contact-wrapper">
          <div className="price-contact-card">
            <div className="price-contact-title">Contact</div>

            <a
              href="tel:+27787983991"
              className="price-contact-link"
            >
              <TbPhone size={18} aria-hidden="true" /> 078 798 3991
            </a>

            <div className="price-contact-spacer" />

            <a
              href="mailto:Mix.To.Haven@outlook.com"
              className="price-contact-link"
            >
              <TbMail size={18} aria-hidden="true" /> Mix.To.Haven@outlook.com
            </a>
          </div>

          <div className="price-contact-note">
            Available for quotes & bookings — WhatsApp preferred.
          </div>
        </div>
      </div>
    </article>
  </div>
</section>
		</div>
	);
};

export default Prices;
