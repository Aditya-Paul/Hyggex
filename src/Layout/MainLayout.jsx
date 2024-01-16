import React from 'react';
import Navbar from '../Component/Navbar/Navbar.jsx';
import Home from '../Page/Home/Home.jsx';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>

        </div>
    );
};

export default MainLayout;