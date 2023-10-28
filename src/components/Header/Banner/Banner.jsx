import React, { useContext, useEffect, useState } from 'react';
import Carosoul from '../Carosoul/Carosoul';
import { data } from 'autoprefixer';
import { Link } from 'react-router-dom';
import { FetchContextProvider } from '../../../contexts/FetchContext';

const Banner = () => {


  const {primaryCateData} = useContext(FetchContextProvider)
  const {handleBookingData} = useContext(FetchContextProvider)
  

    return (

      <div>
        <div className="text-white font-extralight flex  ">

        <div className="banner-title-container w-[45%] space-y-5 mt-16">
          <h1>{primaryCateData.name}</h1>
          <p>
           {primaryCateData.desc}
          </p>
          <Link to={`catedata/${primaryCateData.id}`}><button onClick={()=>handleBookingData(primaryCateData.id)} className="px-5 py-1 text-black rounded-sm bg-yellow-300 border border-white border-solid">
            Booking Now
          </button></Link>
        </div>

        <div className="carosole w-[55%]  ">
        <Carosoul></Carosoul>
        </div>
        </div>
      

      </div>
    );
};

export default Banner;