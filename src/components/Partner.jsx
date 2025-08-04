import React from "react";
import Nepal from '../assets/partner/Ne.png'
import National from '../assets/partner/Na.jpg'
import Jyoti from '../assets/partner/Jyoti.png'
import Meta from '../assets/partner/Meta.png'

function Partner() {
  return (
    <section className="partners">
      <div className="container">
        <h3>Trusted by leading insurance providers:</h3>
        <div className="partner-logos">
          <img
            src={Nepal}
            alt="Nepal Life Insurance"
            loading="lazy"
          />
          <img
            src={National}
            alt="National Life Insurance"
            loading="lazy"
          />
          <img
            src={Jyoti}
            alt="Jyoti Life Insurance"
            loading="lazy"
          />
          <img
            src={Meta}
            alt="MetLife Insurance"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
export default Partner;
