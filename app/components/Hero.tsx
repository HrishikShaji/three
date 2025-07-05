"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
	const sectionOne = useRef<HTMLDivElement>(null)
	const sectionTwo = useRef<HTMLDivElement>(null)
	const titleOne = useRef<HTMLHeadingElement>(null)
	const titleTwo = useRef<HTMLHeadingElement>(null)
	const titleThree = useRef<HTMLHeadingElement>(null)

	useGSAP(() => {

		const tl = gsap.timeline()
		tl.fromTo(titleOne.current, {
			opacity: 0,
			scaleX: "80%"
		}, {
			ease: "power1",
			transformOrigin: "left",
			opacity: 1,
			scaleX: "100%",
			duration: .4
		}).fromTo(titleTwo.current, {
			opacity: 0,
			scaleX: "80%"
		}, {
			ease: "power1",
			opacity: 1,
			transformOrigin: "center",
			scaleX: "100%",
			duration: .4

		}).fromTo(titleThree.current, {
			opacity: 0,
			scaleX: "80%"
		}, {
			ease: "power1",
			opacity: 1,
			transformOrigin: "right",
			scaleX: "100%",
			duration: .4

		}).to(sectionOne.current, {
			xPercent: -100,
			duration: 2,
			ease: "power4.inOut"
		}, 1).to(sectionTwo.current, {
			xPercent: -100,
			duration: 2,
			ease: "power4.inOut"
		}, 1)


	}, {})

	return (
		<div className="flex w-[100vw]  overflow-hidden">
			<div ref={sectionOne} className="h-screen shrink-0 w-[100vw] relative bg-black">
				<h1 ref={titleOne} className="text-9xl text-white top-5 left-5 absolute">CREATIVE</h1>
				<h1 ref={titleTwo} className="text-9xl  text-white top-[50%] left-[50%] -translate-[50%] absolute">WEB</h1>
				<h1 ref={titleThree} className="text-9xl  text-white bottom-5 right-5 absolute">DEVELOPER</h1>

			</div>
			<div ref={sectionTwo} className="h-screen shrink-0 w-[100vw] p-5">
				<h1 className="text-[230px] leading-[200px] m-0 tracking-tighter font-semibold px-0">HRISHIK SHAJI </h1>
				<div className="flex h-[50vh] pl-4">
					<div className="flex-1  h-full flex flex-col gap-2">
						<Image src="https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg"
							height={1000} width={1000} alt="image" className="h-full w-full object-cover" />
						<h1 className="text-xl font-medium">Bringing designs to life with pixel-perfect precision and smooth animations.</h1>
					</div>
					<div className="flex-1 h-full flex justify-center items-center">
						<div className="flex flex-col gap-4 w-[50%]">
							<p>I'm a 25 years-old Full Stack developer who cares about design. My focus is on precise integration and crafting innovative interactions.</p>
							<div className="flex gap-2">
								<button className="rounded-3xl font-medium p-3 border-[1px] border-black">See my projects</button>
								<button className="rounded-3xl font-medium p-3 border-[1px] border-black">Quick overview</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

{/*

*/}
