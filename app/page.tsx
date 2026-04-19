import CinematicFooter from "@/components/layout/CinematicFooter";
import CinematicNavbar from "@/components/layout/CinematicNavbar";
import HeroCinematic from "@/components/hero/HeroCinematic";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import Flipbook from "@/components/sections/Flipbook";
import Partners from "@/components/sections/Partners";
import Pricing from "@/components/sections/Pricing";
import ScheduleTabs from "@/components/sections/ScheduleTabs";
import SpeakersGrid from "@/components/sections/SpeakersGrid";
import WhyAccordion from "@/components/sections/WhyAccordion";

export default function Home() {
  return (
    <>
      <CinematicNavbar />
      <HeroCinematic />
      <WhyAccordion />
      <Partners />
      <ScheduleTabs />
      <SpeakersGrid />
      <Flipbook />
      <Pricing />
      <Faq />
      <FinalCta />
      <CinematicFooter />
    </>
  );
}
