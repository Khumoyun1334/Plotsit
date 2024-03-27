import React from "react";
import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";

import KaruselFilter from "../../components/KaruselFilter/KaruselFilter";

function Listing() {
  return (
    <div>
      <Loading />
      <div>
        <Navbar
          name="CHECK OUT OUR LISTINGS"
          desc="Item Listings Of Different Categories"
        />
        <div className="mt-7">
          <KaruselFilter />
        </div>
        <div>
          <hr className="mt-11" />
        </div>
      </div>
    </div>
  );
}

export default Listing;
