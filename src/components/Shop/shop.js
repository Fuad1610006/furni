import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Products } from '../api/products';
import { useCart } from 'react-use-cart';

const Shop = (props) => {
  const [productData, setProductData] = useState([]);
  const { addItem, cartTotalItems } = useCart();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Products();
        console.log(data); // Log the data to check its structure
        setProductData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    addItem(product); // Add the item to the cart using the useCart hook
  };

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
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          {loading ? (
            <p>Loading products...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <div className="row">
              {productData.map((product, index) => (
                <div className="col-12 col-md-4 col-lg-3 mb-5" key={index}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                  >
                    <a className="product-item" href={`/product/${product.id}`}>
                      <img
                        src={`${global.config.apiUrl}${product.image}`}
                        className="img-fluid product-thumbnail"
                        alt={product.name}
                      />
                      <h3 className="product-title">{product.name}</h3>
                      <strong className="product-price" style={{ paddingRight: '5px' }}>
                        ${product.price}
                      </strong>
                      <button type="submit" className="add-to-cart-button">
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </button>
                      {cartTotalItems > 0 && (
                        <div className="cart-count-notification">
                          <span>{cartTotalItems}</span>
                        </div>
                      )}
                    </a>
                  </form>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Shop;
