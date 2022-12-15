import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShopItem from "../components/ShopItem";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <Header />
        <div className="flex flex-wrap items-center justify-center gap-16 pt-10">
          <ShopItem
            title="Bulbi"
            desc="Collab Puma X pokemon : Bulbizar"
            imgsrc={"/../public/bulbi.png"}
            buttonTitle="Acheter"
          />
          <ShopItem
            title="Salam"
            desc="Collab Puma X pokemon : Salamèche"
            imgsrc={"/../public/salam.png"}
            buttonTitle="Acheter"
          />
          <ShopItem
            title="T-shirt Kaotiko"
            desc="WASHED JAPANES FLOWER IVORY"
            imgsrc="/../public/tshirt-jap.png"
            buttonTitle="Acheter"
          />
        </div>
        <div className="pt-12 flex items-center justify-center gap-10">
          <div className="border border-black flex flex-col items-center justify-between h-[500px] w-[793px]">
            <h2 className="pt-5 text-3xl font-semibold">
              Promotions hivernale !
            </h2>
            <div className="relative h-[500px] w-[700px]">
              <Image
                alt="promo"
                src="/../public/promohiver.jpg"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="border border-black flex flex-col items-center justify-between h-[500px] w-[793px]">
            <h2 className="pt-5 text-3xl font-semibold">Offre du moment !</h2>
            <div className="relative h-[500px] w-[700px]">
              <Image
                alt="solde"
                src="/../public/pumapromo.jpg"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
