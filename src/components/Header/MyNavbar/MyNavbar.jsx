import React, { useContext } from "react";
import AuthContext, { AuthContextProvider } from "../../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const {user,handleManualLogout} = useContext(AuthContextProvider)


  const navigate = useNavigate()

  const handleLogout = () =>{
    handleManualLogout()
    .then(result=>{

      navigate('/login')

    })
    .catch(error=>{
      console.log(error);
    })
  }

  return (
    <div className="my-container z-10 relative text-white font-extralight text-[1rem]">
      <div className="nav-container flex items-center justify-between">
      <div className="logo">
        <h1 className="font-bold">Travek Guru</h1>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Type here"
          className="input w-full h-9 bg-white bg-opacity-20 border-white border rounded-sm "
        />
      </div>

      <div className="nav-item">
        <ul className="flex items-center gap-10">
            <li>News</li>
            <li>Destination</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
      </div>

      <div className="login">
      {user ? <button onClick={handleLogout} className="btn btn-sm">Logout</button> :<Link to='/login'><button className="btn btn-sm">Login</button></Link>}
      </div>
      </div>
    </div>
  );
};

export default MyNavbar;
