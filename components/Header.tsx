import Image from "next/image";
import React from "react";

function Header({ categorie = true, panier = true, login = true }) {
  return (
    <header className="bg-[#232f3e] h-16 sticky top-0 shadow-lg flex justify-between items-center z-10">
      <Image
        alt="amzon logo"
        src={"/../public/amzon.png"}
        width={100}
        height={35}
        className="object-cover"
      />
      <span className="absolute ml-32 h-6 w-6">
        <Image
          alt="loupe"
          src="/../public/loupe.png"
          fill
          className="object-cover"
        />
      </span>
      <input
        placeholder="Rechercher"
        className="bg-white placeholder:font-semibold font-semibold px-12 py-3 w-full rounded-xl m-3"
      />
      <div className="flex gap-3">
        {categorie && (
          <button className="bg-[#fff7e2] rounded-lg font-semibold p-3">
            Catégorie
          </button>
        )}
        {login && (
          <button className="bg-[#fff7e2] rounded-lg font-semibold p-3">
            Connexion
          </button>
        )}
        {panier && (
          <button className="bg-[#fff7e2] rounded-lg font-semibold p-3 mr-3">
            Panier
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
