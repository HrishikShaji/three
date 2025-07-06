"use client"

import { projects } from "@/lib/constants"
import gsap from "gsap"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"

export default function Projects() {
	const refs = useRef<(HTMLDivElement | null)[]>([])
	const previewRef = useRef<HTMLDivElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const [currentImg, setCurrentImg] = useState("")



	function onMouseMove(e: React.MouseEvent, index: number) {
		console.log("mouse over", containerRef.current?.clientWidth, e.clientX)
		const containerWidth = containerRef.current?.clientWidth
		if (!containerWidth) return
		const maxRight = containerWidth - 260
		if (e.clientX < maxRight) {
			setCurrentImg(projects[index].img)
			gsap.to(previewRef.current, {
				x: e.clientX + 100,
				y: e.clientY - 50
			})
		} else {
			setCurrentImg(projects[index].img)
			gsap.to(previewRef.current, {
				y: e.clientY - 50
			})
		}
	}

	function onMouseEnter(e: React.MouseEvent, index: number) {
		const element = refs.current[index]
		const overlay = element?.getElementsByClassName("overlay")
		if (overlay && overlay[0]) {
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
		<div className="w-full h-full relative" ref={containerRef}>
			{currentImg ?
				<div
					ref={previewRef}
					className="size-80 border-black border-8 pointer-events-none z-40  absolute"
				>
					<Image src={currentImg} fill className="object-cover" alt="" />
				</div> : null}
			{projects.map((project, i) => (
				<div
					ref={(el) => {
						refs.current[i] = el
					}}
					onMouseLeave={(e) => onMouseLeave(e, i)}
					onMouseEnter={(e) => onMouseEnter(e, i)}
					onMouseMove={(e) => onMouseMove(e, i)}
					key={i}
					className="p-5 relative border-b-[1px] border-gray-300 bg-white">
					<div id={`${i}`} className="overlay h-full w-full left-0 top-0 absolute   mix-blend-difference" />
					<h1 className="text-2xl text-black">{project.title}</h1>
				</div>
			))
			}
		</div >
	)
}
