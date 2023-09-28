import React, { useState, useEffect } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Testimonials from '../Testimonials/testimonials';
import { BlogData } from '../api/blog';

const BlogPage = props => {
	const [blogData, setBlogData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await BlogData();
				setBlogData(data);

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
								<h1>Blog</h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="./shop" className="btn btn-secondary me-2">Shop Now</a><a href="./" className="btn btn-white-outline">Explore</a></p>
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




			<div className="blog-section">
				<div className="container">

					<div className="row">
						{blogData.map((blog, index) => (
							<div className="col-12 col-sm-6 col-md-4 mb-5" key={index}>
								<div className="post-entry">
									<a href="./" className="post-thumbnail"><img src={blog.image} className="img-fluid" alt="blog" /></a>
									<div className="post-content-entry">
										<h3><a href="./">{blog.title}</a></h3>
										<div className="meta">
											<span>by <a href="./">{blog.author}</a></span> <span>on <a href="./">{blog.date}</a></span>
										</div>
									</div>
								</div>
							</div>
						))}

						

					</div>
				</div>
			</div>

			<Testimonials />
			<Footer />
		</>
	)
}
export default BlogPage