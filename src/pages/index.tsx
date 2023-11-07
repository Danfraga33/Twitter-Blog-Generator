import Features from "../components/LandingPage/Features";
import Header from "../components/LandingPage/Header";
import Hero from "../components/LandingPage/Hero";
import React from "react"; // eslint-disable-line

function Index() {
  return (
    <div className="px-10 py-1">
      <Header />
      <Hero />
      <Features />
    </div>
  );
}
export default Index;
