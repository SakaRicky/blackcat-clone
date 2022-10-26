import React, { useState } from "react";
import char_background from "../../../assets/images/char_background.png";

export const Character = ({ character, showSelectedCharacter }) => {
	const [hoveredImage, setHoveredImage] = useState(false);

	return (
		<div
			className="relative flex justify-center overflow-hidden cursor-pointer py-[4px]"
			onMouseEnter={() => setHoveredImage(true)}
			onMouseLeave={() => setHoveredImage(false)}
			onClick={() => showSelectedCharacter(character)}
		>
			{/*relative h-[350px] w-[95%] */}
			<div className="relative h-[350px] w-[95%] overflow-hidden">
				<div
					style={{
						backgroundImage: `url(${char_background})`,
						width: "100%",
						height: "100%",
						backgroundPosition: "top",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						overflow: "hidden",
					}}
				>
					<img
						src={character.image}
						alt={character.name}
						style={{
							filter: hoveredImage ? "grayscale(0%)" : "grayscale(100%)",
							transform: hoveredImage
								? "scale(1.02) translate(5px, -5px)"
								: "scale(1)  translate(0, 0)",
							transition: "all 300ms ease-in",
							// width: "250px",
							height: "950px",
							objectFit: "cover",
						}}
					/>
					<div className="absolute bottom-[80px] -ml-24 h-10 w-80 bg-gradient-to-t rotate-[20deg] from-[#eeeeee] via-red-600 to-transparent"></div>
				</div>
				<div className="h-[15%] z-10 bg-[#1e1e1e] w-full absolute bottom-0 left-0"></div>
			</div>
			<div className="w-[300px] h-[23%] z-10 -ml-8 absolute bottom-0 -left-2 bg-[#151515] rotate-[20deg]"></div>
			<div className="absolute z-10 left-2 bottom-6">
				<div className="w-16 h-16 border-gray-800 rounded-full p-4 font-black border-[3px] animate-spin-slow border-t-3 border-t-red-700"></div>
				<span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 text-3xl font-bold">
					{character.category[0]}
				</span>
			</div>
			<div className="absolute z-10 right-2 bottom-4 text-right">
				<p className="text-sm text-red-500 leading-[2px] uppercase font-bold">
					{character.category}
				</p>
				<p className="text-2xl text-gray-300">{character.name}</p>
			</div>
		</div>
	);
};
