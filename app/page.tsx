import Distributor from "@/components/section/distributor";
import Flavor from "@/components/section/flavor";
import Memories from "@/components/section/memories";

export default function Home() {
  return (
    <div className="">
      <p>Work in progress</p>
      <section className="py-52 space-y-14 lg:space-y-24">
        <Flavor />
        <div></div>
        <Memories />
      </section>
      <Distributor />
    </div>
  );
}
