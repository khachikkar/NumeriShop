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
import TestPage from './pages/TestPage';
import CabinetLayout from './Layout/Cabinet';



// import Provider vor ashxati react redux y
import {useDispatch, useSelector} from "react-redux";

import {fetchUserProfileInfo} from "./state-management/slices/userProfile";



function App() {

    const dispatch = useDispatch()
    const {authUserProfile: {isAuth}} = useSelector(state => state.userProfile)





    useEffect(() => {
        dispatch(fetchUserProfileInfo())
    }, [dispatch])


    return (

        <RouterProvider
            router={createBrowserRouter(
                createRoutesFromElements(
                    <Route path='/' element={<MainLayout/>}>
                        <Route path={ROUTE_CONSTANTS.TEST} element={<TestPage/>}/>
                        <Route path={ROUTE_CONSTANTS.LOGIN}
                               element={isAuth ? <Navigate to={ROUTE_CONSTANTS.CABINET}/> : <Login/>}/>
                        <Route path={ROUTE_CONSTANTS.REGISTER}
                               element={isAuth ? <Navigate to={ROUTE_CONSTANTS.CABINET}/> : <Register/>}/>

                        <Route path={ROUTE_CONSTANTS.CABINET}
                               element={isAuth ? <CabinetLayout/> : <Navigate to={ROUTE_CONSTANTS.LOGIN}/>}>

                            <Route path={ROUTE_CONSTANTS.PROFILE} element={<Profile/>}/>


                        </Route>


                    </Route>
                )
            )}
        />

    );

}

export default App;
