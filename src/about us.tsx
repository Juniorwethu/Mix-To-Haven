import React from "react";
import "./about us.css";
import { TbGlassFull, TbCup, TbAdjustmentsAlt, TbSparkles, TbLeaf, TbBottle, TbCalendar, TbConfetti, TbMapPin, TbUsers } from "react-icons/tb";

const AboutUs: React.FC = () => {
	// prevent horizontal overflow that causes a grey strip on the right
	React.useEffect(() => {
		const prevHtml = document.documentElement.style.overflowX;
		const prevBody = document.body.style.overflowX;
		document.documentElement.style.overflowX = "hidden";
		document.body.style.overflowX = "hidden";
		return () => {
			document.documentElement.style.overflowX = prevHtml;
			document.body.style.overflowX = prevBody;
		};
	}, []);

	return (
		<div
			className="about-root"
			style={{ minHeight: "100vh", display: "flex", flexDirection: "column", width: "100%", overflowX: "hidden" }}
		>
			<section
				className="hero"
				style={{
					minHeight: "55vh", // reduced from 100svh
					display: "grid",
					placeItems: "center",
					width: "100%",
					overflow: "hidden",
					padding: "56px 20px 48px", // override large CSS padding
				}}
			>
				{/* single-column hero without decorative box */}
				<div className="container" style={{ textAlign: "center" }}>
					<h1>About Mix to Haven</h1>
					<p>Mobile bars and crafted drink experiences for events of every size.</p>
				</div>
				<svg
					className="hero-curve"
					viewBox="0 0 1440 180"
					preserveAspectRatio="none"
					aria-hidden="true"
					style={{ display: "block", width: "100%", height: 64 }} // reduced from 120
				>
					<path d="M0,120 C300,220 1140,0 1440,90 L1440,180 L0,180 Z" fill="white" />
				</svg>
			</section>

			{/* Highlights row */}
			<section className="section" style={{ paddingTop: 28, paddingBottom: 28 }}>
				<div className="container">
					<div className="services-grid">
						<article className="card float" style={{ gridColumn: "span 4", display: "flex", alignItems: "center", gap: 12 }}>
							<div className="icon-badge">
								<TbUsers size={20} strokeWidth={1.25} aria-hidden="true" />
							</div>
							<div>
								<strong>Friendly Professionals</strong>
								<p style={{ margin: 4 }}>Personable team with event expertise.</p>
							</div>
						</article>
						<article className="card float" style={{ gridColumn: "span 4", display: "flex", alignItems: "center", gap: 12 }}>
							<div className="icon-badge">
								<TbMapPin size={20} strokeWidth={1.25} aria-hidden="true" />
							</div>
							<div>
								<strong>Mobile Anywhere</strong>
								<p style={{ margin: 4 }}>Bars that travel to your venue.</p>
							</div>
						</article>
						<article className="card float" style={{ gridColumn: "span 4", display: "flex", alignItems: "center", gap: 12 }}>
							<div className="icon-badge">
								<TbSparkles size={20} strokeWidth={1.25} aria-hidden="true" />
							</div>
							<div>
								<strong>Premium Drinks</strong>
								<p style={{ margin: 4 }}>Quality ingredients and presentation.</p>
							</div>
						</article>
					</div>
				</div>
			</section>

			<section id="services" className="section">
				<div className="container">
					<h2>What We Do</h2>

					<div className="services-grid">
						<article className="card float span-12">
							<div className="service-icon" style={{ display: "grid", placeItems: "center", color: "#0f1728", marginBottom: 12 }}>
								<TbGlassFull size={36} strokeWidth={1.25} aria-hidden="true" />
							</div>
							<h3>Cocktail &amp; Dry Bars</h3>
							<p>
								From signature cocktails to refined non‑alcoholic serves, we design and staff beautiful pop‑up bars tailored to your event.
							</p>
						</article>

						{/* 3-in-a-row services using span 4 each */}
						<article className="card float" style={{ gridColumn: "span 6" }}>
							<div className="service-icon">
								<TbCup size={36} strokeWidth={1.25} aria-hidden="true" />
							</div>
							<h3>Smoothie Bars</h3>
							<p>
								Fresh, vibrant blends and mocktails using premium ingredients—perfect for daytime functions, wellness activations, and family events.
							</p>
						</article>

						<article className="card float" style={{ gridColumn: "span 6" }}>
							<div className="service-icon">
								<TbUsers size={36} strokeWidth={1.25} aria-hidden="true" />
							</div>
							<h3>Professional Bartenders</h3>
							<p>
								Skilled, personable bartenders who bring theatre and smooth service to your event—from setup to last call.
							</p>
						</article>

						<article className="card float" style={{ gridColumn: "span 6" }}>
							<div className="service-icon">
								<TbBottle size={36} strokeWidth={1.25} aria-hidden="true" />
							</div>
							<h3>Tasting Guides</h3>
							<p>
								Guided wine, gin, and cocktail tastings led by experts for immersive, memorable experiences at your venue or home.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* How it works steps */}
			<section className="section light">
				<div className="container">
					<h2>How It Works</h2>
					<div className="services-grid" style={{ marginTop: 20 }}>
						<article className="card float" style={{ gridColumn: "span 4", textAlign: "left" }}>
							<div className="icon-badge sm">
								<TbCalendar size={18} strokeWidth={1.25} aria-hidden="true" />
							</div>
							<h3>1. Enquire & Plan</h3>
							<p>Tell us about your event, guest count, and vibe. We’ll propose a tailored bar setup and menu.</p>
						</article>
						<article className="card float" style={{ gridColumn: "span 4", textAlign: "left" }}>
							<div className="icon-badge sm">
								<TbGlassFull size={18} strokeWidth={1.25} aria-hidden="true" />
							</div>
							<h3>2. Curate & Prepare</h3>
							<p>We handle ingredients, equipment, and staffing—ready to roll into your venue.</p>
						</article>
						<article className="card float" style={{ gridColumn: "span 4", textAlign: "left" }}>
							<div className="icon-badge sm">
								<TbConfetti size={18} strokeWidth={1.25} aria-hidden="true" />
							</div>
							<h3>3. Serve & Celebrate</h3>
							<p>On the day, we set up, serve beautifully, and pack down—seamless from first pour to last call.</p>
						</article>
					</div>
				</div>
			</section>

			<section className="section light">
				<div className="container">
					<h2>Why Choose Us?</h2>
					<div className="why-grid">
						<article className="why-card float">
							<span className="ribbon" aria-hidden="true" />
							<div className="icon-badge">
								<TbAdjustmentsAlt size={18} strokeWidth={1.25} aria-hidden="true" />
							</div>
							<h3>Customisable Experiences</h3>
							<p>
								We tailor menus, bar design, and service style to your brief—so every sip and every detail feels on‑brand for your celebration.
							</p>
						</article>
						<article className="why-card float">
							<span className="ribbon" aria-hidden="true" />
							<div className="icon-badge">
								<TbSparkles size={18} strokeWidth={1.25} aria-hidden="true" />
							</div>
							<h3>Exceptional Service</h3>
							<p>
								Our team brings friendly professionalism, smooth operations, and a guest‑first mindset from planning to last call.
							</p>
						</article>
						<article className="why-card float">
							<span className="ribbon" aria-hidden="true" />
							<div className="icon-badge">
								<TbLeaf size={18} strokeWidth={1.25} aria-hidden="true" />
							</div>
							<h3>Premium Ingredients</h3>
							<p>
								We use quality spirits, fresh produce, and house‑made mixers to ensure drinks that look beautiful and taste unforgettable.
							</p>
						</article>
					</div>
				</div>
			</section>

			<section className="section story">
				<div className="container narrow">
					<h2>Our Story</h2>
					<p>
						Mix to Haven began with a simple idea: great drinks and warm hospitality turn good events into great ones.
						What started as a passion project has grown into a full‑service mobile bar team trusted by couples, brands,
						and planners. We partner with you to shape a bar experience that reflects your taste—whether that’s a classic
						cocktail hour, a zero‑proof menu, or an immersive tasting. Our goal is to make hosting effortless and memorable,
						so you can focus on your guests while we handle the details behind the bar.
					</p>
				</div>
			</section>

			{/* Coverage strip */}
			<section className="section" style={{ paddingTop: 24 }}>
				<div className="container" style={{ textAlign: "center" }}>
					<p style={{ margin: 0, color: "var(--muted)" }}>We’re mobile across</p>
					<h3 style={{ marginTop: 6 }}>Gauteng </h3>
				</div>
			</section>

			<section className="cta-band">
				<div className="container">
					<h2>Ready to Craft Your Unforgettable Event?</h2>
					<a className="btn" href="/contact">Get a Quote</a>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
