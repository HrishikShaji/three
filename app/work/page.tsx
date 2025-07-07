"use client"
import Gallery from "../components/Gallery";
import LearnMore from "../components/LearnMore";
import Overview from "../components/Overview";
import Projects from "../components/Projects";
import ReactLenis from "@studio-freight/react-lenis";

export default function Page() {
  return (
    <ReactLenis root>
      <div className="">
        <Gallery />
        <Overview />
        <Projects />
        <LearnMore />

      </div>

    </ReactLenis>
  )
}
