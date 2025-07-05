"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from "react"


export default function Gallery() {
	const card1 = useRef<HTMLDivElement>(null)
	const card2 = useRef<HTMLDivElement>(null)
	const card3 = useRef<HTMLDivElement>(null)
	const topContainer = useRef<HTMLDivElement>(null)
	const bottomContainer = useRef<HTMLDivElement>(null)

	useGSAP(() => {

		const timeline = gsap.timeline()

		{/* FIRST ANIMATION*/ }

		gsap.set(topContainer.current, {
			scaleY: "150%",
			transformOrigin: "top"
		})

		gsap.set(bottomContainer.current, {
			scaleY: "0%",
			transformOrigin: 'bottom'
		})

		timeline.fromTo(card1.current, {
			scaleX: "150%",
		}, {
			scaleX: "100%",
			transformOrigin: "left"
		}, 0).fromTo(card2.current, {
			scaleX: "0%",
		}, {
			scaleX: "100%",
			transformOrigin: "right"
		}, 0).fromTo(card3.current, {
			scaleX: "0%",
		}, {
			scaleX: "100%",
			transformOrigin: "right"
		}, 0).to(topContainer.current, {
			scaleY: "100%"
		}, 1).to(bottomContainer.current, {
			scaleY: '100%',
		}, 1)

	}, {})

	return (
		<div className="w-full h-full p-10 bg-gray-100 min-h-screen">
			<div className="w-full flex flex-col gap-5 h-full ">
				<div ref={topContainer} className="flex flex-2/3 gap-5 w-full">
					<div ref={card1} className="h-full flex-2/3 w-full bg-green-500"></div>
					<div className="flex flex-1/3 flex-col gap-5 h-full w-full">
						<div ref={card2} className="h-[50%] w-full bg-red-500"></div>
						<div ref={card3} className="h-[50%] w-full bg-red-500"></div>
					</div>
				</div>
				<div ref={bottomContainer} className="flex-1/3 flex gap-5">
					<div className="flex-1/4 h-full bg-purple-500"></div>
					<div className="flex-1/4 h-full bg-purple-500"></div>
					<div className="flex-1/4 h-full bg-purple-500"></div>
					<div className="flex-1/4 h-full bg-purple-500"></div>
				</div>
			</div>
		</div>
	)
}
