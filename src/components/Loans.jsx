import React from "react";


function Loans() {

  const loans = [

    {
      icon: "bi-person",
      title: "Personal Loan",
      rate: "From 10.50%",
      text: "Flexible personal financing for your important needs."
    },

    {
      icon: "bi-house",
      title: "Home Loan",
      rate: "From 8.50%",
      text: "Make your dream home a reality with flexible home loans."
    },

    {
      icon: "bi-car-front",
      title: "Car Loan",
      rate: "From 9.00%",
      text: "Drive home your dream car with easy financing."
    },

    {
      icon: "bi-mortarboard",
      title: "Education Loan",
      rate: "From 9.50%",
      text: "Support your education and build your future."
    }

  ];


  return (

    <div className="inner-page">

      <section className="page-hero loan-hero">

        <div className="container">

          <span>
            LOANS
          </span>

          <h1>
            Make your plans
            <br />
            happen sooner.
          </h1>

          <p>
            Flexible loan options with simple
            processes and convenient repayment plans.
          </p>

        </div>

      </section>


      <section className="loans-section">

        <div className="container">

          <div className="section-heading centered">

            <span>
              LOAN PRODUCTS
            </span>

            <h2>
              Find the right loan for you
            </h2>

          </div>


          <div className="loan-grid">

            {loans.map((loan, index) => (

              <div
                className="loan-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >

                <div className="loan-icon">

                  <i className={`bi ${loan.icon}`}></i>

                </div>

                <span>
                  {loan.rate}
                </span>

                <h3>
                  {loan.title}
                </h3>

                <p>
                  {loan.text}
                </p>

                <button>
                  Apply Now
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


export default Loans;