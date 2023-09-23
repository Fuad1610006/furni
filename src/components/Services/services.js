import React from 'react';
import CustomNavbar from '../CustomNavbar/customNavbar';
import Footer from '../Footer/footer';
import Testimonials from '../Testimonials/testimonials';

function Services() {
	return (
		<>
			<CustomNavbar />

			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Services</h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="./" className="btn btn-secondary me-2">Shop Now</a><a href="./" className="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src="assets/images/couch.png" className="img-fluid" alt="couch" />
							</div>
						</div>
					</div>
				</div>
			</div>




			<div className="why-choose-section">
				<div className="container">

					<div className="row my-5">
						<div className="col-6 col-md-6 col-lg-3 mb-4">
							<div className="feature">
								<div className="icon">
									<img src="assets/images/truck.svg" alt="Image- truck" className="imf-fluid" />
								</div>
								<h3>Fast &amp; Free Shipping</h3>
								<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3 mb-4">
							<div className="feature">
								<div className="icon">
									<img src="assets/images/bag.svg" alt="Image- bag" className="imf-fluid" />
								</div>
								<h3>Easy to Shop</h3>
								<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3 mb-4">
							<div className="feature">
								<div className="icon">
									<img src="assets/images/support.svg" alt="Image- support" className="imf-fluid" />
								</div>
								<h3>24/7 Support</h3>
								<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3 mb-4">
							<div className="feature">
								<div className="icon">
									<img src="assets/images/return.svg" alt="Image- return" className="imf-fluid" />
								</div>
								<h3>Hassle Free Returns</h3>
								<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3 mb-4">
							<div className="feature">
								<div className="icon">
									<img src="assets/images/truck.svg" alt="Image- truck" className="imf-fluid" />
								</div>
								<h3>Fast &amp; Free Shipping</h3>
								<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3 mb-4">
							<div className="feature">
								<div className="icon">
									<img src="assets/images/bag.svg" alt="Image- bag" className="imf-fluid" />
								</div>
								<h3>Easy to Shop</h3>
								<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3 mb-4">
							<div className="feature">
								<div className="icon">
									<img src="assets/images/support.svg" alt="Image- support" className="imf-fluid" />
								</div>
								<h3>24/7 Support</h3>
								<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3 mb-4">
							<div className="feature">
								<div className="icon">
									<img src="assets/images/return.svg" alt="Image- return" className="imf-fluid" />
								</div>
								<h3>Hassle Free Returns</h3>
								<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
							</div>
						</div>

					</div>

				</div>
			</div>




			<div className="product-section">
				<div className="container">
					<div className="row">

						<div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
							<h2 className="mb-4 section-title">Crafted with excellent material.</h2>
							<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
							<p><a href="./" className="btn">Explore</a></p>
						</div>

						<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
							<a className="product-item" href="./">
								<img src="assets/images/product-1.png" className="img-fluid product-thumbnail" alt="product 1" />
								<h3 className="product-title">Nordic Chair</h3>
								<strong className="product-price">$50.00</strong>

								<span className="icon-cross">
									<img src="assets/images/cross.svg" className="img-fluid" />
								</span>
							</a>
						</div>

						<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
							<a className="product-item" href="./">
								<img src="assets/images/product-2.png" className="img-fluid product-thumbnail" alt="product 2" />
								<h3 className="product-title">Kruzo Aero Chair</h3>
								<strong className="product-price">$78.00</strong>

								<span className="icon-cross">
									<img src="assets/images/cross.svg" className="img-fluid" />
								</span>
							</a>
						</div>

						<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
							<a className="product-item" href="./">
								<img src="assets/images/product-3.png" className="img-fluid product-thumbnail" alt="product 3" />
								<h3 className="product-title">Ergonomic Chair</h3>
								<strong className="product-price">$43.00</strong>

								<span className="icon-cross">
									<img src="assets/images/cross.svg" className="img-fluid" alt="cross" />
								</span>
							</a>
						</div>

					</div>
				</div>
			</div>



			<Testimonials />
			<Footer />
		</>
	)
}
export default Services