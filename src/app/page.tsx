import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Training } from "@/components/Training";
import { Schedule } from "@/components/Schedule";
import { Pricing } from "@/components/Pricing";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Training />
      </Reveal>
      <Reveal>
        <Schedule />
      </Reveal>
      <Reveal>
        <Pricing />
      </Reveal>
      <Reveal>
        <Gallery />
      </Reveal>
      <Reveal>
        <Location />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </main>
  );
}
