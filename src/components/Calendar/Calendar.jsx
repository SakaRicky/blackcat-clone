import React from "react";
import styles from "./calendar.module.css";

export const Calendar = () => {
	return (
		<div className="flex gap-8 -ml-4 w-[110%]">
			<div className="w-[50%]">
				<div className="date tag flex justify-between">
					{/* <div class="efail-banner-updates-0">
						<span></span>
						<div></div>
					</div> */}
					<div className="inline-block text-red-500 leading-8 text-[3rem] -ml-12 font-black overflow-visible">
						9
						<span className="inline-block h-[40px] w-[3px] ml-1 -mb-2 bg-gray-300 rotate-[30deg]"></span>
						<div className="inline-block ml-2 text-gray-300 whitespace-nowrap  slash-clip overflow-visible">
							29
						</div>
					</div>
					<div className="flex">
						<div className="bg-gray-300 text-black w-40 flex justify-end items-center polygon-clip">
							{/* <span></span> */}
							<div className="leading-[16px] text-right text-[0.75rem]">
								LATEST
								<br />
								UPDATES
							</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-7 h-7 p-[2px] mx-2 text-white bg-black rounded-md"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className="mt-8 h-32 overflow-y-scroll white-scrollbar">
					<p className="text-sm">
						Black Cat's beta will be available sometime in Fall of 2022 for
						content creators and their communities. Afterwards, Black Cat will
						open it's doors to the general public for a grand open beta!
						Following this beta we expect to host a few more open beta tests for
						testing out different aspects of the game before release! Release is
						anticipated for Winter of 2022..
					</p>
				</div>
			</div>
			<div className="border-2 border-black w-[50%] overflow-hidden p-2 relative">
				<div className={styles.banner_slant}></div>
				<div className={styles.banner_back}>
					GAME
					<br />
					NEWS
					<br />
					UPDATES
				</div>
				<div className="flex items-center h-full">
					<div className={styles.banner_name}>
						GAME NEWS<div>& UPDATES</div>
					</div>
				</div>
			</div>
		</div>
	);
};
