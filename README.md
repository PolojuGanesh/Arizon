# 🛍️ ReactJS E-Commerce Application

This is a simple ReactJS-based e-commerce web application that allows users to browse products, view detailed product information, add items to a shopping cart, modify quantities, and proceed to checkout.

## 🚀 Features

- **Home Page**: Landing page with navigation and footer.
- **Navigation Bar**: Links to `Home`, `Products`, and `Cart` pages.
- **Product Listing Page**:
  - Displays a list of products.
  - Click on any product to view its details.
- **Product Detail Page**:
  - View product **title**, **description**, **price**, and **rating**.
  - **Increase/Decrease quantity** of selected product.
  - Add to cart functionality.
- **Cart Page**:
  - View all added products.
  - Modify quantity (increase/decrease).
  - Remove products from cart.
  - See **total amount** for all items.
  - Checkout functionality (dummy/placeholder).

## 📁 Project Structure

/src ├── components/ # Reusable components like Navbar, Footer, ProductCard ├── pages/ # Pages like Home, ProductList, ProductDetails, Cart ├── context/ # Context for managing cart state globally ├── App.js # Application routes and layout └── index.js # Entry point

## 🛠️ Tech Stack

- ReactJS
- React Router DOM (for navigation)
- Context API (for global state management)
- CSS
