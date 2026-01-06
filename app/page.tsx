import FlavorCarousel from "@/components/flavor-carousel";
import Distributor from "@/components/section/distributor";
import Flavor from "@/components/section/flavor";
import Header from "@/components/section/header";
import Memories from "@/components/section/memories";

export default function Home() {
  return (
    <div className="">
      <Header />
      <FlavorCarousel />
      <section className="py-20 lg:py-30 space-y-14 lg:space-y-24">
        <Flavor />
        <div></div>
        <Memories />
      </section>
      <Distributor />
    </div>
  );
}
