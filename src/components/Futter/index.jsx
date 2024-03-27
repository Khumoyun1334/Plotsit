import React from "react";

function Futter() {
  return (
    <div>
      <div className="grid lg:grid-cols-3  gap-4 lg:w-[93%] xl:w-[86%] w-[95%] m-auto grid-cols-1 py-[50px]">
        <div className="mt-7 ">
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/black-logo.png"
              alt=""
            />
          </div>
          <p className="text-[15px] mt-7 text-center lg:text-start leading-[30px]">
            Lorem ipsum dolor sit amet, consectetur adicingi elit, sed do
            eiusmod tempor incididunt ut et dolore magna aliqua.
          </p>
        </div>
        <div className=" flex mt-8 lg:mt-0 justify-center">
          <div>
            <div>
              <p className="text-[20px] text-[#8d99af] font-bold">
                Helpful Links
              </p>
            </div>
            <div className="mt-6 lg:flex block  gap-[70px]">
              <div className="flex flex-col gap-4 text-center lg:text-start">
                <p className="text-[15px] ">Categories</p>
                <p className="text-[15px] ">Reviews</p>
                <p className="text-[15px] ">Listing</p>
                <p className="text-[15px] ">Contact Us</p>
              </div>
              <div className="flex flex-col mt-4 lg:mt-0 text-center lg:text-start gap-4">
                <p className="text-[15px] ">About Us</p>
                <p className="text-[15px] ">Awards</p>
                <p className="text-[15px] ">Useful Sites</p>
                <p className="text-[15px] ">Privacy Policy</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className=" mt-6 lg:mt-0">
          <div>
            <p className="text-[20px] text-[#8d99af] text-center lg:text-start font-bold">
              Contact Us
            </p>
          </div>
          <div className="mt-6">
            <p className="text-[15px] text-center lg:text-start">
              27th Street of New Town, Digital Villa
            </p>
          </div>
          <div className="lg:flex block text-center lg:text-start mt-4 justify-between lg:mt-9">
            <p>010-020-0340</p>
            <p>010-020-0340</p>
          </div>
        </div>
      </div>
      <div className="lg:w-[86%] w-[95%] m-auto">
        <hr />
      </div>
      <div>
        <p className="text-center mt-8 leading-[30px]">
          Copyright © 2021 Plot Listing Co., Ltd. All Rights Reserved.{" "}
          <p>Design: TemplateMo</p>
        </p>
      </div>
      <div className="h-[30px]"></div>
    </div>
  );
}

export default Futter;
