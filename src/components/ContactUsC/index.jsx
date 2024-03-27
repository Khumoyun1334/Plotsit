import { FaTelegramPlane } from "react-icons/fa";
import React from "react";

function ContactUsC() {
  return (
    <div>
      <div className="w-[86%] bg-[#F7F7F7] items-center lg:flex md:block mt-16 rounded-lg m-auto">
        <div className="lg:w-[50%] md:w-full">
          <iframe
            className="w-[100%] h-[670px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29381.853330290192!2d-43.38913069523425!3d-22.996892785029754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb695cd967b7%3A0x171cdd035a6a9d84!2sAv.%20L%C3%BAcio%20Costa%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%20Braziliya!5e0!3m2!1suz!2s!4v1711528573138!5m2!1suz!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className=" lg:w-[50%] lg:p-11 w-[80%] py-8 lg:py-0 m-auto">
          <div className="">
            <div className=" m-auto gap-6 lg:flex grid">
              <input
                className="bg-transparent border outline-none w-full lg:w-[50%] placeholder:text-gray-700 p-2 px-6 rounded-[8px] border-gray-700"
                type="text "
                placeholder="Name"
              />
              <input
                className="bg-transparent border outline-none lg:w-[50%] w-full placeholder:text-gray-700 p-2 px-6 rounded-[8px] border-gray-700"
                type="text"
                placeholder="Surname"
              />
            </div>
            <div>
              <input
                className="bg-transparent mt-6 outline-none border w-[100%] placeholder:text-gray-700 p-2 px-6 rounded-[8px] border-gray-700"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div className="mt-10  flex-wrap flex gap-6">
              <div className="flex items-center gap-3">
                <input className="w-[15px] h-[15px]" type="checkbox" />
                <p className="text-[#8d99af]">Cars</p>
              </div>
              <div className="flex items-center gap-3">
                <input className="w-[15px] h-[15px]" type="checkbox" />
                <p className="text-[#8d99af]">Apartments</p>
              </div>
              <div className="flex items-center gap-3">
                <input className="w-[15px] h-[15px]" type="checkbox" />
                <p className="text-[#8d99af]">Shopping</p>
              </div>
              <div className="flex items-center gap-3">
                <input className="w-[15px] h-[15px]" type="checkbox" />
                <p className="text-[#8d99af]">Food & Life</p>
              </div>
              <div className="flex items-center gap-3">
                <input className="w-[15px] h-[15px]" type="checkbox" />
                <p className="text-[#8d99af]">Traveling</p>
              </div>
            </div>
            <div className="mt-9">
              <textarea
                className="bg-transparent outline-none border border-gray-800 px-5 py-4 rounded-[8px] placeholder:text-gray-700 w-full"
                name="postContent"
                placeholder="Messege"
                rows={5}
                cols={40}
              />
            </div>
            <div>
              <button className="bg-[#8D99AF] hover:bg-[#2B2D42] transition-all flex gap-3 items-center mt-8 p-3 px-5 rounded-[9px] text-white">
                {" "}
                <div className="w-[27px] h-[27px] bg-[#2B2D42] flex rounded-full items-center justify-center ">
                  <FaTelegramPlane />
                </div>
                Send Messenge
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsC;
