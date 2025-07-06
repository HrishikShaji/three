import OverviewSlider from "./OverviewSlider";

export default function Overview() {
	return (
		<div className="flex justify-between w-full items-center h-screen overflow-hidden">
			<div className="flex flex-col items-start gap-3 pl-10">
				<h1 className="text-7xl font-medium">Overview</h1>
				<p className="text-xl font-medium">Short on time? Explore a curated selection of my<br /> work with videos and live links</p>
				<button className="rounded-3xl font-medium p-3 border-[1px] border-black">work overview</button>
			</div>

			<OverviewSlider />
		</div>

	)
}
