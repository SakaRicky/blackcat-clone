import React from "react";
import { HomeSVG } from "../static/SVGs/HomeSVG";
import { CalendarSVG } from "../static/SVGs/Calendar";
import { FingerPrintSVG } from "../static/SVGs/FingerPrintSVG";
import { FilmSVG } from "../static/SVGs/FilmSVG";

export const Menu = ({ setState }) => {
	return (
		<div className="flex gap-8 justify-end items-center text-white">
			<HomeSVG handleClick={() => setState("home")} />
			<CalendarSVG handleClick={() => setState("calendar")} />
			<FingerPrintSVG handleClick={() => setState("fingerprint")} />
			<FilmSVG handleClick={() => setState("film")} />
		</div>
	);
};
