import React, { useContext } from "react";
import { AuthContextProvider } from "../../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const MyNavbarLogin = () => {

  const {handleManualLogout,user} = useContext(AuthContextProvider)
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
    <div className="my-container z-10 relative text-black font-extralight text-[1rem]">
      <div className="nav-container flex items-center justify-between">
      <Link to='/'><div className="logo ">
        <h1 className="font-bold">Travel Guru</h1>
      </div>
      </Link>

      <div className="search">
        <input
          type="text"
          placeholder="Type here"
          className="input w-full h-9  border-black border rounded-sm "
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

export default MyNavbarLogin;
