import React from "react";


function Investments() {

  const options = [

    {
      icon: "bi-safe",
      title: "Fixed Deposits",
      text: "Secure your money and earn predictable returns."
    },

    {
      icon: "bi-graph-up-arrow",
      title: "Mutual Funds",
      text: "Explore investment opportunities for long-term growth."
    },

    {
      icon: "bi-bar-chart",
      title: "Wealth Management",
      text: "Personalised financial solutions for your future."
    }

  ];


  return (

    <div className="inner-page">

      <section className="page-hero">

        <div className="container">

          <span>
            INVESTMENTS
          </span>

          <h1>
            Grow your money.
            <br />
            Build your future.
          </h1>

          <p>
            Explore smart ways to save and invest
            for your long-term financial goals.
          </p>

        </div>

      </section>


      <section className="investment-section">

        <div className="container">

          <div className="investment-grid">

            {options.map((item, index) => (

              <div
                className="investment-card"
                key={index}
                data-aos="fade-up"
              >

                <div className="investment-icon">

                  <i className={`bi ${item.icon}`}></i>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <button>
                  Explore
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


export default Investments;