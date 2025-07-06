"use client"

import { projects } from "@/lib/constants"
import gsap from "gsap"
import { ArrowUpRight } from "lucide-react"
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
		const offsetX = 100
		const offsetY = 300
		const previewWidth = 320

		if (!containerWidth) return
		const maxRight = containerWidth - (previewWidth + offsetX)
		if (e.clientX < maxRight) {
			setCurrentImg(projects[index].img)
			gsap.to(previewRef.current, {
				x: e.clientX + offsetX,
				y: e.clientY - offsetY,
			})
		} else {
			setCurrentImg(projects[index].img)
			gsap.to(previewRef.current, {
				y: e.clientY - offsetY
			})
		}
	}

	function onMouseEnter(e: React.MouseEvent, index: number) {
		const element = refs.current[index]
		const overlay = element?.getElementsByClassName("overlay")
		const linkText = element?.getElementsByClassName("link-text")
		const icon = element?.getElementsByClassName("icon")
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

		if (linkText && linkText[0]) {
			gsap.to(linkText, {
				x: 10,
				color: "#fff",
				duration: .5
			})
		}

		if (icon && icon[0]) {
			gsap.to(icon, {
				x: -10,
				color: "#fff",
				duration: .5
			})
		}
	}
	function onMouseLeave(e: React.MouseEvent, index: number) {
		const element = refs.current[index]
		const overlay = element?.getElementsByClassName("overlay")
		const linkText = element?.getElementsByClassName("link-text")
		const icon = element?.getElementsByClassName("icon")
		if (overlay && overlay[0]) {
			const overlayElement = overlay[0]
			gsap.fromTo(overlayElement, {
				scaleY: 1,
				transformOrigin: "bottom"
			}, {
				background: "#fff",
				scaleY: 0,
				duration: .5,
				ease: "power2.out",
			})
		}
		if (linkText && linkText[0]) {
			gsap.to(linkText, {
				x: 0,
				color: "#000",
				duration: .5
			})
		}
		if (icon && icon[0]) {
			gsap.to(icon, {
				x: 0,
				color: "#000",
				duration: .5
			})
		}
	}

	return (
		<div className="px-10 w-full h-full">
			<h1 className="text-7xl font-normal mb-5">More Projects</h1>
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
						className="px-5 py-10 flex justify-between relative border-b-[1px] border-gray-300 bg-white">
						<div id={`${i}`} className="overlay h-full w-full left-0 top-0 absolute   mix-blend-difference" />
						<h1 className="link-text text-2xl text-black">{project.title}</h1>
						<span className="icon"><ArrowUpRight /></span>
					</div>
				))
				}
			</div >

		</div>
	)
}
