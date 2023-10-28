import React, { useContext, useEffect, useState } from 'react';
import MyNavbar from '../../components/Header/MyNavbar/MyNavbar';
import { Outlet } from 'react-router-dom';
import './HomeLayout.css'
import { FetchContextProvider } from '../../contexts/FetchContext';

const HomeLayout = () => {

    const {primaryCateData,categories} = useContext(FetchContextProvider)

    const [dymanicPhoto,setDynamicPhoto] = useState({})

    useEffect(()=>{

        const findData = categories?.find(cate=> cate.id == primaryCateData?.id)
        setDynamicPhoto(findData)

    },[primaryCateData])


    console.log(dymanicPhoto?.photoUrl);
    console.log(primaryCateData);

    //body-background-img


    return (
        <div style={{backgroundImage:`url(${dymanicPhoto?.photoUrl})`,backgroundRepeat:'no-repeat',backgroundSize:"cover"}} className={`h-screen object-cover`}>
            <div className="header">
                <MyNavbar></MyNavbar>
            </div>
            <div className="outlet">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default HomeLayout;