import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Home from '../Page/Home/Home';
import Faq from '../Component/FAQ/Faq';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/faq",
            element: <Faq></Faq>,
        },
      ]
    },
  ]);

export default Router;