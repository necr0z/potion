import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import Footer from "./_components/footer";

const MarketingPage = () => {
  return (
    // i need to dark mode here instead of layout.tsx. dk why

    // glen chen from 3 weeks into the future. good job bro you fixed it before
    // the creator himself knew nice la smileyface
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 ">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
