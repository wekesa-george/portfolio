"use client"
import Nav from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col relative">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
