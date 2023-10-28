import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import Home from "../../pages/Home/Home";
import News from "../../pages/News/News";
import Destination from "../../pages/Destination/Destination";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import DataPicker from "../../pages/DataPicker/DataPicker";
import Hotels from "../../pages/Hotels/Hotels";
import LoginRegisterLayout from "../../layouts/LoginRegisterLayout/LoginRegisterLayout";
import Register from "../../pages/LoginRegister/Register/Register";
import Login from "../../pages/LoginRegister/Login/Login";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://my-travel-guru-server.vercel.app/categories')
            },
            {
                path:'/catedata/:id',
                element:<DataPicker></DataPicker>,
                loader:()=>fetch('https://my-travel-guru-server.vercel.app/categories')
            },
        
            {
                path:'/news',
                element:<News></News>
            },
            {
                path:'/destination',
                element:<Destination></Destination>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
        ]
    },
    {
        path:'/',
        element:<LoginRegisterLayout></LoginRegisterLayout>,
        children:[
            
            {
                path:'/hotels/:id',
                element:<PrivateRoutes><Hotels></Hotels></PrivateRoutes>,
                loader:({params})=>fetch(`https://my-travel-guru-server.vercel.app/hotels/${params.id}`)
            },
            {
                path:'/register',
                element:<Register></Register>,
                
            },
            {
                path:'/login',
                element:<Login></Login>,
                
            },
            
        ]
    }
])

export default Router;