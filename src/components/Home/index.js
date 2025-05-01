import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

import "./index.css";

const homePageImages = [
  {
    id: 0,
    imgUrl:
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
    text: "Men's Fashion",
  },
  {
    id: 1,
    imgUrl:
      "https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg",
    text: "Women's Fashion",
  },
  {
    id: 2,
    imgUrl:
      "https://images.pexels.com/photos/2879829/pexels-photo-2879829.jpeg",
    text: "Jewellery",
  },
  {
    id: 3,
    imgUrl:
      "https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg",
    text: "Watches",
  },
  {
    id: 4,
    imgUrl:
      "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg",
    text: "Shoes",
  },
];

const Home = () => (
  <div className="home-one">
    <Navbar />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">
          Discover the Ultimate Shopping Experience!
        </h1>
        <img
          src="img/logo.png"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Step into a world where style meets comfort and quality meets
          affordability. Whether you're on the hunt for the latest fashion
          trends, trendy accessories, or must-have gadgets, we’ve got it all!
          Explore a wide variety of products, handpicked to elevate your
          lifestyle. With exclusive deals, free shipping, and easy returns,
          shopping has never been so rewarding. Don’t miss out—treat yourself to
          something special today, because you deserve it! Shop now and make
          every purchase a delightful experience.
        </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
      <img
        src="img/logo.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
    <h2 className="our-fashions">Explore Our Fashions</h2>
    <ul className="categories-images-container">
      {homePageImages.map((each) => (
        <li className="home-each-image">
          <img
            alt={each.text}
            className="home-page-category-images"
            src={each.imgUrl}
          />
          <p className="text-para">{each.text}</p>
        </li>
      ))}
    </ul>
    <Footer />
  </div>
);

export default Home;
