"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import { useRef, useState } from "react"

const images = [
	"https://images.pexels.com/photos/25626437/pexels-photo-25626437.jpeg",
	"https://images.pexels.com/photos/25626434/pexels-photo-25626434.jpeg",
	"https://images.pexels.com/photos/25626431/pexels-photo-25626431.jpeg",
	"https://images.pexels.com/photos/25626449/pexels-photo-25626449.jpeg",
	"https://images.pexels.com/photos/25626448/pexels-photo-25626448.jpeg",
	"https://images.pexels.com/photos/25626441/pexels-photo-25626441.jpeg",
	"https://images.pexels.com/photos/25626438/pexels-photo-25626438.jpeg"
]

export default function Gallery() {
	const card1 = useRef<HTMLDivElement>(null)
	const card2 = useRef<HTMLDivElement>(null)
	const card3 = useRef<HTMLDivElement>(null)
	const topContainer = useRef<HTMLDivElement>(null)
	const bottomContainer = useRef<HTMLDivElement>(null)

	useGSAP(() => {

		const timeline = gsap.timeline({ delay: .75 })

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
		<div className="w-full  p-10 bg-gray-100 h-screen">
			<div className="w-full h-full flex flex-col gap-5  ">
				<div ref={topContainer} className="h-full flex flex-2/3 gap-5 w-full">
					<div ref={card1} className="h-full flex-2/3 w-full ">
						<Image
							src={images[0]}
							alt=""
							fill
							className=" object-cover"
						/>
					</div>
					<div className="flex flex-1/3 flex-col gap-5 h-full w-full">
						<div ref={card2} className="h-[50%] w-full ">
							<Image
								src={images[1]}
								alt=""
								fill
								className=" object-cover"
							/>

						</div>
						<div ref={card3} className="h-[50%] w-full ">
							<Image
								src={images[2]}
								alt=""
								fill
								className=" object-cover"
							/>

						</div>
					</div>
				</div>
				<div ref={bottomContainer} className="flex-1/3 flex gap-5">
					<div className="flex-1/4  bg-purple-500">
						<Image
							src={images[3]}
							alt=""
							height={1000}
							width={1000}
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="flex-1/4 bg-purple-500">
						<Image
							src={images[4]}
							alt=""
							height={1000}
							width={1000}
							className="h-full w-full object-cover"
						/>

					</div>
					<div className="flex-1/4  bg-purple-500">
						<Image
							src={images[5]}
							alt=""
							height={1000}
							width={1000}
							className="h-full w-full object-cover"
						/>

					</div>
					<div className="flex-1/4 bg-purple-500">
						<Image
							src={images[0]}
							alt=""
							height={1000}
							width={1000}
							className="h-full w-full object-cover"
						/>

					</div>
				</div>
			</div>
		</div>
	)
}
