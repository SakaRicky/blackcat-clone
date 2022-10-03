import React from "react";
import hero from "../static/images/hero.png";

const HomeCalendar = ({ state }) => {
	return (
		<div className="flex -mt-16">
			<img src={hero} alt="" />
			<div className="text-gray-400 mt-12">
				<div className="font-black italic -ml-36">
					<h1 className="text-[112px]  text-red-500 tracking-tighter">
						WELCOME
					</h1>
					<h2 className="text-7xl text-center -mt-8 tracking-tighter">
						GAMBLERS!
					</h2>
					<h5 className="text-lg mt-4 text-gray-700 text-right tracking-wide">
						WELCOME TO THE CASINO
					</h5>
				</div>

				<div className="mt-8 ml-2 text-[#cbd0d6] text-[0.85rem] tracking-wide">
					<p className="-ml-5">
						Black Cat is an upcoming game that puts two players against one
						another in a competitive game of Black Jack - there is no house, no
						playing against the dealer,{" "}
						<span className="text-red-500">WINNER TAKES ALL</span>.
					</p>

					<p className="mt-4 -ml-5">
						<span className="text-red-500">PLAY</span> in a fantasy world and
						select characters that give will give you an edge for the jackpot. A
						succubus that can look into your opponents hearts to tell you there
						cards or a medium who can make ghost cards.{" "}
						<span className="text-red-500">THE CHOICE IS YOURS</span>.
					</p>
					<p className="mt-4">
						Climb the ladder against opponents across the world, turning a game
						of luck into a game of skill. The{" "}
						<span className="text-red-500">CASINO</span> awaits.
					</p>
				</div>
			</div>
		</div>
	);
};

export default HomeCalendar;
