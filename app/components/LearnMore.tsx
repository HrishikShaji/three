import { avatarImg } from "@/lib/constants";
import Image from "next/image";

export default function LearnMore() {
	return (
		<div className="px-5 mt-40">
			<div className="flex justify-between">
				<h1 className="text-9xl ">CODING</h1>
				<h1 className="text-9xl ">SINCE</h1>
				<h1 className="text-9xl ">2020</h1>
			</div>
			<div className="flex items-center flex-col gap-20 mt-60 h-[500px] overflow-hidden">
				<h1 className="text-6xl font-medium">Learn more about me</h1>
				<div className="-rotate-12 h-[500px] w-[400px]">
					<Image src={avatarImg} height={1000} width={1000} className="h-full w-full object-cover" alt="" />
				</div>
			</div>
		</div>
	)
}
