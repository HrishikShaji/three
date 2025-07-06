"use client"

import { googleImages } from '@/lib/constants';
import { useState, useEffect } from 'react';

export default function OverviewSlider() {
	const [currentRotation, setCurrentRotation] = useState(0);


	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentRotation(prev => prev + 60); // 360/10 = 36 degrees per step
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	const quantity = 6;
	const radius = 300; // Adjust this to make circle bigger/smaller

	return (
		<div className="relative  h-80 w-[900px] " style={{ perspective: '1000px' }}>
			<div
				className="absolute inset-0 transition-transform duration-1000 ease-in-out"
				style={{
					transformStyle: 'preserve-3d',
					transform: `rotateY(${currentRotation}deg)`
				}}
			>
				{googleImages.slice(0, 6).map((image, index) => {
					const angle = (360 / quantity) * index;
					return (
						<div
							key={index}
							className="absolute w-72 h-64 rounded-lg overflow-hidden shadow-2xl"
							style={{
								transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
								left: '50%',
								top: '50%',
								marginLeft: '-144px', // half of width (w-48 = 192px)
								marginTop: '-128px'  // half of height (h-64 = 256px)
							}}
						>
							<img
								src={image}
								alt={`Slide ${index + 1}`}
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
						</div>
					);
				})}
			</div>
		</div>

	);
}
