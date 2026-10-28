import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Cursor } from '@/components/ui/Cursor';
import { Experience } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { Navbar } from '@/components/ui/Navbar';
import { Preloader } from '@/components/ui/Preloader';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { SmoothScroll } from '@/components/ui/SmoothScroll';

export default function Home() {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <div className="grain" aria-hidden />
    </>
  );
}
