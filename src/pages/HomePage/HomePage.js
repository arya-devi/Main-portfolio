import React from "react";
import { SectionsProvider } from "../../contexts/SectionsContext";
import HomePageNavigation from "./components/HomePageNavigation";
import HomeSectionsContainer from "./components/HomeSectionsContainer";

export default function HomePage() {
  return (
    <SectionsProvider>
      <div className="home-page">
        <HomePageNavigation />
        <HomeSectionsContainer />
      </div>
    </SectionsProvider>
  );
}
