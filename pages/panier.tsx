import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function panier() {
  return (
    <>
      <Header panier={false} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold py-10">Votre Panier</h1>
        <div className="h-[calc(100vh-184px)] flex items-center gap-20">
          {/* Double truc à gauche */}
          <div className="flex flex-col justify-center items-center gap-8">
            <div className="flex justify-center items-center border border-black">
              <div className="relative h-72 w-72">
                <Image
                  alt="item shop"
                  src={"/../public/bulbi.png"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-center w-[500px] gap-10 p-6">
                <h1>Chaussures bulbi</h1>
                <p>Petite description</p>
                <div className="flex items-center justify-center gap-5">
                  <span>100€</span>
                  <button>-</button>
                  <span>3</span>
                  <button>+</button>
                  <button>Suprimer</button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center border border-black">
              <div className="relative h-72 w-72">
                <Image
                  alt="item shop"
                  src={"/../public/bulbi.png"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-center w-[500px] gap-10 p-6">
                <h1>Chaussures bulbi</h1>
                <p>Petite description</p>
                <div className="flex items-center justify-center gap-5">
                  <span>100€</span>
                  <button>-</button>
                  <span>3</span>
                  <button>+</button>
                  <button>Suprimer</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border border-black h-[612px] w-96 gap-14">
            <h1 className="text-4xl">Pour 2 items</h1>
            <h2 className="text-2xl">204€</h2>
            <button className="bg-yellow-300 px-5 py-3 rounded-lg">
              Passer la commande
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default panier;
