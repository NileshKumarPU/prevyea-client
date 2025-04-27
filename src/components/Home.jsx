// src/pages/Home.js
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import RectangleCard from "./RectangleCard";

import SearchBar from "./SearchBar";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <div>
        <SearchBar text="Search Paper Code" />
      </div>
      <div className="p-15 flex justify-around">
        <Link to={"regular"}>
          <RectangleCard name="Regular Course" />
        </Link>
        <Link to={'bca'}>
          <RectangleCard name="BCA" />
        </Link>
      </div>
    </>
  );
}

export default Home;
