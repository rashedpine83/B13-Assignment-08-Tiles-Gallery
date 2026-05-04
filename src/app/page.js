import Image from "next/image";
import Banner from "../components/Banner";
import TopFeatures from "@/components/TopFeatures";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopFeatures></TopFeatures>
    </div>
  );
}
