import React from "react";
import "./about us.css";
import "./contact.css";
import { TbMapPin, TbMail, TbPhone, TbBrandInstagram } from "react-icons/tb";

const Contact: React.FC = () => {
	return (
		<div className="contact-root">
			{/* Hero Section */}
			<section className="contact-hero">
				<h1 className="contact-hero-title">Contact Us</h1>
			</section>

			{/* Main Content Section */}
			<section className="contact-content">
				<div className="contact-container">
					{/* Column 1: Contact Form */}
					<div className="contact-form">
						<h2 className="contact-form-title">Send Us a Message</h2>
						<form className="contact-form">
							<input type="text" placeholder="Full Name" required className="contact-input" />
							<input type="email" placeholder="Email Address" required className="contact-input" />
							<textarea placeholder="Message" rows={5} required className="contact-input"></textarea>
							<button type="submit" className="contact-submit-btn">SUBMIT</button>
						</form>
					</div>

					{/* Column 2: Map */}
					<div>
						<h2 className="contact-map-title">Find Us</h2>
						<iframe
							title="Google Maps location of Mix to Haven"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.236949399313!2d28.15970137540618!3d-25.92714617724913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956e3ff613f07b%3A0x23d7b8e229b73a19!2s159%20Allan%20Rd%2C%20Glen%20Austin%20AH%2C%20Midrand%2C%201685%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1716404531303!5m2!1sen!2sus"
							width="100%"
							height="350"
							className="contact-map"
							allowFullScreen={false}
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>

					{/* Column 3: Contact Details */}
					<div className="contact-details">
						<h2 className="contact-details-title">Contact Details</h2>
						<div>
							<strong className="contact-detail-label">
								<TbMapPin /> Our Location
							</strong>
							<p className="contact-detail-text">159 Allan Rd, Midrand, 0157</p>
						</div>
						<div>
							<strong className="contact-detail-label">
								<TbMail /> Our Email
							</strong>
							<a href="mailto:Mix.To.Haven@outlook.com" className="contact-detail-link">
								Mix.To.Haven@outlook.com
							</a>
						</div>
						<div>
							<strong className="contact-detail-label">
								<TbPhone /> Call Us
							</strong>
							<a href="tel:+27787983991" className="contact-detail-link">
								078 798 3991
							</a>
						</div>
						<div>
							<strong className="contact-detail-label">
								<TbBrandInstagram /> Follow Us
							</strong>
							<a href="https://www.instagram.com/mix.tohaven/" target="_blank" rel="noopener noreferrer" className="contact-detail-link">
								@mix.tohaven
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;