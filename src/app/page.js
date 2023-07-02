import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "@/components";
import GithubCalendar from "@/components/GithubCalendar";

export default function Home() {
  return (
    <main className="w-full">
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="">
          <About />
          <Experience />
          <Tech />
          <GithubCalendar />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}
