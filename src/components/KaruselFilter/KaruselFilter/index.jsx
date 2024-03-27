import React, { useState } from "react";

import CartStyle from "./CartStyle";

const data = [
  {
    img: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-01.jpg",
    status: "Html",
  },
  {
    img: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-04.jpg",

    status: "Photo",
  },
  {
    img: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-03.jpg",

    status: "Word",
  },
  {
    img: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-05.jpg",
    status: "Mobile",
  },
];

function KaruselFilter() {
  const [fillter, setFillter] = useState("Html");
  return (
    <section
      id="port"
      className="w-full items-center md:grid md:px-10 xl:pb-10"
      style={{}}
    >
      <div
        className="grid lg:w-[100%] m-auto xl:w-[86%]  gap-10 lg:flex md:grid md:w-[100%] md:gap-10 xl:flex xl:mt-10 items-start"
        id="Prt"
      >
        <div className="w-[96%] m-auto grid gap-10 xl:w-[34%]  text-xl lg:w-[30%] md:w-[100%] font-extrabold">
          {/* <button
            className={`${
              fillter === "All"
                ? "bg-[#EA5424] text-white p-2 px-4"
                : "bg-[#F8F8F8] text-gray-500 "
            } ''`}
            onClick={() => {
              setFillter("All");
            }}
          >
            All
          </button> */}
          <div
            style={{ height: "118px", borderRadius: "6px" }}
            className={`${
              fillter === "Html"
                ? "bg-[#2B2D42] p-6 rounded-[8px] "
                : "border-[3px]  p-6 rounded-[8px] bg-[#8D99AF] border-[rgba(219,138,222,0.5)]"
            } ""`}
            onClick={() => {
              setFillter("Html");
            }}
          >
            <div className="flex gap-4 items-center justify-center lg:justify-start">
              <div className="bg-white w-[65px] h-[65px] rounded-full flex items-center justify-center ">
                <img
                  src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-01.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-white text-[16px] font-medium">Apartments</p>
              </div>
            </div>
          </div>
          <div
            style={{ height: "118px", borderRadius: "6px" }}
            className={`${
              fillter === "Photo"
                ? "bg-[#2B2D42] p-6 rounded-[8px] "
                : "border-[3px]  p-6 rounded-[8px] bg-[#8D99AF] border-[rgba(219,138,222,0.5)]"
            } ""`}
            onClick={() => {
              setFillter("Photo");
            }}
          >
            <div className="flex gap-4 items-center justify-center lg:justify-start">
              <div className="bg-white w-[65px] h-[65px] rounded-full flex items-center justify-center ">
                <img
                  src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-02.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-white text-[16px] font-medium">
                  {" "}
                  Food & Life
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ height: "118px", borderRadius: "6px" }}
            className={`${
              fillter === "Word"
                ? "bg-[#2B2D42] p-6 rounded-[8px] "
                : "border-[3px]  p-6 rounded-[8px] bg-[#8D99AF] border-[rgba(219,138,222,0.5)]"
            } ''`}
            onClick={() => {
              setFillter("Word");
            }}
          >
            <div className="flex gap-4 items-center justify-center lg:justify-start">
              <div className="bg-white w-[65px] h-[65px] rounded-full flex items-center justify-center ">
                <img
                  src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-03.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-white text-[16px] font-medium">Cars</p>
              </div>
            </div>
          </div>
          <button
            style={{ height: "118px", borderRadius: "6px" }}
            className={`${
              fillter === "Mobile"
                ? "bg-[#2B2D42] p-6 rounded-[8px] "
                : "border-[3px]  p-6 rounded-[8px] bg-[#8D99AF] border-[rgba(219,138,222,0.5)]"
            } ''`}
            onClick={() => {
              setFillter("Mobile");
            }}
          >
            <div className="flex gap-4 items-center justify-center lg:justify-start">
              <div className="bg-white w-[65px] h-[65px] rounded-full flex items-center justify-center ">
                <img
                  src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-05.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-white text-[16px] font-medium">Traveling</p>
              </div>
            </div>
          </button>
        </div>
        <div className="md:w-[100%] w-[96%] m-auto" id="Prt">
          {data
            .filter((elem) => {
              if (fillter === "All") {
                return elem;
              } else {
                return elem.status === fillter;
              }
            })
            .map((item) => (
              <CartStyle key={item.id} img={item.img} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default KaruselFilter;
