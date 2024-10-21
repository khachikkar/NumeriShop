import logo from './logo.svg';
import './App.css';
import MyHeader from './Components/Global/Header';

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
import { useState } from 'react';
import { Context } from './Context/context';
// import Login from './pages/auth/login';

function App() {


const [isAuth, setIsAuth] = useState(false)






  return (
    <Context.Provider value={{isAuth}}>
    <RouterProvider
    router={createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
          <Route path={ROUTE_CONSTANTS.LOGIN} element={<Login />} />
          <Route path={ROUTE_CONSTANTS.REGISTER} element={<Register />} />

        </Route>
      )
    )}
   />
</Context.Provider>
   
  );
}

export default App;
