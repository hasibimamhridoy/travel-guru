import React, { createContext, useEffect, useState } from "react";

export const FetchContextProvider = createContext(null);

const FetchContext = ({ children }) => {

    const [categories,setCategories] = useState([])
    const [primaryCateData,setPrimaryCateData] = useState([])

    const [clikedId,setClikedId]= useState("1")

  useEffect(()=>{

    fetch(`https://my-travel-guru-server.vercel.app/categories`)
    .then(res =>res.json())
    .then(data => setCategories(data))

  },[])


  useEffect(()=>{

    fetch(`https://my-travel-guru-server.vercel.app/catedata/1`)
    .then(res =>res.json())
    .then(data => setPrimaryCateData(data))

  },[])



  const handleBookingData = (id="1")=>{
    console.log('Clicked',id);

    setClikedId(id)
    fetch(`https://my-travel-guru-server.vercel.app/catedata/${id}`)
    .then(res =>res.json())
    .then(data => setPrimaryCateData(data))

  }

//   const handleDatePicker = (id) => {
//     console.log(id);
//   };


  console.log(primaryCateData);

  const fetchInfo = {
    categories,
    primaryCateData,
    handleBookingData,
    clikedId
  };

  return (
    <div>
      <FetchContextProvider.Provider value={fetchInfo}>
        {children}
      </FetchContextProvider.Provider>
    </div>
  );
};

export default FetchContext;
