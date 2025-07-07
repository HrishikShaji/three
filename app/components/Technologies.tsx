"use client"

import { webDevSkills } from "@/lib/constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Image from "next/image"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function Technologies() {
	const cardRefs = useRef<(HTMLDivElement | null)[]>([])
	const containerRef = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		gsap.fromTo(cardRefs.current, {
			scale: 0,
			transformOrigin: "center"
		}, {
			scrollTrigger: {
				trigger: containerRef.current,
				scrub: 2,
				start: "top bottom",
				end: "bottom bottom"
			},
			scale: 1,
			stagger: .05
		})
	}, {})

	return (
		<div ref={containerRef} className="w-full h-full grid grid-cols-4 gap-5">
			{webDevSkills.map((skill, i) => (
				<div ref={(el) => {
					cardRefs.current[i] = el
				}}
					key={i} className="relative border-4 border-black h-[200px] flex justify-center items-center">
					<h1 className="text-2xl font-medium text-white">{skill.name}</h1>
					<Image className="h-full w-full object-cover absolute -z-10" alt="" src={skill.image} height={1000} width={1000} />
				</div>
			))}
		</div>
	)
}
