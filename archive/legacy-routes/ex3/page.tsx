import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import HeroWrapper from "@/components/hero/HeroWrapper";
import PhilosophyManifesto from "@/components/variations/cinematic/PhilosophyManifesto";
import FullScreenHooks from "@/components/variations/cinematic/FullScreenHooks";
import CardDealCredentials from "@/components/variations/cinematic/CardDealCredentials";
import ParallaxAudience from "@/components/variations/cinematic/ParallaxAudience";
import CinematicSpeakers from "@/components/variations/cinematic/CinematicSpeakers";
import CinematicSchedule from "@/components/variations/cinematic/CinematicSchedule";
import ScrollProgressTimeline from "@/components/variations/cinematic/ScrollProgressTimeline";
import SpreadPricing from "@/components/variations/cinematic/SpreadPricing";
import FullScreenTestimonials from "@/components/variations/cinematic/FullScreenTestimonials";
import CurtainFaq from "@/components/variations/cinematic/CurtainFaq";
import ParallaxCTA from "@/components/variations/cinematic/ParallaxCTA";

export default function Ex3Page() {
  return (
    <>
      <Navbar />
      <HeroWrapper />
      <PhilosophyManifesto />
      <FullScreenHooks />
      <CardDealCredentials />
      <ParallaxAudience />
      <CinematicSpeakers />
      <CinematicSchedule />
      <ScrollProgressTimeline />
      <SpreadPricing />
      <FullScreenTestimonials />
      <CurtainFaq />
      <ParallaxCTA />
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
