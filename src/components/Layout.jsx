import React from "react";
import heroBackground from "../static/images/heroBackground.jpeg";
import { Twitter } from "../static/SVGs/TwitterSVG";
import { Youtube } from "../static/SVGs/YoutubeSVG";
import { Discord } from "../static/SVGs/DiscordSVG";
import { Facebook } from "../static/SVGs/FacebookSVG";

export const Layout = ({ children }) => {
	return (
		<div className="">
			<div className="ml-[85px]">
				<nav className="fixed bg-[#0a0a0a] w-full h-[65px] flex items-center">
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
				<main
					className="h-screen pt-[80px]"
					style={{ background: `url(${heroBackground})` }}
				>
					<div className="max-w-5xl m-auto mt-4">{children}</div>
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
