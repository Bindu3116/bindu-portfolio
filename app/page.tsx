import Hero from "@/components/Hero";
import Section from "@/components/Section";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Publications from "@/components/sections/Publications";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-16 pt-28">
      <Hero />
      <div className="mt-14 space-y-16">
        <Section id="about" title="About">
          <About />
        </Section>
        <Section id="projects" title="Featured Projects">
          <Projects />
        </Section>
        <Section id="publications" title="Publications">
          <Publications />
        </Section>
        <Section id="skills" title="Skills">
          <Skills />
        </Section>
        <Section id="experience" title="Experience">
          <Experience />
        </Section>
        <Section id="education" title="Education">
          <Education />
        </Section>
        <Section id="blog" title="Writing">
          <BlogPreview />
        </Section>
        <Section id="contact" title="Contact">
          <Contact />
        </Section>
      </div>
      <Footer />
    </main>
  );
}
