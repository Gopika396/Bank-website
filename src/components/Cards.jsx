import React from "react";


function Cards() {

  return (

    <div className="inner-page">

      <section className="page-hero">

        <div className="container">

          <span>
            CREDIT CARDS
          </span>

          <h1>
            A card made
            <br />
            for your lifestyle.
          </h1>

          <p>
            Enjoy rewards, offers and convenient
            payments with Prime Bank cards.
          </p>

        </div>

      </section>


      <section className="cards-section">

        <div className="container">

          <div className="credit-card-showcase">

            <div className="credit-card-design">

              <div className="card-top">

                <strong>
                  PRIME BANK
                </strong>

                <i className="bi bi-wifi"></i>

              </div>

              <div className="card-chip">
                <i className="bi bi-cpu"></i>
              </div>

              <div className="card-number">
                4528  1098  7654  3210
              </div>

              <div className="card-bottom">

                <span>
                  PRIME MEMBER
                </span>

                <strong>
                  VISA
                </strong>

              </div>

            </div>


            <div className="card-info">

              <span>
                PRIME SIGNATURE CARD
              </span>

              <h2>
                More rewards.
                <br />
                More possibilities.
              </h2>

              <p>
                Enjoy exciting rewards, dining offers,
                travel benefits and secure payments.
              </p>

              <button className="primary-button">
                Apply for Card
                <i className="bi bi-arrow-right"></i>
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

}


export default Cards;