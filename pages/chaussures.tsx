import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShopItem from "../components/ShopItem";

function panier() {
  return (
    <>
      <Header panier={false} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold py-10">Votre Panier</h1>
        <div className="h-[calc(100vh-184px)] flex items-center gap-20">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <ShopItem
              imgsrc={"/bulbi.png"}
              buttonTitle="Ajouter au panier"
              desc={"Collab puma X pokemon : Bulbizar"}
              title="Bulbi"
              price="50€"
            />
            <ShopItem
              imgsrc={"/salam.png"}
              buttonTitle="Ajouter au panier"
              desc={"Collab puma X pokemon : Salamèche"}
              title="Salam"
              price="50€"
            />
            <ShopItem
              imgsrc={"/chossur1.png"}
              buttonTitle="Ajouter au panier"
              desc={"AIR 1 LOW UNISEX - Chaussures de basket"}
              title="Air Jordan"
              price="120€"
            />
          </div>
          <div className="flex flex-col items-center justify-center border border-black h-[612px] w-96 gap-14">
            <div className="relative h-full w-full">
              <Image alt="pub" src={"/pub.jpg"} fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default panier;
