import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Products } from '../api/Products';
import { useCart } from "react-use-cart";

const Shop = (props) => {
	const [productData, setProductData] = useState([]);
	const { addItem } = useCart();

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
			<Header />

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
								<form
									onSubmit={(e) => {
										e.preventDefault();
										addItem(product);
									}}
								>
									<a className="product-item" href="#">
										<img src={product.image} className="img-fluid product-thumbnail" alt={product.name} />
										<h3 className="product-title">{product.name}</h3>
										<strong className="product-price"
										style={{paddingRight: "5px"}}>{product.price}</strong>
										<button
											type="submit"
											className="add-to-cart-button"
											onClick={(e) => {
												e.preventDefault();
												addItem(product);
											}}
										>
											<FontAwesomeIcon icon={faShoppingCart}  /> {/* Cart icon */}
										</button>
									</a>

								</form>
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