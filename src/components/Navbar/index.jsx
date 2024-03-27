import { IoIosAddCircle } from "react-icons/io";
import { CgAdd } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuLeft } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar({ name, desc }) {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 120; // 20 o'rniga o'zgartiring
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="bg-img h-[100vh] md:h-[73vh]">
      <div className="flex justify-center">
        <div
          className={`${
            scrolled ? "bg-white" : "md:bg-transparent bg-white"
          }  p-5  w-full border-b  top-0 fixed`}
        >
          <div className="flex justify-between lg:w-[86%] w-[95%] m-auto items-center">
            <div>
              <img
                className={`${scrolled ? "hidden" : "md:flex hidden"}`}
                src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/white-logo.png"
                alt=""
              />
              <img
                className={`${scrolled ? "flex" : "md:hidden flex"}`}
                src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/black-logo.png"
                alt=""
              />
            </div>
            <div className="md:hidden flex">
              <div
                style={{
                  backgroundColor: "",
                }}
                className=""
                onClick={() => {
                  setOpen(!open);
                  setMenu(!menu);
                }}
              >
                {menu ? (
                  <button>
                    <AiOutlineClose size={"30px"} />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    <CgMenuLeft size={"30px"} />
                  </button>
                )}
              </div>
            </div>
            <div
              className={`w-[92%] ${
                open ? "h-[180px]" : "h-0"
              } overflow-hidden  left-[4%]  md:hidden mt-[92px] top-0 bg-white  w-[92%]  z-50 absolute duration-300 transition-all flex flex-col items-start justify-center `}
            >
              <hr />
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-gray-500 border w-full  p-4 navbar text-center uppercase text-[16px]"
                    : "text-black uppercase text-[16px]  border w-full p-4 text-center"
                }
              >
                <span>Category</span>
              </NavLink>

              <NavLink
                to={"/listing"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-gray-500 border w-full  p-4 text-center uppercase text-[16px]"
                    : "text-black uppercase text-[16px] navbar border w-full p-4 text-center"
                }
              >
                <span className="navbar">Listing</span>
              </NavLink>
              <NavLink
                to={"/contactus"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-gray-500 border w-full p-4 text-center uppercase text-[16px]"
                    : "text-black uppercase text-[16px] border w-full p-4 text-center"
                }
              >
                <span>Contact Us</span>
              </NavLink>
            </div>
            <div className=" items-center lg:gap-14 md:gap-5 md:flex hidden">
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? `text-gray-500 uppercase text-[15px] `
                    : ` uppercase text-[15px]  ${
                        scrolled ? "text-black" : "text-white"
                      }`
                }
              >
                <span>Category</span>
              </NavLink>
              <NavLink
                to={"/listing"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? `text-gray-500 uppercase text-[15px] `
                    : ` uppercase text-[15px]  ${
                        scrolled ? "text-black" : "text-white"
                      }`
                }
              >
                <span>Listing</span>
              </NavLink>
              <NavLink
                to={"/contactus"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? `text-gray-500 uppercase text-[15px] `
                    : ` uppercase text-[15px]  ${
                        scrolled ? "text-black" : "text-white"
                      }`
                }
              >
                <span>Contact Us</span>
              </NavLink>
              <button
                className={`${
                  scrolled
                    ? "bg-[#8D99AF] p-2 px-5 rounded-[9px] flex gap-2 items-center text-white"
                    : "bg-white p-2 px-5 rounded-[9px] flex items-center gap-2"
                }`}
              >
                {" "}
                <IoIosAddCircle
                  className={`${scrolled ? "text-white" : "text-[#8D99AF]"}`}
                  size={"20px"}
                />
                Add Your Listing
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-[85%] md:w-[90%] w-[95%] md:mt-[200px] lg:mt-[240px] mt-[160px] m-auto">
        <div>
          <div>
            <p className="text-white text-[15px]">{name}</p>
          </div>
          <div className="lg:w-[60%] w-[95%]">
            <p className="text-white font-bold text-[45px]">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
