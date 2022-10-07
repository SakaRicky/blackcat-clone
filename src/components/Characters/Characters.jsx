import React from "react";
import { FingerPrintSVG } from "../../assets/SVGs/FingerPrintSVG";
import { Character } from "./Character";
import Kikuya from "../../assets/images/kikuya.png";
import Jasmine from "../../assets/images/Jasmine.png";
import Azelea from "../../assets/images/Azelea.png";
import Sachiko from "../../assets/images/Sachiko.png";
import Ameonna from "../../assets/images/Ameonna.png";
import Naomi from "../../assets/images/Naomi.png";

export const Characters = () => {
	const characters = [
		{ name: "Kikuya", category: "Dealer", image: Kikuya },
		{ name: "Jasmine", category: "Dealer", image: Jasmine },
		{ name: "Azelea", category: "Player", image: Azelea },
		{ name: "Sachiko", category: "Player", image: Sachiko },
		{ name: "Ameona", category: "Player", image: Ameonna },
		{ name: "Naomi", category: "Player", image: Naomi },
	];
	return (
		<div className="relative">
			<div className="absolute -top-6">
				<div className="absolute -top-8 -left-12">
					<FingerPrintSVG classes="h-20 w-20 text-red-500" />
				</div>
				<h1 className="relative z-10 text-5xl font-black text-gray-300 italic">
					CHARACTERS
				</h1>
				<div className="absolute -top-4 left-0 h-12 w-[600px] opacity-20 bg-gradient-to-r from-red-600 to-transparent"></div>
			</div>
			<div className="grid grid-cols-6 gap-2 pt-20">
				{characters.map(c => (
					<Character
						key={c.image}
						character={{ name: c.name, category: c.category, image: c.image }}
					/>
				))}
			</div>
		</div>
	);
};
