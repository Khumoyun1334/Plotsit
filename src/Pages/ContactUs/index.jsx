import React from "react";
import Navbar from "../../components/Navbar";
import ContactUsC from "../../components/ContactUsC";

function ContactUa() {
  return (
    <div>
      <div>
        <Navbar
          name="KEEP IN TOUCH WITH US"
          desc="Feel Free To Send Us A Message About Your Business Needs"
        />
        <ContactUsC />
        <div className="mt-16">
          <hr />
        </div>
      </div>
    </div>
  );
}

export default ContactUa;
