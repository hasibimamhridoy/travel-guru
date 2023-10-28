import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MapPicker from "react-google-map-picker";

const DefaultLocation = { lat: 20, lng: 106 };
const DefaultZoom = 10;

const Hotels = () => {
  const [defaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }
  const hotels = useLoaderData();
  console.log(hotels);
  return (
    <div className="my-container">
      <h1>{hotels[0].cateName}</h1>

      <div className="z-40 relative flex gap-3">
        <div className="bg-green-200 w-[50%]">
          {hotels.map((hotel) => {
            return (
              <div>
                <h6>{hotel.name}</h6>
              </div>
            );
          })}
        </div>

        <div className="map w-[50%] bg-red-200">
            
        <MapPicker
        defaultLocation={location}
        zoom={zoom}
        style={{ height: "700px" }}
        onChangeLocation={handleChangeLocation}
        onChangeZoom={handleChangeZoom}
        apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
      />
            
        </div>
      </div>
    </div>
  );
};

export default Hotels;
