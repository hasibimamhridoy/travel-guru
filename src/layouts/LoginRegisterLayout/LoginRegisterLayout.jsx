import React from 'react';
import MyNavbar from '../../components/Header/MyNavbar/MyNavbar';
import { Outlet } from 'react-router-dom';
import MyNavbarLogin from '../../components/Header/MyNavbar/MyNavbarLogin';

const LoginRegisterLayout = () => {
    return (
        <div>
            <div className=''>
            <div className="header ">
               <MyNavbarLogin></MyNavbarLogin>
            </div>
            <div className="outlet">
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default LoginRegisterLayout;