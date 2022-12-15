import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShopItem from "../components/ShopItem";

function pullbleu() {
  return (
    <>
      <Header login={false} />
      <div className="flex flex-wrap items-center justify-center gap-16 pt-10 pb-[57px]">
        <ShopItem
          buttonTitle={"Ajouter au pannier"}
          desc="Pull bleu 1 coton blabla"
          price={"50€"}
          title="Pull bleu 1"
          imgsrc={"/../public/pullbleu1.png"}
        />
        <ShopItem
          buttonTitle={"Ajouter au pannier"}
          desc="Pull bleu 2 coton blabla"
          price={"60€"}
          title="Pull bleu 2"
          imgsrc={"/../public/pullbleu2.png"}
        />
        <ShopItem
          buttonTitle={"Ajouter au pannier"}
          desc="Pull bleu 3 coton blabla"
          price={"200 000€"}
          title="Pull bleu 3 de luxe"
          imgsrc={"/../public/pullbleu3.png"}
        />
        <ShopItem
          buttonTitle={"Ajouter au pannier"}
          desc="Pull bleu un peu de luxe"
          price={"1 000 000€"}
          title="Pull bleu 4"
          imgsrc={"/../public/pullbleu4.png"}
        />
      </div>
      <Footer />
    </>
  );
}

export default pullbleu;
