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
import { useState, useEffect } from 'react';
import { Context } from './Context/context';
import { Navigate } from 'react-router-dom';
import Cabinet from './pages/Cabinet';
// import Login from './pages/auth/login';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';

function App() {


const [isAuth, setIsAuth] = useState(false)
useEffect(()=>{
  onAuthStateChanged(auth, (user)=>{
    setIsAuth(Boolean(user))
    console.log(user, ">>>>>>")
  })
},[])





  return (
    <Context.Provider value={{isAuth, setIsAuth}}>
    <RouterProvider
    router={createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
          <Route path={ROUTE_CONSTANTS.LOGIN} element={isAuth ? <Navigate to={ROUTE_CONSTANTS.CABINET} /> : <Login />} />
              <Route path={ROUTE_CONSTANTS.REGISTER} element={isAuth ? <Navigate to={ROUTE_CONSTANTS.CABINET} /> : <Register />} />
              <Route path={ROUTE_CONSTANTS.CABINET} element={isAuth ? <Cabinet /> : <Navigate to={ROUTE_CONSTANTS.LOGIN} />} />

        </Route>
      )
    )}
   />
</Context.Provider>
   
  );
}

export default App;
