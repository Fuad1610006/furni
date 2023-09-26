import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { useCart } from 'react-use-cart'; // Import useCart
import { Link } from 'react-router-dom';

function Cart() {
  const {
    isEmpty,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart(); // Initialize the cart

  return(
    <>
     <Header/>
    {items.map((item) => (
      <tr key={item.id}>
        <td className="product-thumbnail">
          <img src={item.image} alt={item.name} className="img-fluid" />
        </td>
        <td className="product-name">
          <h2 className="h5 text-black">{item.name}</h2>
        </td>
        <td>${item.price}</td>
        <td>
          <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: "120px" }}>
            <div className="input-group-prepend">
              <button className="btn btn-outline-black decrease" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
            </div>
            <input type="text" className="form-control text-center quantity-amount" value={item.quantity} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
            <div className="input-group-append">
              <button className="btn btn-outline-black increase" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}><span>+</span></button>
            </div>
          </div>
        </td>
        <td>${item.itemTotal}</td>
        <td><button className="btn btn-black btn-sm" onClick={() => removeItem(item.id)}>X</button></td>
      </tr>
    ))}
      
   
  


      <Footer />
   </>
  )
}
export default Cart