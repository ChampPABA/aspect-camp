import RevisedNavbar from "@/components/layout/RevisedNavbar";
import RevisedFooter from "@/components/layout/RevisedFooter";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import GradientHero from "@/components/variations/revised/GradientHero";
import AboutAccordion from "@/components/variations/revised/AboutAccordion";
import TrustBarCredentials from "@/components/variations/revised/TrustBarCredentials";
import SegmentedSchedule from "@/components/variations/revised/SegmentedSchedule";
import GlassSpeakers from "@/components/variations/revised/GlassSpeakers";
import PremiumPricing from "@/components/variations/revised/PremiumPricing";
import GridFaq from "@/components/variations/revised/GridFaq";

export default function Ex4Page() {
  return (
    <>
      <RevisedNavbar />
      <GradientHero />
      <AboutAccordion />
      <TrustBarCredentials />
      <SegmentedSchedule />
      <GlassSpeakers />
      <PremiumPricing />
      <GridFaq />
      <RevisedFooter />
      <StickyMobileCTA />
    </>
  );
}
