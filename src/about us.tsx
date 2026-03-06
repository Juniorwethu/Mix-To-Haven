import React, { useEffect } from "react";
import "./about-us.css";
import Shuffle from "./components/Shuffle";
import { TbUsers, TbMapPin, TbSparkles, TbAdjustmentsAlt, TbLeaf } from "react-icons/tb";

const AboutUs: React.FC = () => {
	useEffect(() => {
		const scrollers = document.querySelectorAll(".scroller");

		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			addAnimation();
		}

		function addAnimation() {
			scrollers.forEach((scroller) => {
				scroller.setAttribute("data-animated", "true");

				const scrollerInner = scroller.querySelector(".scroller__inner");
				if (scrollerInner) {
					const scrollerContent = Array.from(scrollerInner.children);

					scrollerContent.forEach((item) => {
						const duplicatedItem = item.cloneNode(true) as HTMLElement;
						duplicatedItem.setAttribute("aria-hidden", "true");
						scrollerInner.appendChild(duplicatedItem);
					});
				}
			});
		}
	}, []);

	return (
		<div className="about-root">
			{/* Hero Section */}
			<section className="about-hero">
				<div className="about-hero-content">
					<div className="about-hero-text">
						<div className="about-hero-badge">Premium Mobile Bar Service</div>
						<Shuffle
							text="Elevating Every Celebration"
							tag="h1"
							className="about-hero-title"
							shuffleDirection="right"
							duration={0.5}
							stagger={0.05}
							triggerOnHover={false}
						/>
						<p className="about-hero-subtitle">
							Mix to Haven brings sophistication, style, and unforgettable cocktail experiences to events across Gauteng. 
							From intimate gatherings to grand celebrations, we craft moments worth remembering.
						</p>
						<div className="about-hero-buttons">
							<a href="/services" className="btn btn-primary">
								Explore Services
							</a>
							<a href="/contact" className="btn btn-secondary">
								Book Your Event
							</a>
						</div>
					</div>
					<div className="about-hero-image-wrapper">
						<div className="about-hero-image-glow"></div>
						<img
							src="/Bar.2.jpeg"
							alt="Mix to Haven - Elegant Mobile Bar"
							className="about-hero-image"
						/>
					</div>
				</div>
			</section>

			{/* Features Grid */}
			<section className="about-features">
				<div className="about-container">
					<div className="about-section-header">
						<h2 className="about-section-title">Why Choose Mix to Haven</h2>
						<p className="about-section-subtitle">
							Experience the perfect blend of professionalism, creativity, and exceptional service
						</p>
					</div>
					
					<div className="about-features-grid">
						<div className="about-feature-card">
							<div className="about-feature-icon">
								<TbUsers size={32} strokeWidth={1.5} />
							</div>
							<h3>Expert Bartenders</h3>
							<p>Professional mixologists with years of experience creating memorable drink experiences</p>
						</div>
						
						<div className="about-feature-card">
							<div className="about-feature-icon">
								<TbMapPin size={32} strokeWidth={1.5} />
							</div>
							<h3>Mobile Service</h3>
							<p>We bring the bar to you—anywhere in Gauteng, with complete setup and breakdown</p>
						</div>
						
						<div className="about-feature-card">
							<div className="about-feature-icon">
								<TbSparkles size={32} strokeWidth={1.5} />
							</div>
							<h3>Premium Quality</h3>
							<p>Top-shelf spirits, fresh ingredients, and artisan presentation in every drink</p>
						</div>
						
						<div className="about-feature-card">
							<div className="about-feature-icon">
								<TbAdjustmentsAlt size={32} strokeWidth={1.5} />
							</div>
							<h3>Custom Menus</h3>
							<p>Tailored cocktail selections designed to match your event's theme and style</p>
						</div>
						
						<div className="about-feature-card">
							<div className="about-feature-icon">
								<TbLeaf size={32} strokeWidth={1.5} />
							</div>
							<h3>Sustainable Practices</h3>
							<p>Eco-friendly operations with locally sourced ingredients and minimal waste</p>
						</div>
					</div>
				</div>
			</section>

			{/* Drink Showcase */}
			<section className="about-showcase">
				<div className="scroller" data-speed="slow">
					<div className="scroller__inner">
						{["/drinks.1.jpg", "/drinks.2.jpg", "/drinks.3.jpg", "/drink.4.jpg", "/drink.5.jpg"].map((drink, index) => (
							<div key={index} className="about-drink-card">
								<img
									src={drink}
									alt={`Signature cocktail ${index + 1}`}
									className="about-drink-image"
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Our Story */}
			<section className="about-story">
				<div className="about-container">
					<div className="about-story-content">
						<h2 className="about-section-title">Our Story</h2>
						<div className="about-story-text">
							<p>
								Mix to Haven was born from a passion for exceptional hospitality and the belief that 
								every celebration deserves an extraordinary bar experience. What began as a small 
								operation has grown into Gauteng's premier mobile bar service, trusted by couples, 
								corporations, and event planners alike.
							</p>
							<p>
								We pride ourselves on more than just mixing drinks—we craft experiences. Each cocktail 
								is a work of art, each interaction is genuine, and every event becomes a reflection 
								of our commitment to excellence. Whether you're planning an intimate wedding reception 
								or a corporate gala, we bring the same level of dedication and artistry.
							</p>
							<p>
								Our team combines years of bartending expertise with a genuine love for what we do. 
								From classic cocktails to innovative creations, from full bar service to specialty 
								drink stations, we handle every detail so you can focus on celebrating with your guests.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Service Highlights */}
			<section className="about-highlights">
				<div className="about-container">
					<div className="about-highlights-grid">
						<div className="about-highlight-card">
							<div className="about-highlight-number">01</div>
							<h3>Consultation</h3>
							<p>We start by understanding your vision, guest count, preferences, and event style</p>
						</div>
						
						<div className="about-highlight-card">
							<div className="about-highlight-number">02</div>
							<h3>Custom Planning</h3>
							<p>Receive a tailored menu and service package designed specifically for your event</p>
						</div>
						
						<div className="about-highlight-card">
							<div className="about-highlight-number">03</div>
							<h3>Seamless Service</h3>
							<p>On the day, we arrive early, set up completely, and deliver flawless service</p>
						</div>
						
						<div className="about-highlight-card">
							<div className="about-highlight-number">04</div>
							<h3>Clean Exit</h3>
							<p>After the last toast, we handle all breakdown and cleanup—no stress for you</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="about-cta">
				<div className="about-container">
					<div className="about-cta-content">
						<h2>Ready to Elevate Your Event?</h2>
						<p>Let's create an unforgettable bar experience tailored to your celebration</p>
						<a href="/contact" className="btn btn-cta">
							Get Your Free Quote
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
