
"use client"
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";

export default function Navbar() {
	const router = useTransitionRouter()
	function slideLeft() {
		// Previous page slides out to the left
		document.documentElement.animate(
			[
				{
					opacity: 1,
					transform: "translateX(0)"
				},
				{
					opacity: 0.2,
					transform: "translateX(-100%)"
				}
			],
			{
				duration: 1500,
				easing: "cubic-bezier(0.87,0,0.13,1)",
				fill: "forwards",
				pseudoElement: "::view-transition-old(root)"
			}
		)

		// New page slides in from the right
		document.documentElement.animate(
			[
				{
					clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
				},
				{
					clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
				}
			],
			{
				duration: 1500,
				easing: "cubic-bezier(0.87,0,0.13,1)",
				fill: "forwards",
				pseudoElement: "::view-transition-new(root)"
			}
		)
	}

	return (
		<nav className="fixed bottom-10  left-[50%] -translate-x-[50%] z-50 rounded-3xl flex bg-gray-200 text-black">
			<div className="p-3 rounded-3xl text-black hover:bg-gray-300">
				<div className="text-black">
					<a onClick={(e) => {
						e.preventDefault();
						router.push("/", {
							onTransitionReady: slideLeft
						})

					}} href="/" className="">Home</a>
				</div>
			</div>
			<div className="p-3 rounded-3xl text-black hover:bg-gray-300">
				<a onClick={(e) => {
					e.preventDefault();
					router.push("/work", {
						onTransitionReady: slideLeft
					})

				}} href="/work">Work</a>
			</div>
			<div className="p-3 rounded-3xl text-black hover:bg-gray-300">
				<a onClick={(e) => {
					e.preventDefault();
					router.push("/about", {
						onTransitionReady: slideLeft
					})

				}} href="/about">About</a>
			</div>
		</nav>
	)
}
