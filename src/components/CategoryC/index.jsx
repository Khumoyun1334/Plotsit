import React from "react";
import CartStyle from "./CartStyle";

function CategoryC() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5  lg:w-[86%] w-[95%] m-auto">
        <CartStyle
          title="Apartments"
          img="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-01.png"
          status={true}
          round1={true}
          round2={false}
        />
        <CartStyle
          title="Fodd"
          img="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-02.png"
          status={false}
          round1={false}
          round2={false}
        />
        <CartStyle
          title="Cars"
          img="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-03.png"
          status={false}
          round1={false}
          round2={false}
        />
        <CartStyle
          title="Shopping"
          img="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-04.png"
          status={false}
          round1={false}
          round2={false}
        />
        <CartStyle
          title="Traveling"
          img="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-01.png"
          status={false}
          round1={false}
          round2={true}
        />
      </div>
    </div>
  );
}

export default CategoryC;
