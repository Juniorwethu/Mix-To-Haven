function LandingPage() {
	return (
		<>
			<video
								src="/new.mp4"
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
				}} />

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
						background: "linear-gradient(145deg, rgba(10,14,26,0.78), rgba(26,31,46,0.78))",
						backdropFilter: "blur(12px)",
						WebkitBackdropFilter: "blur(12px)",
						color: "#fff",
						textAlign: "center",
						padding: "32px 36px",
						borderRadius: "20px",
						boxShadow: "0 20px 60px rgba(0,0,0,.5)",
						border: "1px solid rgba(212,175,55,.30)",
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
							color: "rgba(255,255,255,0.88)",
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
							color: "#0a0e1a",
							background: "linear-gradient(135deg, #d4af37 0%, #c9a43a 100%)",
							border: "1px solid rgba(212,175,55,.65)",
							backdropFilter: "blur(12px)",
							WebkitBackdropFilter: "blur(12px)",
							boxShadow: "0 10px 30px rgba(212,175,55,0.34)",
							transition: "transform 0.2s ease, box-shadow 0.2s ease",
						}}
						onMouseOver={(e) => {
							e.currentTarget.style.transform = "scale(1.05) translateY(-2px)";
							e.currentTarget.style.boxShadow = "0 14px 34px rgba(212,175,55,0.42)";
						}}
						onMouseOut={(e) => {
							e.currentTarget.style.transform = "scale(1) translateY(0)";
							e.currentTarget.style.boxShadow = "0 10px 30px rgba(212,175,55,0.34)";
						}}
					>
						Discover Our Services
					</a>
				</section>
			</div>
		</>
	);
}

export default LandingPage;
