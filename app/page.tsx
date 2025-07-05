"use client"

import Image from "next/image";
import ReactLenis from "@studio-freight/react-lenis";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <ReactLenis root>
      <Hero />
    </ReactLenis>
  );
}
