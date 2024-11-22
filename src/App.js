import './App.css';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import MainLayout from './Layout/Main';
import Login from './pages/auth/login';
import { ROUTE_CONSTANTS } from './core/constants/constants';
import Register from './pages/auth/register';

import { Navigate } from 'react-router-dom';
import {useEffect} from "react";
// import Login from './pages/auth/login';


import Profile from './pages/Profile';
// import TestPage from './pages/TestPage';
import CabinetLayout from './Layout/Cabinet';



// import Provider vor ashxati react redux y
import {useDispatch, useSelector} from "react-redux";

import {fetchUserProfileInfo} from "./state-management/slices/userProfile";
import LoadingWraper from "./Components/LoadingWraper";
import General from "./Layout/General";
import Dashboard from "./Components/Dashboard";
import MyProducts from "./Components/MyProducts";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Loved from "./pages/Loved";



function App() {

    const dispatch = useDispatch()
    const {loading, authUserProfile: {isAuth}} = useSelector(state => state.userProfile)





    useEffect(() => {
        dispatch(fetchUserProfileInfo())
    }, [dispatch])


    return (

        <LoadingWraper loading={loading}>

        <RouterProvider
            router={createBrowserRouter(
                createRoutesFromElements(
                    <Route path='/' element={<MainLayout/>} >
                        <Route path={ROUTE_CONSTANTS.GENERAL} element={<General/>}/>
                        <Route path={ROUTE_CONSTANTS.LOGIN}
                               element={isAuth ? <Navigate to={ROUTE_CONSTANTS.GENERAL}/> : <Login/>}/>
                        <Route path={ROUTE_CONSTANTS.REGISTER}
                               element={isAuth ? <Navigate to={ROUTE_CONSTANTS.GENERAL}/> : <Register/>}/>

                        <Route path={ROUTE_CONSTANTS.GENERAL} element={<General />} />

                        {/*    Cart   */}
                        <Route path={ROUTE_CONSTANTS.CART} element={<Cart/>} />

                        {/*Product Deatils*/}
                        <Route path={ROUTE_CONSTANTS.PRODUCT_DETAILS} element={<ProductDetails />} />
                        <Route path={ROUTE_CONSTANTS.LOVED} element={<Loved />} />


                        <Route path={ROUTE_CONSTANTS.CABINET}
                               element={isAuth ? <CabinetLayout/> : <Navigate to={ROUTE_CONSTANTS.LOGIN}/>}>

                            <Route path={ROUTE_CONSTANTS.PROFILE} element={<Profile/>}/>
                            <Route path={ROUTE_CONSTANTS.DASHBOARD} element={<Dashboard/>}/>
                            <Route path={ROUTE_CONSTANTS.MYPRODUCTS} element={<MyProducts/>}/>






                        </Route>

                    </Route>
                )
            )}
        />

        </LoadingWraper>

    );

}

export default App;
