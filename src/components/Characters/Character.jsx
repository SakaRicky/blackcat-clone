import React, { useState } from "react";
import char_background from "../../assets/images/char_background.png";

export const Character = ({ character, showSelectedCharacter }) => {
	const [hoveredImage, setHoveredImage] = useState(false);

	return (
		<div
			className="relative overflow-hidden flex justify-center cursor-pointer"
			onMouseEnter={() => setHoveredImage(true)}
			onMouseLeave={() => setHoveredImage(false)}
			onClick={() => showSelectedCharacter(character)}
		>
			<div className="relative h-[350px] w-[95%] overflow-hidden">
				<div
					style={{
						backgroundImage: `url(${char_background})`,
						width: "100%",
						height: "950px",
						backgroundPosition: "top",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				>
					<div
						style={{
							backgroundImage: `url(${character.image})`,
							width: "100%",
							height: "950px",
							backgroundPosition: "top",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							filter: hoveredImage ? "grayscale(0%)" : "grayscale(100%)",
							transform: hoveredImage
								? "scale(1.02) translate(5px, -5px)"
								: "scale(1)  translate(0, 0)",
							transition: "all 300ms ease-in",
						}}
					></div>
				</div>

				<div className="h-[15%] z-10 bg-[#151515] w-full absolute bottom-0 left-0"></div>
			</div>
			<div className="w-[200px] z-10 h-[20%] absolute bottom-4 -left-2 bg-[#151515] rotate-12 shadow"></div>
			<div className="absolute z-10 left-2 bottom-6 w-16 h-16 text-3xl text-gray-800 border-[3px] border-gray-800 rounded-full p-4 font-black flex items-center justify-center">
				{character.category[0]}
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
