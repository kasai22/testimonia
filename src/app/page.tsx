import Clients from "@/components/home/clients";
import FeaturesSection from "@/components/home/features";
import HeroSection from "@/components/home/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Clients />
      <FeaturesSection />
    </div>
    
    
  );
}
