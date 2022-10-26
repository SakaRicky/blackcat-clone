import React, { useState } from "react";
import { FingerPrintSVG } from "../../assets/SVGs/FingerPrintSVG";
import { Character } from "./Character/Character";
import Kikuya from "../../assets/images/kikuya/kikuya.png";
import Kikuya_fbx from "../../assets/images/azaela/azaela.fbx";
import Jasmine from "../../assets/images/jasmine/Jasmine.png";
import Jasmine_fbx from "../../assets/images/basemesh/BC_basemesh_stencil.fbx";
import Azelea from "../../assets/images/azaela/Azelea.png";
import Azelea_fbx from "../../assets/images/azaela/azaela.fbx";
import Sachiko from "../../assets/images/sachiko/Sachiko.png";
import Sachiko_fbx from "../../assets/images/sachiko/Sachiko_Prop.fbx";
import Ameonna from "../../assets/images/amenome/Ameonna.png";
import Ameonna_fbx from "../../assets/images/amenome/Ameonna.fbx";
import Naomi from "../../assets/images/naomi/Naomi.png";
import Naomi_fbx from "../../assets/images/naomi/naomi.fbx";
import { Modal } from "../Modal";
import { motion } from "framer-motion";
import { CharacterViewer3D } from "../CharacterViewer3D";

export const Characters = () => {
	const [selectedCharacher, setSelectedCharacher] = useState(undefined);
	const [showModal, setShowModal] = useState(false);

	const showSelectedCharacter = character => {
		setSelectedCharacher(character);
		setShowModal(true);
	};

	const closeModal = () => {
		console.log("Modal clicked");
		setSelectedCharacher(undefined);
		setShowModal(false);
	};

	const characters = [
		{
			name: "Kikuya",
			category: "Dealer",
			image: Kikuya,
			fbx: Kikuya_fbx,
			description:
				"Black Cat is an upcoming game that puts two players against one another in a competitive game of Black Jack - there is no house, no playing against the dealer, <span class='text-red-600'>WINNER TAKES ALL</span>.\n <span class='text-red-600'>PLAY</span> in a fantasy world and select characters that give will give you an edge for the jackpot. A succubus that can look into your opponents hearts to tell you there cards or a medium who can make ghost cards. <span class='text-red-500'>THE CHOICE IS YOURS</span>.\n Climb the ladder against opponents across the world, turning a game of luck into a game of skill. The <span class='text-red-500'>CASINO</span> awaits.",
		},
		{
			name: "Jasmine",
			category: "Dealer",
			image: Jasmine,
			fbx: Jasmine_fbx,
			description:
				"Black Cat is an upcoming game that puts two players against one another in a competitive game of Black Jack - there is no house, no playing against the dealer, <span class='text-red-500'>WINNER TAKES ALL</span>.\n <span class='text-red-500'>PLAY</span> in a fantasy world and select characters that give will give you an edge for the jackpot. A succubus that can look into your opponents hearts to tell you there cards or a medium who can make ghost cards. <span class='text-red-500'>THE CHOICE IS YOURS</span>.\n Climb the ladder against opponents across the world, turning a game of luck into a game of skill. The <span class='text-red-500'>CASINO</span> awaits.",
		},
		{
			name: "Azelea",
			category: "Player",
			image: Azelea,
			fbx: Azelea_fbx,
			description:
				"Black Cat is an upcoming game that puts two players against one another in a competitive game of Black Jack - there is no house, no playing against the dealer, <span class='text-red-500'>WINNER TAKES ALL</span>.\n <span class='text-red-500'>PLAY</span> in a fantasy world and select characters that give will give you an edge for the jackpot. A succubus that can look into your opponents hearts to tell you there cards or a medium who can make ghost cards. <span class='text-red-500'>THE CHOICE IS YOURS</span>.\n Climb the ladder against opponents across the world, turning a game of luck into a game of skill. The <span class='text-red-500'>CASINO</span> awaits.",
		},
		{
			name: "Sachiko",
			category: "Player",
			image: Sachiko,
			fbx: Sachiko_fbx,
			description:
				"Black Cat is an upcoming game that puts two players against one another in a competitive game of Black Jack - there is no house, no playing against the dealer, <span class='text-red-500'>WINNER TAKES ALL</span>.\n <span class='text-red-500'>PLAY</span> in a fantasy world and select characters that give will give you an edge for the jackpot. A succubus that can look into your opponents hearts to tell you there cards or a medium who can make ghost cards. <span class='text-red-500'>THE CHOICE IS YOURS</span>.\n Climb the ladder against opponents across the world, turning a game of luck into a game of skill. The <span class='text-red-500'>CASINO</span> awaits.",
		},
		{
			name: "Ameona",
			category: "Player",
			image: Ameonna,
			fbx: Ameonna_fbx,
			description:
				"Black Cat is an upcoming game that puts two players against one another in a competitive game of Black Jack - there is no house, no playing against the dealer, <span class='text-red-500'>WINNER TAKES ALL</span>.\n <span class='text-red-500'>PLAY</span> in a fantasy world and select characters that give will give you an edge for the jackpot. A succubus that can look into your opponents hearts to tell you there cards or a medium who can make ghost cards. <span class='text-red-500'>THE CHOICE IS YOURS</span>.\n Climb the ladder against opponents across the world, turning a game of luck into a game of skill. The <span class='text-red-500'>CASINO</span> awaits.",
		},
		{
			name: "Naomi",
			category: "Player",
			image: Naomi,
			fbx: Naomi_fbx,
			description:
				"Black Cat is an upcoming game that puts two players against one another in a competitive game of Black Jack - there is no house, no playing against the dealer, <span class='text-red-500'>WINNER TAKES ALL</span>.\n <span class='text-red-500'>PLAY</span> in a fantasy world and select characters that give will give you an edge for the jackpot. A succubus that can look into your opponents hearts to tell you there cards or a medium who can make ghost cards. <span class='text-red-500'>THE CHOICE IS YOURS</span>.\n Climb the ladder against opponents across the world, turning a game of luck into a game of skill. The <span class='text-red-500'>CASINO</span> awaits.",
		},
	];

	return (
		<div className="relative my-12">
			{showModal && (
				<Modal closeModal={closeModal}>
					<CharacterViewer3D selectedCharacher={selectedCharacher} />
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
				{characters.map((c, i) => (
					<motion.div
						key={c.image}
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							type: "tween",
							delay: parseFloat(`0.${i}`),
							duration: 1.1,
						}}
					>
						<Character
							character={c}
							showSelectedCharacter={showSelectedCharacter}
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
};
