import React from "react";

import { Link } from "react-router-dom";


function Accounts() {

  const accounts = [

    {
      icon: "bi-person",
      title: "Savings Account",
      text: "A simple and secure account for your everyday banking needs."
    },

    {
      icon: "bi-building",
      title: "Current Account",
      text: "Flexible banking solutions for businesses and professionals."
    },

    {
      icon: "bi-piggy-bank",
      title: "Fixed Deposit",
      text: "Grow your savings with attractive fixed deposit options."
    },

    {
      icon: "bi-calendar2-check",
      title: "Recurring Deposit",
      text: "Build your savings regularly with convenient monthly deposits."
    }

  ];


  return (

    <div className="inner-page">

      <section className="page-hero">

        <div className="container">

          <span>
            BANK ACCOUNTS
          </span>

          <h1>
            Accounts that work
            <br />
            for your future.
          </h1>

          <p>
            Choose the right account for your
            everyday banking and financial goals.
          </p>

        </div>

      </section>


      <section className="accounts-section">

        <div className="container">

          <div className="account-grid">

            {accounts.map((account, index) => (

              <div
                className="account-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >

                <div className="account-icon">

                  <i className={`bi ${account.icon}`}></i>

                </div>

                <h3>
                  {account.title}
                </h3>

                <p>
                  {account.text}
                </p>

                <button>
                  Know More
                  <i className="bi bi-arrow-right"></i>
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>


      <section className="cta-section">

        <div className="container">

          <div className="cta-box">

            <div>

              <span>
                GET STARTED
              </span>

              <h2>
                Ready to open your account?
              </h2>

              <p>
                Start your banking journey with
                Prime Bank today.
              </p>

            </div>

            <Link
              to="/contact"
              className="primary-button"
            >
              Open Account
              <i className="bi bi-arrow-right"></i>
            </Link>

          </div>

        </div>

      </section>

    </div>

  );

}


export default Accounts;