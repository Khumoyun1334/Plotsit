import React from "react";

function Desc() {
  return (
    <div>
      <div className="lg:w-[86%] mt-12 w-[95%] gap-5 lg:flex block  m-auto">
        <div className="lg:w-[75%] w-[95%] m-auto">
          <p className="text-[20px] font-semibold text-[#2a2a2a]">
            Description for Apartments
          </p>
          <p className="mt-8 text-[15px] leading-[30px]">
            If you feel that Plot Listing HTML template is useful, please
            support us a little via PayPal. You are allowed to use this template
            for your commercial websites. You are NOT allowed to redistribute
            this template ZIP file on any Free CSS collection websites. You may
            contact us for more information. Thank you.
          </p>
        </div>
        <div className="lg:w-[25%] w-[95%] m-auto mt-7 lg:mt-0">
          <div className="flex gap-4">
            <img
              src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-heading.png"
              alt=""
            />
            <p className="text-[20px] font-semibold text-[#2a2a2a]">
              Total Listings
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <p className="text-[15px] font-medium text-[#8d99af]">
              This Week: 200 Listings & 150 Sales
            </p>
            <p className="text-[15px] font-medium text-[#8d99af]">
              This Month: 1,800 Listings & 1,560 Sales
            </p>
            <p className="text-[15px] font-medium text-[#8d99af]">
              This Year: 16,000 Listings & 14,000 Sales
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desc;
