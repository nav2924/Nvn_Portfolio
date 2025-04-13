import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/Navbar";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <Hero />
      <ShowcaseSection />
      <NavBar />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Contact />
    </>
  );
};

export default App
