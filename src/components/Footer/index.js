import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import "./index.css";

const Footer = () => (
  <footer id="footer" class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>About Us</h3>
        <ul>
          <li>
            <a href="#footer">Our Story</a>
          </li>
          <li>
            <a href="#footer">Careers</a>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Customer Service</h3>
        <ul>
          <li>
            <a href="#footer">FAQs</a>
          </li>
          <li>
            <a href="#footer">Shipping & Returns</a>
          </li>
          <li>
            <a href="#footer">Order Tracking</a>
          </li>
          <li>
            <a href="#footer">Contact Us</a>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Legal</h3>
        <ul>
          <li>
            <a href="#footer">Privacy Policy</a>
          </li>
          <li>
            <a href="#footer">Terms of Service</a>
          </li>
          <li>
            <a href="#footer">Cookie Policy</a>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Connect With Us</h3>
        <div class="social-icons-container">
          <a href="#footer">
            <FaFacebookF className="social-icons" />
          </a>
          <a href="#footer">
            <FaTwitter className="social-icons" />
          </a>
          <a href="#footer">
            <FaInstagram className="social-icons" />
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>
        123 Demo Street, Faketown, FS 00000 | support@fakestore.com | +1 (800)
        123-FAKE
      </p>
      <p>© 2025 FakeStore. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
