import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Skills from "@/components/Skills";
import BuildProcess from "@/components/BuildProcess";
import Playground from "@/components/Playground";
import HireMe from "@/components/HireMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      <BuildProcess />
      <Playground />
      <HireMe />
      <Contact />
      <Footer />
    </main>
  );
}