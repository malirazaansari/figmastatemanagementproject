import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SidebarFilter from "./components/SidebarFilter";
import CourseList from "./components/CourseList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <div className="flex flex-grow">
        <SidebarFilter />
        <CourseList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
