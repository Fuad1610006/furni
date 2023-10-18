import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog/blog';
import Cart from './components/Cart/cart';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import About from './components/About/about';
import Checkout from './components/Checkout/checkout';
import Contact from './components/Contact/contact';
import Home from './components/Home/home';
import Shop from './components/Shop/shop';
import Product from './components/Admin/Product/product';
import ThankYou from './components/ThankYou/thankYou';
import Testimonials from './components/Testimonials/testimonials';
import Services from './components/Services/services';
import BlogPage from './components/BlogPage/blogPage';
import Signin from './components/Admin/Signin/signin';
import Register from './components/Admin/Register/register';
import { CartProvider } from "react-use-cart";
import Protected from './components/Protected'
import Dashboard from './components/Admin/Dashboard/dashboard';
function App() {
  
  const [isSignedIn, setIsSignedIn] = useState(() => {
    const userLogged = localStorage.getItem("access_token");
    return userLogged || false;
  });
  
  

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogPage" element={<BlogPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />        
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />         
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          
         
          <Route
            path="/checkout"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Checkout />
              </Protected>
            }
          />
           <Route
            path="/thankYou"
            element={
              <Protected isSignedIn={isSignedIn}>
                <ThankYou />
              </Protected>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/product"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Product />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
