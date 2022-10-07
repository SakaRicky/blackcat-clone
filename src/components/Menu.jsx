import React from "react";
import { HomeSVG } from "../assets/SVGs/HomeSVG";
import { CalendarSVG } from "../assets/SVGs/CalendarSVG";
import { FingerPrintSVG } from "../assets/SVGs/FingerPrintSVG";
import { FilmSVG } from "../assets/SVGs/FilmSVG";

export const Menu = ({ setState, setSubPage }) => {
	const handleHomeClick = () => {
		setState("home");
		setSubPage("home");
	};

	const handleCalendarClick = () => {
		setState("home");
		setSubPage("calendar");
	};

	return (
		<div className="flex gap-8 justify-end items-center text-white z-10 relative">
			<HomeSVG handleClick={handleHomeClick} />
			<CalendarSVG handleClick={handleCalendarClick} />
			<FingerPrintSVG
				handleClick={() => setState("characters")}
				classes="w-10 h-10 cursor-pointer"
			/>
			<FilmSVG handleClick={() => setState("film")} />
		</div>
	);
};
