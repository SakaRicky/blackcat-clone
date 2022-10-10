import React from "react";
import welcomeCharacter from "../assets/images/welcome_cherecter.png";
import welcomeCoin from "../assets/images/welcome_coin.png";

export const LowerBanner = () => {
	return (
		<div className="relative z-20 border border-[#151515]">
			<div className="h-1/2 flex items-center gap-2 bg-[#151515] p-8">
				<img src={welcomeCharacter} className="h-24 w-24 rounded-full" alt="" />
				<div className="flex">
					<img src={welcomeCoin} className="h-24 rounded-full" alt="" />
					<div className="">
						<h1 className="text-4xl font-black text-gray-500">COMING</h1>
						<h1 className="text-4xl font-black text-red-600 -mt-4">
							WINTER 2022
						</h1>
						<h1 className="text-sm font-black p-[4px] bg-gray-400 text-gray-900">
							STAY TUNED FOR MORE INFO
						</h1>
					</div>
				</div>
			</div>
			<div className="h-1/2 bg-[#151515] bg-opacity-50">
				<p className="px-12 py-16 text-gray-200 text-xs">
					Black Cat uses fictional currency and does not contain any gambling of
					real life assets. Stay tuned on Black Cat's development progress and
					important dates by following our socials or joining us on{" "}
					<a href="https://discord.gg/5qm6x9cS">Discord</a> !
				</p>
			</div>
		</div>
	);
};
