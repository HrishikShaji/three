"use client"

import { projects } from "@/lib/constants"
import gsap from "gsap"
import { useRef } from "react"

export default function Projects() {
	const refs = useRef<(HTMLDivElement | null)[]>([])
	function onMouseEnter(e: React.MouseEvent, index: number) {
		const element = refs.current[index]
		const overlay = element?.getElementsByClassName("overlay")
		if (overlay && overlay[0]) {
			console.log("overlay", overlay[0])
			const overlayElement = overlay[0]
			gsap.fromTo(overlayElement, {
				scaleY: 0,
				transformOrigin: "bottom"
			}, {
				background: "#fff",
				scaleY: 1,
				duration: .5,
				ease: "power2.out"
			})
		}
	}
	function onMouseLeave(e: React.MouseEvent, index: number) {
		const element = refs.current[index]
		const overlay = element?.getElementsByClassName("overlay")
		if (overlay && overlay[0]) {
			console.log("overlay", overlay[0])
			const overlayElement = overlay[0]
			gsap.fromTo(overlayElement, {
				scaleY: 1,
				transformOrigin: "bottom"
			}, {
				background: "#fff",
				scaleY: 0,
				duration: .5,
				ease: "power2.out"
			})
		}
	}

	return (
		<div className="w-full h-full">
			{projects.map((project, i) => (
				<div
					ref={(el) => {
						refs.current.push(el)
					}}
					onMouseLeave={(e) => onMouseLeave(e, i)}
					onMouseEnter={(e) => onMouseEnter(e, i)}
					key={i}
					className="p-5 relative border-b-[1px] border-gray-300 bg-white">
					<div id={`${i}`} className="overlay h-full w-full left-0 top-0 absolute   mix-blend-difference" />
					<h1 className="text-2xl text-black">{project.title}</h1>
				</div>
			))}
		</div>
	)
}
