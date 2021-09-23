import React from "react";

const Header = () => {
  return (
    <>
      <section id="hero" class="d-flex align-items-center">
        <div
          class="container position-relative text-center text-lg-start"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div class="row">
            <div class="col-lg-8">
              <h1>
                CosmoInfinitas <span>Marketplace</span>
              </h1>
              <h2>
                Welcome to the virtual world’s one-stop-shop for the very best
                digital assets.
              </h2>

              <div class="btns">
                <a
                  href="#book-a-table"
                  class="btn-book animated fadeInUp scrollto"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
