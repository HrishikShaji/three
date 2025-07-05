import Image from "next/image";

export default function Hero() {
	return (
		<div className="h-screen w-full p-5">
			<h1 className="text-[230px] leading-[200px] m-0 tracking-tighter font-semibold px-0">HRISHIK SHAJI </h1>
			<div className="flex h-[50vh] pl-4">
				<div className="flex-1  h-full flex flex-col gap-2">
					<Image src="https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg"
						height={1000} width={1000} alt="image" className="h-full w-full object-cover" />
					<h1 className="text-xl font-medium">Bringing designs to life with pixel-perfect precision and smooth animations.</h1>
				</div>
				<div className="flex-1 h-full flex justify-center items-center">
					<div className="flex flex-col gap-4 w-[50%]">
						<p>I'm a 32 years-old French front-end developer who cares about design. My focus is on precise integration and crafting innovative interactions.</p>
						<div className="flex gap-2">
							<button className="rounded-3xl font-medium p-3 border-[1px] border-black">See my projects</button>
							<button className="rounded-3xl font-medium p-3 border-[1px] border-black">Quick overview</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
