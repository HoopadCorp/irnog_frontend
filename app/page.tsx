import ContactUs from "@/components/ContactUs/ContactUs";
import ContentCard from "@/components/ContentCard/ContentCard";
import Gallery from "@/components/Gallery/Gallery";
import HomePage from "@/components/HomePage/HomePage";
import News from "@/components/News/News";
import ProgramCommittee from "@/components/ProgramCommittee/ProgramCommitee";
import Ticket from "@/components/Ticket/Ticket";
import React from "react";

const MainPage: React.FC = () => {
  return (
    <div>
      <HomePage />
      <ContentCard />
      <ProgramCommittee />
      {/* <Ticket /> */}
      <News />
      <Gallery />
      <ContactUs />
    </div>
  );
};

export default MainPage;
