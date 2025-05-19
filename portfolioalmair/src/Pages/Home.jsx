// import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Components/Nav.jsx";

function Home() {
  return (
    <div className="w-full h-screen px-8 lg:px-50 py-10 font-figtree">
      <Navbar />
      <div
        className="bg-amber-200 w-full h-[90%] mt-5 p-5 md:p-10 bg-cover bg-center bg-[url('/bam.JPG')] flex flex-col justify-end items-end text-end  text-white text-2xl font-bold"
      >
        <div className="transition-all">Muhammad Akram Almair</div>
        <div className="">Passion in Coding.</div>
        <div className="">16 years old</div>
        <div className="">Student</div>
      </div>
    </div>
  );
}

export default Home;
