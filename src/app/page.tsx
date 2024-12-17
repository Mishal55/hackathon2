import Font from "@/components/Font";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Topnavbar } from "@/components/Topnavbar";
import Image from "next/image";
import Product from "./Products/page";
import Sell from "./Products/Sell";

export default function Home() {
  return (
   <div>
<Topnavbar />
<Header />
<Hero/>
<Font />
<Product />
<Sell/>
   </div>

  );
}
