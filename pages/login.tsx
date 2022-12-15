import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function login() {
  return (
    <>
      <Header login={false} />
      <div className="h-[calc(100vh-184px)] flex flex-col justify-center items-center">
        <div className="border border-black px-32 py-16 flex flex-col justify-center items-center gap-8">
          <h1 className="text-4xl font-bold pb-10 text-[#fa9724]">Connexion</h1>
          <input
            className="p-4 border-b border-b-gray-500 w-80"
            type="email"
            placeholder="email"
          />
          <input
            className="p-4 border-b border-b-gray-500 w-80"
            type="password"
            placeholder="password"
          />
          <button className="bg-[#7289d9] text-white px-6 py-3 font-bold rounded-xl border-none">
            Login
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default login;
