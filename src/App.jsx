import { useState } from "react";
import logo from "./images/logo.jpg";
import "./index.css";

const App = () => {
  return (
    <>
      <div className="bg-[#06122c] h-screen flex items-center justify-center">
        <div>
          <div className="flex items-center">
            <img src={logo} className="" alt="logo" />
          </div>
          <div className="text-center">
            <p className="text-white text-5xl mb-4">React Hook Form</p>
            <button className="p-3 bg-pink-500 rounded text-white">
              ดูตัวอย่าง
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
