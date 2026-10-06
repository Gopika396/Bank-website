import React from "react";


function DigitalBanking() {

  const services = [

    {
      icon: "bi-globe",
      title: "Internet Banking",
      text: "Access your accounts and manage transactions online."
    },

    {
      icon: "bi-phone",
      title: "Mobile Banking",
      text: "Bank securely from anywhere using your mobile phone."
    },

    {
      icon: "bi-qr-code-scan",
      title: "UPI Payments",
      text: "Make quick and secure payments using UPI."
    },

    {
      icon: "bi-bell",
      title: "Instant Alerts",
      text: "Stay updated with real-time transaction notifications."
    }

  ];


  return (

    <div className="inner-page">

      <section className="page-hero digital-hero">

        <div className="container">

          <span>
            DIGITAL BANKING
          </span>

          <h1>
            Your bank.
            <br />
            Wherever you are.
          </h1>

          <p>
            Experience convenient and secure
            banking through our digital services.
          </p>

        </div>

      </section>


      <section className="digital-section">

        <div className="container">

          <div className="digital-grid">

            {services.map((service, index) => (

              <div
                className="digital-card"
                key={index}
                data-aos="fade-up"
              >

                <div className="digital-icon">

                  <i className={`bi ${service.icon}`}></i>

                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.text}
                </p>

                <button>
                  Learn More
                  <i className="bi bi-arrow-right"></i>
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>

  );

}


export default DigitalBanking;