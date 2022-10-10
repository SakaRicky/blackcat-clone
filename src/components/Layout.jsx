import React from "react";
import heroBackground from "../assets/images/heroBackground.jpeg";
import { Twitter } from "../assets/SVGs/TwitterSVG";
import { Youtube } from "../assets/SVGs/YoutubeSVG";
import { Discord } from "../assets/SVGs/DiscordSVG";
import { Facebook } from "../assets/SVGs/FacebookSVG";
import dots from "../assets/images/dots.png";

import { motion } from "framer-motion";
import { LowerBanner } from "./LowerBanner";

export const Layout = ({ children, subPage }) => {
	return (
		<div className="">
			<div
				className="ml-[85px] min-h-screen pb-8"
				style={{
					background: `url(${heroBackground})`,
					backgroundAttachment: "fixed",
				}}
			>
				<nav className="fixed bg-[#0a0a0a] w-full h-[65px] flex items-center z-20">
					<a
						href="https://catmaid.cafe/"
						target="_blank"
						rel="noreferrer"
						className="text-[0.75rem] ml-[1rem] border border-gray-500 py-1 px-2 hover:text-gray-300 hover:border-gray-300"
					>
						MAID CAFE L.L.C.
					</a>
					<a
						href="/"
						target="_blank"
						className="text-[0.75rem] ml-[1rem] border border-gray-500 py-1 px-2 hover:text-gray-300 hover:border-gray-300"
					>
						BLAC CAT GLOBAL
					</a>
				</nav>

				<main className=" relative px-12 overflow-hidden-auto">
					<motion.div
						style={{
							backgroundImage: `url(${dots})`,
							width: "60%",
							height: "80%",
							filter: "contrast(91%)",
						}}
						className="absolute top-0 left-[20rem] parallelogram-clip"
						animate={{ x: subPage === "home" ? 0 : 100 }}
						transition={{ type: "tween", duration: 0.7 }}
					></motion.div>

					<div className="max-w-6xl m-auto mt-4 pt-[80px] relative">
						{children}
						<LowerBanner />
					</div>
				</main>
			</div>
			<aside className="fixed top-2 left-2 bottom-2 w-[75px] pb-4 bg-[#0a0a0a] flex flex-col gap-4 justify-end items-center">
				<Discord color={"#616161"} />
				<Youtube color={"#616161"} />
				<Facebook color={"#616161"} />
				<Twitter color={"#616161"} />
			</aside>
		</div>
	);
};
