"use client"

import { images } from '@/lib/constants';
import { useState, useEffect } from 'react';

export default function Slider3D() {
	const [currentRotation, setCurrentRotation] = useState(0);


	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentRotation(prev => prev + 36); // 360/10 = 36 degrees per step
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	const quantity = 7;
	const radius = 300; // Adjust this to make circle bigger/smaller

	return (
		<div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
			<div className="relative w-64 h-80" style={{ perspective: '1000px' }}>
				<div
					className="absolute inset-0 transition-transform duration-1000 ease-in-out"
					style={{
						transformStyle: 'preserve-3d',
						transform: `rotateY(${currentRotation}deg)`
					}}
				>
					{images.map((image, index) => {
						const angle = (360 / quantity) * index;
						return (
							<div
								key={index}
								className="absolute w-48 h-64 rounded-lg overflow-hidden shadow-2xl"
								style={{
									transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
									left: '50%',
									top: '50%',
									marginLeft: '-96px', // half of width (w-48 = 192px)
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

			{/* Controls */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
				<button
					onClick={() => setCurrentRotation(prev => prev - 36)}
					className="px-4 py-2 bg-white/20 text-white rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors"
				>
					← Previous
				</button>
				<button
					onClick={() => setCurrentRotation(prev => prev + 36)}
					className="px-4 py-2 bg-white/20 text-white rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors"
				>
					Next →
				</button>
			</div>
		</div>
	);
}
