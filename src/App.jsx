import React, { useState, useEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import Home from "./components/Home";
import Accounts from "./components/Accounts";
import Loans from "./components/Loans";
import Cards from "./components/Cards";
import Investments from "./components/Investments";
import DigitalBanking from "./components/DigitalBanking";
import About from "./components/About";
import Contact from "./components/Contact";


function Navbar() {

  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // close the menu whenever the page changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const linkClass = (path, exact = false) => {
    const active = exact
      ? location.pathname === path
      : location.pathname.includes(path);
    return active ? "nav-link selected" : "nav-link";
  };

  return (

    <nav className="prime-navbar">

      <div className="container">

        <div className="navbar-inner">

          <Link to="/" className="prime-logo">
            <span className="logo-icon">
              <i className="bi bi-bank2"></i>
            </span>
            PRIME BANK
          </Link>


          <button
            className="navbar-toggler custom-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
          </button>


          <div
            className={
              menuOpen
                ? "navbar-collapse show"
                : "navbar-collapse"
            }
            id="primeNav"
          >

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link to="/" className={linkClass("/", true)}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/accounts" className={linkClass("/accounts")}>
                  Accounts
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/loans" className={linkClass("/loans")}>
                  Loans
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/cards" className={linkClass("/cards")}>
                  Cards
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/investments" className={linkClass("/investments")}>
                  Investments
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/digital-banking"
                  className={linkClass("/digital-banking")}
                >
                  Digital Banking
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="login-button">
                  <i className="bi bi-person-circle"></i>
                  Login
                </Link>
              </li>

            </ul>

          </div>

        </div>

      </div>

    </nav>

  );

}


function Footer() {

  return (

    <footer className="prime-footer">

      <div className="container">

        <div className="footer-grid">

          <div>

            <h2>
              <i className="bi bi-bank2"></i>
              PRIME BANK
            </h2>

            <p>
              Banking made simple, secure and
              convenient for everyone.
            </p>

            <div className="footer-social">

              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>

            </div>

          </div>


          <div>

            <h5>Banking</h5>

            <Link to="/accounts">Accounts</Link>
            <Link to="/loans">Loans</Link>
            <Link to="/cards">Credit Cards</Link>
            <Link to="/investments">Investments</Link>

          </div>


          <div>

            <h5>Services</h5>

            <Link to="/digital-banking">Internet Banking</Link>
            <Link to="/digital-banking">Mobile Banking</Link>
            <Link to="/digital-banking">UPI Banking</Link>
            <Link to="/contact">Customer Support</Link>

          </div>


          <div>

            <h5>Contact</h5>

            <p>
              <i className="bi bi-telephone"></i>
              1800 123 4567
            </p>

            <p>
              <i className="bi bi-envelope"></i>
              support@primebank.com
            </p>

            <p>
              <i className="bi bi-geo-alt"></i>
              Bengaluru, India
            </p>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 Prime Bank. All Rights Reserved.
          </p>

          <div>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>

        </div>

      </div>

    </footer>

  );

}


function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/digital-banking" element={<DigitalBanking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />

    </BrowserRouter>

  );

}


export default App;