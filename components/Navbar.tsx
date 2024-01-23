import {Link} from "@/navigation";
import React from "react";
import LanguageChanger from "./LangChanger";

const Navbar = () => {
  return (
    <div className="wrapper fixed left-0 my-3 right-0 max-h-fit top-0 bg-white shadow-lg rounded-2xl">
      <div className="container mx-auto   ">
        <div className="flexBetween">
          <div className="flexCenter">
            {" "}
            <h1 className="text-3xl md:text-5xl bold text-gray-800">Logo</h1>
            <ul className="flex px-14 text-gray-800">
              <Link className="text-2xl md:text-3xl mx-2" href={"/"}>
                Home
              </Link>
              <Link className="text-2xl md:text-3xl mx-2" href={"/about"}>
                About
              </Link>
            </ul>
          </div>
          <div>
            <button className="btn">Sign Up</button>
            <LanguageChanger />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
