import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const RootLayout = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Nav />
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;

// .app{
//   display: flex;
     
// }

// .navbar{
//   flex: 0.2;
//   background-color: rgb(0, 21, 41);
// }

// .main{
//   flex: 0.8;
//   width: 100%;
// }
