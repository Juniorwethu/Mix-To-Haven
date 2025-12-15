import React from "react";

const LandingPage: React.FC = () => {
	return (
		<>
			<video
				src="/background.mp4"
				autoPlay
				muted
				loop
				playsInline
				preload="auto"
				aria-hidden="true"
				style={{
					position: "fixed",
					inset: 0,
					width: "100vw",
					height: "100vh",
					objectFit: "cover",
					pointerEvents: "none",
					zIndex: 0,
				}}
			/>

			<div
				style={{
					position: "fixed",
					inset: 0,
					display: "grid",
					placeItems: "center",
					zIndex: 1,
					pointerEvents: "none",
				}}
			>
				<section
					aria-labelledby="hero-title"
					style={{
						pointerEvents: "auto",
						background: "rgba(0,0,0,0.55)",
						backdropFilter: "blur(12px)",
						WebkitBackdropFilter: "blur(12px)",
						color: "#fff",
						textAlign: "center",
						padding: "32px 36px",
						borderRadius: "20px",
						boxShadow: "0 20px 60px rgba(0,0,0,.5)",
						border: "1px solid rgba(255,255,255,.12)",
						maxWidth: 820,
						margin: 16,
					}}
				>
					<h1
						id="hero-title"
						style={{
							margin: 0,
							fontSize: "clamp(32px, 7vw, 64px)",
							fontWeight: 800,
							letterSpacing: "-.02em",
						}}
					>
						Mix to Haven
					</h1>
					<p
						style={{
							margin: "12px 0 24px",
							fontSize: "clamp(14px, 2.4vw, 18px)",
							color: "#fffafaff",
							opacity: 0.95,
						}}
					>
						Crafting Unforgettable Mobile Bar Experiences.
					</p>
					<a
						href="/about"
						style={{
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "center",
							padding: "12px 20px",
							borderRadius: 999,
							textDecoration: "none",
							fontWeight: 700,
							background: "linear-gradient(135deg,#2f80ed,#56ccf2)",
							color: "#e8e9ebff",
							boxShadow: "0 10px 24px rgba(47,128,237,.35)",
							border: "0",
						}}
					>
						Discover Our Services
					</a>
				</section>
			</div>
		</>
	);
};

export default LandingPage;
