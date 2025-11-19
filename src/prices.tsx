import React from "react";
import "./about us.css";

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

	return (
		<div className="about-root" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
			<section className="hero" style={{ display: "grid", placeItems: "center", minHeight: "60vh" }}>
				<div className="container">
					<h1>Pricing</h1>
					<p>Transparent packages for every occasion.</p>
				</div>
				<svg className="hero-curve" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true">
					<path d="M0,120 C300,220 1140,0 1440,90 L1440,180 L0,180 Z" fill="white" />
				</svg>
			</section>

			{/* Price List */}
			<section className="section" style={{ paddingTop: 0 }}>
				<div className="container">
					<h2>Price List</h2>
					<div
						style={{
							display: "grid",
							gap: 18,
							gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
							marginTop: 16,
						}}
					>
						{items.map((i) => (
							<article
								key={i.name}
								className="card float"
								style={{
									padding: "18px 18px 16px",
									borderRadius: 18,
									display: "flex",
									flexDirection: "column",
									gap: 8,
									minHeight: 140,
								}}
							>
								<h3 style={{ margin: 0, fontSize: "15px" }}>{i.name}</h3>
								<p style={{ margin: "4px 0 0", fontWeight: 600 }}>{i.price}</p>
								{i.note && (
									<p style={{ margin: "6px 0 0", fontSize: "12px", opacity: 0.75, lineHeight: 1.4 }}>{i.note}</p>
								)}
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Packages */}
			<section className="section">
				<div className="container">
					<h2>Packages</h2>
					<div style={{ display: "grid", gap: 24, marginTop: 12 }}>
						{packages.map((p, idx) => (
							<article
								key={p.title}
								className="card float"
								style={{
									padding: "28px 28px 24px",
									borderRadius: 22,
									background:
										idx === 0
											? "linear-gradient(180deg,#ffffff,#eef4ff)"
											: idx === 1
												? "linear-gradient(180deg,#ffffff,#fdf2f8)"
												: "linear-gradient(180deg,#ffffff,#fef9e6)",
								}}
							>
								<h3 style={{ marginTop: 0 }}>{p.title}</h3>
								<p style={{ margin: "4px 0 0", fontSize: 13, fontWeight: 500 }}>
									{p.ideal} · {p.guests}
								</p>
								<p style={{ margin: "6px 0 12px", fontWeight: 700 }}>{p.price}</p>
								<div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
									{p.includes.map((inc) => (
										<span
											key={inc}
											style={{
												background: "rgba(0,0,0,.06)",
												padding: "6px 10px",
												borderRadius: 14,
												fontSize: 12,
												whiteSpace: "nowrap",
											}}
										>
											{inc}
										</span>
									))}
								</div>
								{p.extra && <p style={{ margin: "0 0 16px", fontSize: 12, opacity: 0.7 }}>{p.extra}</p>}

								{/* Menus (only if defined) */}
								{p.menuSignature && (
									<div style={{ marginBottom: 14 }}>
										<strong style={{ fontSize: 13 }}>Signature Cocktails:</strong>
										<ul style={{ margin: "4px 0 0", paddingLeft: 16, fontSize: 12, lineHeight: 1.5 }}>
											{p.menuSignature.map((m) => (
												<li key={m}>{m}</li>
											))}
										</ul>
									</div>
								)}
								{p.menuClassic && (
									<div style={{ marginBottom: 14 }}>
										<strong style={{ fontSize: 13 }}>Unlimited Classic Options:</strong>
										<ul style={{ margin: "4px 0 0", paddingLeft: 16, fontSize: 12, lineHeight: 1.5 }}>
											{p.menuClassic.map((m) => (
												<li key={m}>{m}</li>
											))}
										</ul>
									</div>
								)}
								{p.menuMocktail && (
									<div style={{ marginBottom: 14 }}>
										<strong style={{ fontSize: 13 }}>Mocktails:</strong>
										<ul style={{ margin: "4px 0 0", paddingLeft: 16, fontSize: 12, lineHeight: 1.5 }}>
											{p.menuMocktail.map((m) => (
												<li key={m}>{m}</li>
											))}
										</ul>
									</div>
								)}
								{(p as any).welcomeDrinks && (
									<div>
										<strong style={{ fontSize: 13 }}>Welcome Drinks:</strong>
										<ul style={{ margin: "4px 0 0", paddingLeft: 16, fontSize: 12, lineHeight: 1.5 }}>
											{(p as any).welcomeDrinks.map((m: string) => (
												<li key={m}>{m}</li>
											))}
										</ul>
									</div>
								)}
							</article>
						))}
					</div>
					<p style={{ marginTop: 24, fontSize: 12, opacity: 0.7 }}>
						Need a fully bespoke package? Reach out for a custom proposal tailored to your event scale and vision.
					</p>
				</div>
			</section>

			{/* Please Note */}
			<section className="section light" style={{ paddingTop: 0 }}>
				<div className="container">
					<h2>Please Note</h2>
					<article
						className="card float"
						style={{
							padding: 22,
							borderRadius: 18,
							background: "#0b0e13",
							color: "#ffffff",
							border: "1px solid rgba(255,255,255,.08)",
							boxShadow: "0 12px 32px rgba(0,0,0,.5)",
						}}
					>
						<ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6, color: "rgba(255,255,255,.92)" }}>
							<li>
								All packages include high‑quality plastic cups as standard. Glassware is not included and can be added upon
								request at an additional cost.
							</li>
							<li>
								The cocktail, mocktail, and drink menus shown are examples only—clients are welcome to customise their own
								selections.
							</li>
							<li>
								Final pricing may vary based on guest count, travel distance, menu customisation, and any additional services
								requested.
							</li>
						</ul>
						<div style={{ marginTop: 14 }}>
							<strong style={{ color: "#fff" }}>Contact:</strong>{" "}
							<a href="tel:+27787983991" style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: 3 }}>
								078 798 3991
							</a>{" "}
							·{" "}
							<a
								href="mailto:Mix.To.Haven@outlook.com"
								style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: 3 }}
							>
								Mix.To.Haven@outlook.com
							</a>
						</div>
					</article>
				</div>
			</section>
		</div>
	);
};

export default Prices;
