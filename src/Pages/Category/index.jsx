import React from "react";
import Navbar from "../../components/Navbar";
import CategoryC from "../../components/CategoryC";
import Desc from "../../components/Desc";
import Loading from "../../components/Loading";
import { IoIosAddCircle } from "react-icons/io";

function Category() {
  return (
    <div>
      <Loading />
      <div>
        <Navbar
          name="CATEGORIES WITH SIMPLE TABS"
          desc="We Have A Wide Range Of Business Categories For You"
        />
        <CategoryC />
        <div>
          <div className="lg:w-[86%] w-[95%] lg:flex block justify-between items-center m-auto mt-24">
            <div className="bg-[#2B2D42] p-6 rounded-[8px] py-11 xl:w-[20%] lg:w-[30%]">
              <div className="flex gap-4 items-center justify-center lg:justify-start">
                <div className="bg-white w-[65px] h-[65px] rounded-full flex items-center justify-center ">
                  <img
                    src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-01.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-white">Apartments</p>
                </div>
              </div>
            </div>
            <div>
              <button className=" bg-[#8D99AF] mt-10 flex gap-2 items-center lg:mt-0 w-full p-2 px-5 rounded-[9px] text-white">
                {" "}
                <IoIosAddCircle size={"20px"} />
                Check Our Listings
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[86%] w-[95%] m-auto mt-16">
          <hr />
        </div>
        <Desc />
        <div className="lg:w-[86%] w-[95%] m-auto mt-16">
          <hr />
        </div>
        <div className="lg:w-[86%] mt-16 w-[95%] m-auto">
          <p className="text-[20px] font-semibold text-[#2a2a2a]">
            General Info. about Apartments
          </p>
          <p className="mt-8 text-[15px] leading-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor ak incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravidat doerski. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque.
          </p>
          <div className="flex flex-col gap-2 mt-8">
            <p className="text-[15px] font-medium text-[#8d99af]">
              * Listing should have all the proper documents before being
              checked in.
            </p>
            <p className="text-[15px] font-medium text-[#8d99af]">
              ** Listing will be checked by our team members
            </p>
            <p className="text-[15px] font-medium text-[#8d99af]">
              *** After being sold, it should imediately be removed from our
              site and properly monitored.
            </p>
          </div>
        </div>
        <hr className="mt-14" />
      </div>
    </div>
  );
}

export default Category;
