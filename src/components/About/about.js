import React, { useState, useEffect } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Testimonials from '../Testimonials/testimonials';
import { Teams } from '../api/Teams';

const About = props => {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Teams();
               setTeamData(data);

            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);

	return (
		<>
			<Header />

			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>About Us</h1>
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
					<div className="row justify-content-between">
						<div className="col-lg-6">
							<h2 className="section-title">Why Choose Us</h2>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

							<div className="row my-5">
								<div className="col-6 col-md-6">
									<div className="feature">
										<div className="icon">
											<img src="assets/images/truck.svg" alt="truck" className="imf-fluid" />
										</div>
										<h3>Fast &amp; Free Shipping</h3>
										<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
									</div>
								</div>

								<div className="col-6 col-md-6">
									<div className="feature">
										<div className="icon">
											<img src="assets/images/bag.svg" alt="bag" className="imf-fluid" />
										</div>
										<h3>Easy to Shop</h3>
										<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
									</div>
								</div>

								<div className="col-6 col-md-6">
									<div className="feature">
										<div className="icon">
											<img src="assets/images/support.svg" alt="support" className="imf-fluid" />
										</div>
										<h3>24/7 Support</h3>
										<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
									</div>
								</div>

								<div className="col-6 col-md-6">
									<div className="feature">
										<div className="icon">
											<img src="assets/images/return.svg" alt="return" className="imf-fluid" />
										</div>
										<h3>Hassle Free Returns</h3>
										<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
									</div>
								</div>

							</div>
						</div>

						<div className="col-lg-5">
							<div className="img-wrap">
								<img src="assets/images/why-choose-us-img.jpg" alt="choose" className="img-fluid" />
							</div>
						</div>

					</div>
				</div>
			</div>




			<div class="untree_co-section">
				<div class="container">
					<div class="row mb-5">
						<div class="col-lg-5 mx-auto text-center">
							<h2 class="section-title">Our Team</h2>
						</div>
					</div>

					<div class="row">
					{teamData.map((team, index) => (
						<div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0" key={index}>
							<img src={team.image} class="img-fluid mb-5" />
							<h3 clas><a href="./">{team.name}</a></h3>
							<span class="d-block position mb-4">{team.designation}</span>
							<p>{team.intro}</p>
							<p class="mb-0"><a href="./" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>
						</div>
						))}

						{/* <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
							<img src="assets/images/person_2.jpg" class="img-fluid mb-5" />

							<h3 clas><a href="./"><span class="">Jeremy</span> Walker</a></h3>
							<span class="d-block position mb-4">CEO, Founder, Atty.</span>
							<p>Separated they live in.
								Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
							<p class="mb-0"><a href="./" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>

						</div> */}


						{/* <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
							<img src="assets/images/person_3.jpg" class="img-fluid mb-5" />
							<h3 clas><a href="./"><span class="">Patrik</span> White</a></h3>
							<span class="d-block position mb-4">CEO, Founder, Atty.</span>
							<p>Separated they live in.
								Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
							<p class="mb-0"><a href="./" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>
						</div> */}


						{/* <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
							<img src="assets/images/person_4.jpg" class="img-fluid mb-5" />

							<h3 clas><a href="./"><span class="">Kathryn</span> Ryan</a></h3>
							<span class="d-block position mb-4">CEO, Founder, Atty.</span>
							<p>Separated they live in.
								Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
							<p class="mb-0"><a href="./" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>


						</div> */}

					</div>
				</div>
			</div>

			<Testimonials />
			<Footer />
		</>
	)
}
export default About 