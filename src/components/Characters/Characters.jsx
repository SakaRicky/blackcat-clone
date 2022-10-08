import React, { useState } from "react";
import { FingerPrintSVG } from "../../assets/SVGs/FingerPrintSVG";
import { Character } from "./Character";
import Kikuya from "../../assets/images/kikuya.png";
import Kikuya_standing from "../../assets/images/Kikuya Standing 1.png";
import Jasmine from "../../assets/images/Jasmine.png";
import Jasmine_standing from "../../assets/images/Jasmine Standing 1.png";
import Azelea from "../../assets/images/Azelea.png";
import Azelea_standing from "../../assets/images/Azalea Standing 1.png";
import Sachiko from "../../assets/images/Sachiko.png";
import Sachiko_standing from "../../assets/images/Sachiko Standing 1.png";
import Ameonna from "../../assets/images/Ameonna.png";
import Ameonna_standing from "../../assets/images/Ameonna Standing 1.png";
import Naomi from "../../assets/images/Naomi.png";
import Naomi_standing from "../../assets/images/Naomi Standing 1.png";
import { Modal } from "../Modal";

export const Characters = () => {
	const [selectedCharacher, setSelectedCharacher] = useState(undefined);
	const [showModal, setShowModal] = useState(false);

	const showSelectedCharacter = character => {
		setSelectedCharacher(character);
		setShowModal(true);
	};

	const closeModal = () => {
		setSelectedCharacher(undefined);
		setShowModal(false);
	};

	const characters = [
		{
			name: "Kikuya",
			category: "Dealer",
			image: Kikuya,
			standingImage: Kikuya_standing,
		},
		{
			name: "Jasmine",
			category: "Dealer",
			image: Jasmine,
			standingImage: Jasmine_standing,
		},
		{
			name: "Azelea",
			category: "Player",
			image: Azelea,
			standingImage: Azelea_standing,
		},
		{
			name: "Sachiko",
			category: "Player",
			image: Sachiko,
			standingImage: Sachiko_standing,
		},
		{
			name: "Ameona",
			category: "Player",
			image: Ameonna,
			standingImage: Ameonna_standing,
		},
		{
			name: "Naomi",
			category: "Player",
			image: Naomi,
			standingImage: Naomi_standing,
		},
	];
	return (
		<div className="relative">
			{showModal && (
				<Modal closeModal={closeModal}>
					<img
						src={selectedCharacher.standingImage}
						alt={selectedCharacher.name}
						// className=""
					/>
				</Modal>
			)}
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
						character={c}
						showSelectedCharacter={showSelectedCharacter}
					/>
				))}
			</div>
		</div>
	);
};
