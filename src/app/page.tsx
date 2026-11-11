import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Infrastructure from "@/components/Infrastructure";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Infrastructure />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
