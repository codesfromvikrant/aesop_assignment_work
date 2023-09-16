import Link from "next/link";
import HeroSection from "./components/HeroSection";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Slider>
        <div className="flex justify-start items-start flex-col h-full text-primary">
          <p className="text-sm font-semibold mb-4">Fragrance</p>
          <h3 className="text-3xl">Our Personal Scents</h3>
          <p className="text-sm my-5">Unorthodox, evocative, and refined, Aesop fragrances are sensory bridges to memory and connection points to those around us.</p>
          <Link href="#">See All Fragrance</Link>
        </div>
      </Slider>
    </main>
  )
}
