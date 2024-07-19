import React from "react";
import Heading from "../UI/Heading";
import SubHeading from "../UI/SubHeading";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Close, CurrencyRupee, Edit } from "@mui/icons-material";

function Categories() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };

  return (
    <div className="bg-white w-full h-full border-3 border-main-grey rounded-[10px] px-6 py-4">
      <section>
        <div className="border-l-4 border-medium-blue px-2">
          <Heading title="Categories" cssClass="text-medium-blue" />
        </div>
      </section>

      <section>
        <div className="body_content mt-6">
          <div className="category_slider flex gap-3 select-none">

            <div className="bg-gradient-to-r from-[#208DEC] to-[#1DEBFB] rounded-[10px] px-4 py-2 w-[250px] h-[130px] relative">
              <div className="absolute top-0 right-0 border-l-[5px] border-l-white border-b-[5px] border-b-white h-[40px] w-[40px] rounded-bl-[15px] text-white">
                <div className="text-center mt-1">
                  <Close
                    fontSize="small"
                    className="mx-1 cursor-pointer"
                  />
                </div>
              </div>

              <div className="mt-5">
                <SubHeading title="Category 1" cssClass="text-white my-1"/>
              </div>

              <div>
                <span className="text-white font-semibold text-4xl tracking-wide">
                  <CurrencyRupee fontSize="large"/>2000
                </span>
                <span className="text-white font-semibold text-4xl tracking-wide px-[2px]">
                  /
                </span>
                <span className="text-white font-light text-xl tracking-wide">
                  5000
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#208DEC] to-[#1DEBFB] rounded-[10px] px-4 py-2 w-[250px] h-[130px] relative">
              <div className="absolute top-0 right-0 border-l-[5px] border-l-white border-b-[5px] border-b-white h-[40px] w-[40px] rounded-bl-[15px] text-white">
                <div className="text-center mt-1">
                  <Close
                    fontSize="small"
                    className="mx-1 cursor-pointer"
                  />
                </div>
              </div>

              <div className="mt-5">
                <SubHeading title="Category 2" cssClass="text-white my-1" />
              </div>

              <div>
                <span className="text-white font-semibold text-4xl tracking-wide">
                <CurrencyRupee fontSize="large" />2000
                </span>
                <span className="text-white font-semibold text-4xl tracking-wide px-[2px]">
                  /
                </span>
                <span className="text-white font-light text-xl tracking-wide">
                  3000
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;
