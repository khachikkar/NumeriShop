import './App.css';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import MainLayout from './Layout/Main';
import Login from './pages/auth/login';
import { FIRESTORE_PATH_NAMES, ROUTE_CONSTANTS } from './core/constants/constants';
import Register from './pages/auth/register';
import { useState, useEffect } from 'react';
import { Context } from './Context/context';
import { Navigate } from 'react-router-dom';
// import Login from './pages/auth/login';

import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './services/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Profile from './pages/Profile';
import TestPage from './pages/TestPage';
import CabinetLayout from './Layout/Cabinet';



// import Provider vor ashxati react redux y
import {Provider} from "react-redux";
import {store} from "./state-management/store";



function App() {

const [isAuth, setIsAuth] = useState(false)

const [userProfileData, setUserProfileData] = useState({})

/// get data from firestore

const handleGetUserData = async (uid) =>{
  const docRef = doc(db, FIRESTORE_PATH_NAMES.REGISTRED_USERS, uid)
  const response = await getDoc(docRef)
  if(response.exists()){
    setUserProfileData(response.data())
  }

}


useEffect(()=>{
  onAuthStateChanged(auth, (user)=>{

    user?.uid && handleGetUserData(user.uid)

    setIsAuth(Boolean(user))
    console.log(user, ">>>>>>")
  })
},[])






  return (
      <Provider store={store} >
    <Context.Provider value={{isAuth, setIsAuth, userProfileData, handleGetUserData}}>
    <RouterProvider
    router={createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
          <Route path={ROUTE_CONSTANTS.TEST} element={ <TestPage />} />
          <Route path={ROUTE_CONSTANTS.LOGIN} element={isAuth ? <Navigate to={ROUTE_CONSTANTS.CABINET} /> : <Login />} />
          <Route path={ROUTE_CONSTANTS.REGISTER} element={isAuth ? <Navigate to={ROUTE_CONSTANTS.CABINET} /> : <Register />} />

<Route path={ROUTE_CONSTANTS.CABINET} element={isAuth ? <CabinetLayout /> : <Navigate to={ROUTE_CONSTANTS.LOGIN} />}>

<Route path={ROUTE_CONSTANTS.PROFILE} element={ <Profile /> } />


</Route>



        </Route>
      )
    )}
   />
</Context.Provider>
    </Provider>
   
  );
}

export default App;
