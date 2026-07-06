import BrandsSection from "@/components/BrandsSection";
import EsportsHero from "@/components/EsportsHero";
import GamingFooter from "@/components/GamingFooter";
import GamingHomeSection from "@/components/GamingHomeSection";
import GamingMomentsSection from "@/components/GamingMomentsSection";
import GamingNewsSection from "@/components/GamingNewsSection";
import GamingStudioSection from "@/components/GamingStudioSection";
import OrganizerSection from "@/components/OrganizerSection";
import TopStreamersSection from "@/components/TopStreamersSection";
import UpcomingMatchesSection from "@/components/UpcomingMatchesSection";



export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
       <EsportsHero/>
       <GamingHomeSection/>
       <GamingStudioSection/>
       <TopStreamersSection/>
       <UpcomingMatchesSection/>
       <OrganizerSection/>
       <GamingMomentsSection/>
       <BrandsSection/>
       <GamingNewsSection/>
       <GamingFooter/>
    </div>
  );
}
