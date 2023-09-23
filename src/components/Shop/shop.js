import React, { useState, useEffect } from 'react';
import CustomNavbar from '../CustomNavbar/customNavbar';
import Footer from '../Footer/footer';
import { Products } from '../api/Products';
// import { useCart } from "react-use-cart";

const Shop = props => {
	const [productData, setProductData] = useState([]);
	
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await Products();
				setProductData(data);

			} catch (error) {
				console.error(error.message);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<CustomNavbar />

			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Shop</h1>
							</div>
						</div>
						<div className="col-lg-7">

						</div>
					</div>
				</div>
			</div>




			<div className="untree_co-section product-section before-footer-section">
				<div className="container">
					<div className="row">
						{productData.map((product, index) => (
							<div className="col-12 col-md-4 col-lg-3 mb-5" key={index}>
								<a className="product-item" href="#"
								>
									<img src={product.image} className="img-fluid product-thumbnail" />
									<h3 className="product-title">{product.name}</h3>
									<strong className="product-price">{product.price}</strong>
							
									<span className="icon-cross">
										<img src="assets/images/cross.svg" className="img-fluid"/>
									</span>
								</a>
							</div>
						))}

					</div>
				</div>
			</div>


			<Footer />
		</>
	)
}
export default Shop