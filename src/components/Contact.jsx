import React from "react";


function Contact() {

  return (

    <div className="inner-page">

      <section className="page-hero">

        <div className="container">

          <span>
            CONTACT US
          </span>

          <h1>
            We're here
            <br />
            to help.
          </h1>

          <p>
            Get in touch with Prime Bank
            whenever you need assistance.
          </p>

        </div>

      </section>


      <section className="contact-section">

        <div className="container">

          <div className="contact-grid">

            <div className="contact-info">

              <span>
                GET IN TOUCH
              </span>

              <h2>
                How can we help?
              </h2>

              <div className="contact-item">

                <i className="bi bi-telephone"></i>

                <div>

                  <strong>
                    Customer Care
                  </strong>

                  <p>
                    1800 123 4567
                  </p>

                </div>

              </div>


              <div className="contact-item">

                <i className="bi bi-envelope"></i>

                <div>

                  <strong>
                    Email
                  </strong>

                  <p>
                    support@primebank.com
                  </p>

                </div>

              </div>


              <div className="contact-item">

                <i className="bi bi-geo-alt"></i>

                <div>

                  <strong>
                    Head Office
                  </strong>

                  <p>
                    Bengaluru, Karnataka, India
                  </p>

                </div>

              </div>

            </div>


            <div className="login-box">

              <div className="login-icon">

                <i className="bi bi-shield-lock"></i>

              </div>

              <h2>
                Internet Banking
              </h2>

              <p>
                Login securely to access your
                account and banking services.
              </p>

              <input
                type="text"
                placeholder="Customer ID"
              />

              <input
                type="password"
                placeholder="Password"
              />

              <button className="primary-button">
                Login Securely
                <i className="bi bi-arrow-right"></i>
              </button>

              <small>
                Never share your password or OTP
                with anyone.
              </small>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

}


export default Contact;