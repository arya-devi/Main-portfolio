import React, { useContext, useState } from "react";
import HelloSection from "../pages/HomePage/components/HelloSection";
import AboutMeSection from "../pages/HomePage/components/AboutMeSection";
import { useScrollHandler } from "../hooks/useScrollHandler";
import ContactMeSection from "../pages/HomePage/components/ContactMeSection";

export const SectionsContext = React.createContext(null);

export const useSections = () => {
  return useContext(SectionsContext);
};

export const SectionsProvider = ({ children }) => {
  const sections = {
    hello: <HelloSection />,
    "about-me": <AboutMeSection />,
    "contact-me": <ContactMeSection />,
  };

  const firstSectionId = Object.keys(sections)[0];
  const [currentSection, setCurrentSection] = useState(firstSectionId);

  const value = {
    currentSection,
    setCurrentSection,
    sections,
  };

  useScrollHandler(currentSection, setCurrentSection, sections);

  return <SectionsContext.Provider value={value} children={children} />;
};
