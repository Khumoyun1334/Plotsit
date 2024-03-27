import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../Pages/Category";
import Listing from "../Pages/Listing";
import ContactUa from "../Pages/ContactUs";
import Futter from "../components/Futter";

function Root() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/contactus" element={<ContactUa />} />
      </Routes>
      <Futter />
    </div>
  );
}

export default Root;
