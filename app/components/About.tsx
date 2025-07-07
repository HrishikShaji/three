import { avatarImg } from "@/lib/constants";
import Image from "next/image";

export default function About() {
	return (
		<section>
			<div className="flex">
				<div className="flex flex-col gap-5 flex-1">
					<h1 className="text-9xl font-medium">ABOUT</h1>
					<p className="font-medium w-[50%]">
						{`I'm a 25-year-old front-end developer with a strong focus on design.I specialize in front-end, micro-interactions, and animations. Passionate about crafting seamless user experiences.`}
					</p>
				</div>
				<div className="flex-1 h-[90vh]">
					<Image src={avatarImg} alt="" height={1000} width={1000} className="h-full w-full object-cover" />
				</div>
			</div>
			<div className="flex flex-col gap-10 my-40">
				<h1 className="text-8xl font-medium">What I do</h1>
				<p className="text-2xl font-medium w-[30%]">
					I primarily work with custom TypeScript and JavaScript, having developed a well-structured and maintainable front-end architecture over the years. I also have experience with frameworks like Vue and React. I strive to make the most of CSS for styling, layout and even for animations. I also mainly rely on GSAP to create smooth and dynamic interactions.
				</p>
			</div>
		</section>
	)
}
