import React, { useContext, useState } from "react";
import "./Carosol.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { FetchContextProvider } from "../../../contexts/FetchContext";

const Carosoul = () => {
  // console.log(categories);

  const {categories} = useContext(FetchContextProvider)
  const {handleBookingData,clikedId} = useContext(FetchContextProvider)


 

  return (
    <div className="slide-container">
      <div className="mb-20 text-black font-semibold font-xl">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {categories.map((cate) => {
            return (
              <SwiperSlide>
                <div
                onClick={()=>handleBookingData(cate.id)}
                  className="card h-[17rem] relative cursor-pointer bg-red-300 border-white border-4 border-solid"
                >
                  <img className="h-full w-full " src={cate.photoUrl} alt="" />
                  <h1 className="absolute bottom-4 left-3 text-xl font-extralight  ">
                    {cate.name}
                  </h1>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="slider-controler">
        <div onClick={()=>{
          if (clikedId == 1) {
            return
          } else {
            handleBookingData(clikedId-1)
          }
        }} className="swiper-button-prev slider-arrow">
          <AiOutlineArrowLeft></AiOutlineArrowLeft>
        </div>
        <div onClick={()=>{
          if (categories?.length == clikedId) {
            console.log(categories.length , clikedId);
            return
          }else{
            handleBookingData(parseFloat(clikedId)+1)
          }
        }} className="swiper-button-next slider-arrow">
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Carosoul;
