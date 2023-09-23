import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/home';
import About from './components/About/about';
import Blog from './components/Blog/blog';
import BlogPage from './components/BlogPage/blogPage';
import Testimonials from './components/Testimonials/testimonials'
import Shop from './components/Shop/shop';
import Services from './components/Services/services';
import Cart from './components/Cart/cart';
import Checkout from './components/Checkout/checkout';
import Contact from './components/Contact/contact';
import ThankYou from './components/ThankYou/thankYou';
import { CartProvider } from 'react-use-cart';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/testimonial",
    element: <Testimonials />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blogPage",
    element: <BlogPage />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/thankYou",
    element: <ThankYou />,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
