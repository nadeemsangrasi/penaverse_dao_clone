import Footer from "@/components/layouts/Footer";
import CoursesSection from "@/components/sections/CoursesSection";
import HeroSection from "@/components/sections/HeroSection";
import OutCome from "@/components/sections/OutCome";
import SpecializedTrackPart1 from "@/components/sections/SpecializedTrackPart1";
import SpecializedTrackPart2 from "@/components/sections/SpecializedTrackPart2";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CoursesSection />
      <SpecializedTrackPart1 />
      <SpecializedTrackPart2 />
      <OutCome />
    </div>
  );
}
