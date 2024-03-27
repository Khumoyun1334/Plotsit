import React from "react";

function CartStyle({ title, img, bg, status, round1, round2 }) {
  return (
    <div
      className={`${status ? "bg-[#2B2D42]" : "bg-[#8D99AF]"} py-8 p-5  ${
        round1 ? "md:rounded-bl-[8px] rounded-[0px]" : "rounded-[0px]"
      } ${round2 ? "md:rounded-br-[8px] rounded-[0px]" : "rounded-[0px]"} `}
    >
      <div className="flex gap-4 items-center justify-center xl:justify-start">
        <div className="bg-white  w-[65px] h-[65px] rounded-full flex items-center justify-center ">
          <img src={img} alt="" />
        </div>
        <div>
          <p className="text-white xl:flex hidden">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default CartStyle;
