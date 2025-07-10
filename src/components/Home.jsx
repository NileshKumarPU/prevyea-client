// src/pages/Home.js
import React, { useEffect, useState } from "react";
import RectangleCard from "./RectangleCard";
import SearchBar from "./SearchBar";
import { Link, useNavigate } from "react-router";
import About from "../Pages/About"

import { ToastContainer } from "react-toastify";

function Home() {


  


  return (
    <>
    <div className="bg-amber-50">

    <h1 className="text-center text-2xl font-md tracking-wide pt-4 ">Welcome to PrevYea!</h1>
    <h1 className="text-center font-extralight">Your One Stop PYQ Search</h1>
      <div>
        <SearchBar text="Search Paper Code" />
      </div>
      <div className="p-15 flex justify-around homepage">
        <Link className="homecard" to={"regular"}>
          <RectangleCard name="Regular Course" />
        </Link>
        <Link className="homecard" to={'bca'}>
          <RectangleCard name="BCA" />
        </Link>
      </div>
    <ToastContainer/>
    </div>
    <About/>
    </>
  );
}

export default Home;
