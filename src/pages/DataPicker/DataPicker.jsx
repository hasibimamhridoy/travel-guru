import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Carosoul from "../../components/Header/Carosoul/Carosoul";
import { FetchContextProvider } from "../../contexts/FetchContext";
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.css'
import subDays from 'date-fns/subDays';


const DataPicker = () => {
    const ranges = [
        {
          label: 'today',
          value: [new Date(), new Date()]
        },
        {
          label: 'yesterday',
          value: [subDays(new Date(), 1), subDays(new Date(), 1)]
        }
      ];

  const { primaryCateData,handleBookingData } = useContext(FetchContextProvider);

  return (
    <div>
      <div className="text-white font-extralight flex my-container  z-30 relative  ">
        
        <div className="banner-title-container w-[45%] space-y-5 mt-16">
          <h1>{primaryCateData.name}</h1>
          <p>{primaryCateData.desc}</p>
        </div>

        <div className="carosole w-[55%] text-black font-extralight  ">
          
          <div className="h-fit w-[70%] bg-white rounded-md space-y-4 shadow-lg p-6">
            
            <div className="mx-auto ">
            <h1 className="text-left text-lg ">Origin</h1>
            <select className="select select-primary w-full max-w-xs">
              
              <option>Dhaka</option>
              <option>Chittagong</option>
              <option>Rangpur</option>
              <option>Khulna</option>
            </select>
            </div>
            <div className="mx-auto">
            <h1 className="text-left text-lg ">Destination</h1>
            <select className="select select-primary w-full max-w-xs">
              
            <option disabled selected>{primaryCateData.name}</option>
            </select>
            </div>

            <div className="datePick gap-6 flex">

            <div className="to w-[45%]">
            <h1 className="text-left text-lg ">Pick Date</h1>
            <div className="w-full ">
            <DateRangePicker size='sm' oneTap showOneCalendar ranges={ranges} />
            </div>
            </div>
            <div className="to w-[45%]">
            <h1 className="text-left text-lg ">Pick Date</h1>
            <div className="w-full ">
            <DateRangePicker oneTap size='sm' showOneCalendar ranges={ranges} />
            </div>
            </div>
            </div>

           <div className="bookingbtn text-center mt-5">
           <Link to={`/hotels/${primaryCateData.id}`}><button onClick={()=>handleBookingData(primaryCateData.id)} className="px-2 py-3  w-full rounded-md text-black  bg-yellow-300 border border-white border-solid">
            Search Hotels
          </button></Link>
           </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DataPicker;
