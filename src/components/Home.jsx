import React from "react";

import { Link } from "react-router-dom";

import heroBank from "../assets/images/bank-hero.jpg";
import savings from "../assets/images/savings.jpg";
import personalLoan from "../assets/images/personal-loan.jpg";
import creditCard from "../assets/images/credit-card.jpg";
import investment from "../assets/images/investment.jpg";


function Home() {

  return (

    <div>

      <section className="bank-hero">

        <div className="container">

          <div className="hero-grid">

            <div
              className="hero-content"
              data-aos="fade-right"
            >

              <span className="hero-label">
                YOUR TRUSTED BANKING PARTNER
              </span>

              <h1>
                Banking made
                <br />

                <span>simple.</span>
                <br />

                Life made better.
              </h1>

              <p>
                Discover smart banking solutions designed
                to help you save, grow and achieve your
                financial goals.
              </p>


              <div className="hero-buttons">

                <Link
                  to="/accounts"
                  className="primary-button"
                >
                  Open an Account
                  <i className="bi bi-arrow-right"></i>
                </Link>

                <Link
                  to="/loans"
                  className="secondary-button"
                >
                  Explore Loans
                </Link>

              </div>

            </div>


            <div
              className="hero-image"
              data-aos="zoom-in"
            >

              <img
                src={heroBank}
                alt="Prime Bank"
              />

              <div className="hero-card">

                <i className="bi bi-shield-check"></i>

                <div>

                  <small>
                    BANK WITH CONFIDENCE
                  </small>

                  <strong>
                    100% Secure
                  </strong>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="quick-services">

        <div className="container">

          <div className="section-heading">

            <span>
              QUICK SERVICES
            </span>

            <h2>
              Banking at your fingertips
            </h2>

          </div>


          <div className="service-grid">

            <Link
              to="/accounts"
              className="service-card"
              data-aos="fade-up"
            >

              <div className="service-icon">
                <i className="bi bi-person-plus"></i>
              </div>

              <h3>
                Open Account
              </h3>

              <p>
                Open your savings account quickly
                and securely.
              </p>

              <span>
                Learn More
                <i className="bi bi-arrow-right"></i>
              </span>

            </Link>


            <Link
              to="/loans"
              className="service-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <div className="service-icon">
                <i className="bi bi-cash-stack"></i>
              </div>

              <h3>
                Apply for Loan
              </h3>

              <p>
                Choose flexible loans for your
                personal and business needs.
              </p>

              <span>
                Explore Loans
                <i className="bi bi-arrow-right"></i>
              </span>

            </Link>


            <Link
              to="/cards"
              className="service-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <div className="service-icon">
                <i className="bi bi-credit-card"></i>
              </div>

              <h3>
                Credit Cards
              </h3>

              <p>
                Find cards with rewards and
                benefits that suit you.
              </p>

              <span>
                View Cards
                <i className="bi bi-arrow-right"></i>
              </span>

            </Link>


            <Link
              to="/digital-banking"
              className="service-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >

              <div className="service-icon">
                <i className="bi bi-phone"></i>
              </div>

              <h3>
                Digital Banking
              </h3>

              <p>
                Manage your money anytime
                through digital banking.
              </p>

              <span>
                Get Started
                <i className="bi bi-arrow-right"></i>
              </span>

            </Link>

          </div>

        </div>

      </section>


      <section className="products-section">

        <div className="container">

          <div className="section-heading centered">

            <span>
              BANKING PRODUCTS
            </span>

            <h2>
              Solutions designed for you
            </h2>

            <p>
              Whether you are saving for tomorrow,
              buying a home or planning your future,
              we have a solution for you.
            </p>

          </div>


          <div className="product-grid">

            <div
              className="bank-product"
              data-aos="fade-up"
            >

              <img
                src={savings}
                alt="Savings Account"
              />

              <div className="product-content">

                <span>
                  SAVINGS
                </span>

                <h3>
                  Savings Account
                </h3>

                <p>
                  Save your money securely while
                  enjoying convenient banking benefits.
                </p>

                <Link to="/accounts">
                  Explore Account
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>

            </div>


            <div
              className="bank-product"
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <img
                src={personalLoan}
                alt="Personal Loan"
              />

              <div className="product-content">

                <span>
                  LOANS
                </span>

                <h3>
                  Personal Loan
                </h3>

                <p>
                  Flexible financing designed
                  around your personal needs.
                </p>

                <Link to="/loans">
                  Explore Loan
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>

            </div>


            <div
              className="bank-product"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <img
                src={creditCard}
                alt="Credit Card"
              />

              <div className="product-content">

                <span>
                  CARDS
                </span>

                <h3>
                  Credit Cards
                </h3>

                <p>
                  Enjoy rewards, offers and
                  convenient cashless payments.
                </p>

                <Link to="/cards">
                  Explore Cards
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>

            </div>


            <div
              className="bank-product"
              data-aos="fade-up"
              data-aos-delay="300"
            >

              <img
                src={investment}
                alt="Investment"
              />

              <div className="product-content">

                <span>
                  INVESTMENTS
                </span>

                <h3>
                  Grow Your Wealth
                </h3>

                <p>
                  Explore investment options
                  for your financial future.
                </p>

                <Link to="/investments">
                  Start Investing
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="bank-stats">

        <div className="container">

          <div className="stats-grid">

            <div>

              <strong>
                25+
              </strong>

              <span>
                Years of Trust
              </span>

            </div>


            <div>

              <strong>
                10M+
              </strong>

              <span>
                Happy Customers
              </span>

            </div>


            <div>

              <strong>
                500+
              </strong>

              <span>
                Branches
              </span>

            </div>


            <div>

              <strong>
                24/7
              </strong>

              <span>
                Digital Banking
              </span>

            </div>

          </div>

        </div>

      </section>


      <section className="security-section">

        <div className="container">

          <div className="security-box">

            <div>

              <span>
                BANKING SECURITY
              </span>

              <h2>
                Your security is our priority.
              </h2>

              <p>
                We use modern security technology
                to help protect your accounts and
                transactions.
              </p>

              <Link
                to="/digital-banking"
                className="primary-button"
              >
                Learn About Safe Banking
                <i className="bi bi-arrow-right"></i>
              </Link>

            </div>


            <div className="security-icon">

              <i className="bi bi-shield-lock"></i>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

}


export default Home;