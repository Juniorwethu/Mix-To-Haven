import React from "react";
import "./about-us.css";
import { TbUsers, TbMapPin, TbSparkles, TbAdjustmentsAlt, TbLeaf } from "react-icons/tb";

const AboutUs: React.FC = () => {
	return (
		<div className="about-root">
			{/* Hero Section: Text + Image */}
			<section className="about-hero">
				<div className="about-hero-text">
					<h1 style={{ fontSize: "2.6rem", fontWeight: 700, marginBottom: 18 }}>
						Not Just your Regular Mobile Bar
					</h1>
					<p style={{ fontSize: "1.15rem", color: "#444", marginBottom: 28 }}>
						Mobile bars and crafted drink experiences for events of every size. Mix to Haven brings hospitality, style, and unforgettable drinks to your celebration.
					</p>
					<p style={{ fontSize: "1rem", color: "#666", marginBottom: 18 }}>
						From weddings and corporate events to private parties and pop-ups, our team delivers seamless service, creative menus, and a bar setup that fits your vision. 
						We believe every event deserves a unique touch—whether you want classic cocktails, vibrant mocktails, or a custom drinks menu.
					</p>
					<div style={{ display: "flex", gap: 16 }}>
						<a href="/contact" className="btn" style={{
							background: "#222",
							color: "#fff",
							borderRadius: 24,
							padding: "12px 28px",
							fontWeight: 600,
							textDecoration: "none"
						}}>Learn More</a>
						<a href="/services" className="btn" style={{
							background: "#f5f5f5",
							color: "#222",
							borderRadius: 24,
						 padding: "12px 28px",
							fontWeight: 600,
							textDecoration: "none",
							border: "1px solid #e5e5e5"
						}}>Our Services</a>
					</div>
				</div>
				<div style={{
					flex: "1 1 340px",
					maxWidth: 480,
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}>
					<img
						src="/Bar.2.jpeg"
						alt="Mix to Haven Bar - Better Together"
						style={{
							width: "100%",
							maxWidth: 400,
							borderRadius: "24px",
							objectFit: "cover",
							boxShadow: "0 8px 32px rgba(0,0,0,0.10)"
						}}
					/>
				</div>
			</section>

			{/* Features Section */}
			<section style={{
				background: "#fafaf7",
				padding: "56px 0 32px",
				borderBottom: "1px solid #f0f0ed"
			}}>
				<div className="container" style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
					<h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 10 }}>We have the Best Features for You</h2>
					<p style={{ color: "#666", marginBottom: 32 }}>
						Mix to Haven is your partner for effortless, memorable events. We offer flexible packages, expert staff, and a commitment to quality.
					</p>
					<div style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
						gap: 28,
						justifyContent: "center"
					}}>
						<article className="card float" style={{ padding: 28, borderRadius: 18, background: "#fff", boxShadow: "0 2px 12px #f0f0ed" }}>
							<div className="icon-badge" style={{ marginBottom: 10 }}>
								<TbUsers size={28} strokeWidth={1.25} aria-hidden="true" />
							</div>
							<strong>Friendly Professionals</strong>
							<p style={{ margin: "8px 0 0", color: "#444" }}>Personable team with event expertise.</p>
						</article>
						<article className="card float" style={{ padding: 28, borderRadius: 18, background: "#fff", boxShadow: "0 2px 12px #f0f0ed" }}>
							<div className="icon-badge" style={{ marginBottom: 10 }}>
								<TbMapPin size={28} strokeWidth={1.25} aria-hidden="true" />
							</div>
							<strong>Mobile Anywhere</strong>
							<p style={{ margin: "8px 0 0", color: "#444" }}>Bars that travel to your venue.</p>
						</article>
						<article className="card float" style={{ padding: 28, borderRadius: 18, background: "#fff", boxShadow: "0 2px 12px #f0f0ed" }}>
							<div className="icon-badge" style={{ marginBottom: 10 }}>
								<TbSparkles size={28} strokeWidth={1.25} aria-hidden="true" />
							</div>
							<strong>Premium Drinks</strong>
							<p style={{ margin: "8px 0 0", color: "#444" }}>Quality ingredients and presentation.</p>
						</article>
						<article className="card float" style={{ padding: 28, borderRadius: 18, background: "#fff", boxShadow: "0 2px 12px #f0f0ed" }}>
							<div className="icon-badge" style={{ marginBottom: 10 }}>
								<TbAdjustmentsAlt size={28} strokeWidth={1.25} aria-hidden="true" />
							</div>
							<strong>Customisable Experiences</strong>
							<p style={{ margin: "8px 0 0", color: "#444" }}>Menus, bar design, and service style tailored to you.</p>
						</article>
						<article className="card float" style={{ padding: 28, borderRadius: 18, background: "#fff", boxShadow: "0 2px 12px #f0f0ed" }}>
							<div className="icon-badge" style={{ marginBottom: 10 }}>
								<TbLeaf size={28} strokeWidth={1.25} aria-hidden="true" />
							</div>
							<strong>Premium Ingredients</strong>
							<p style={{ margin: "8px 0 0", color: "#444" }}>Quality spirits, fresh produce, and house-made mixers.</p>
						</article>
					</div>
				</div>
			</section>

			{/* Extra Info Cards Section */}
			<section style={{
				background: "#fff",
				padding: "48px 0 32px",
				borderBottom: "1px solid #f0f0ed"
			}}>
				<div className="container" style={{ maxWidth: 1100, margin: "0 auto" }}>
					<h2 style={{ fontSize: "1.7rem", fontWeight: 700, marginBottom: 18, textAlign: "center" }}>Why Mix to Haven?</h2>
					<div style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
						gap: 28,
						justifyContent: "center"
					}}>
						<article className="card float" style={{ padding: 24, borderRadius: 18, background: "#fafaf7", boxShadow: "0 2px 12px #f0f0ed" }}>
							<strong style={{ fontSize: "1.1rem" }}>Flexible Packages</strong>
							<p style={{ margin: "8px 0 0", color: "#444" }}>
								Choose from essential, premium, or deluxe options—or request a custom package for your event size and style.
							</p>
						</article>
						<article className="card float" style={{ padding: 24, borderRadius: 18, background: "#fafaf7", boxShadow: "0 2px 12px #f0f0ed" }}>
							<strong style={{ fontSize: "1.1rem" }}>Creative Menus</strong>
							<p style={{ margin: "8px 0 0", color: "#444" }}>
								Signature cocktails, classic favorites, and non-alcoholic options—all tailored to your preferences.
							</p>
						</article>
						<article className="card float" style={{ padding: 24, borderRadius: 18, background: "#fafaf7", boxShadow: "0 2px 12px #f0f0ed" }}>
							<strong style={{ fontSize: "1.1rem" }}>Effortless Hosting</strong>
							<p style={{ margin: "8px 0 0", color: "#444" }}>
								We handle setup, service, and cleanup—so you can relax and enjoy your guests.
							</p>
						</article>
						<article className="card float" style={{ padding: 24, borderRadius: 18, background: "#fafaf7", boxShadow: "0 2px 12px #f0f0ed" }}>
							<strong style={{ fontSize: "1.1rem" }}>Trusted by Clients</strong>
							<p style={{ margin: "8px 0 0", color: "#444" }}>
								Our team is recommended by couples, brands, and planners for professionalism and memorable experiences.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* Drink Images Section */}
			<section style={{
				background: "#fafaf7",
				padding: "48px 0",
				borderBottom: "1px solid #f0f0ed"
			}}>
				<div className="container" style={{
					maxWidth: 1100,
					margin: "0 auto",
					display: "flex",
					justifyContent: "center",
					gap: 32,
					flexWrap: "wrap"
				}}>
					{["/drinks.1.jpg", "/drinks.2.jpg", "/drinks.3.jpg"].map((drink, index) => (
						<img
							key={index}
							src={drink}
							alt={`Crafted drink ${index + 1}`}
							style={{
								width: 220,
								height: 220,
								borderRadius: "50%",
								objectFit: "cover",
								boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
							}}
						/>
					))}
				</div>
			</section>

			{/* Story Section */}
			<section style={{
				background: "#fff",
				padding: "56px 0 32px",
				borderBottom: "1px solid #f0f0ed"
			}}>
				<div className="container" style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
					<h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 10 }}>Our Story</h2>
					<p style={{ color: "#444", fontSize: "1.15rem", lineHeight: 1.7 }}>
						Mix to Haven began with a simple idea: great drinks and warm hospitality turn good events into great ones.
						What started as a passion project has grown into a full‑service mobile bar team trusted by couples, brands,
						and planners. We partner with you to shape a bar experience that reflects your taste—whether that’s a classic
						cocktail hour, a zero‑proof menu, or an immersive tasting. Our goal is to make hosting effortless and memorable,
						so you can focus on your guests while we handle the details behind the bar.
					</p>
					<p style={{ color: "#666", fontSize: "1rem", marginTop: 18 }}>
						We’re passionate about elevating every event, big or small. Our bartenders bring energy and expertise, our menus are crafted for every palate, and our service is designed to make your celebration seamless.
					</p>
				</div>
			</section>

			{/* Coverage Section */}
			<section style={{
				background: "#fafaf7",
				padding: "40px 0 24px",
				borderBottom: "1px solid #f0f0ed"
			}}>
				<div className="container" style={{ textAlign: "center" }}>
					<p style={{ margin: 0, color: "#888" }}>We’re mobile across</p>
					<h3 style={{ marginTop: 6, fontSize: "1.5rem", fontWeight: 600 }}>Gauteng</h3>
				</div>
			</section>

			{/* CTA Section */}
			<section className="cta-band" style={{
				background: "#fff",
				padding: "48px 0"
			}}>
				<div className="container" style={{ textAlign: "center" }}>
					<h2 style={{ fontWeight: 700, fontSize: "2rem" }}>Ready to Craft Your Unforgettable Event?</h2>
					<a className="btn" href="/contact" style={{
						display: "inline-block",
						marginTop: 18,
						background: "#222",
					 color: "#fff",
						borderRadius: 24,
						padding: "14px 36px",
						fontWeight: 600,
						textDecoration: "none",
						fontSize: "1.1rem"
					}}>Get a Quote</a>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
