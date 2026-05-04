import TopFeatures from "@/components/TopFeatures";
import Banner from "../components/Banner";
import { baseUrl } from "@/constants/baseUrl";

export default function Home() {
  console.log(baseUrl);
  return (
    <div>
      <Banner></Banner>
      <TopFeatures></TopFeatures>
    </div>
  );
}
