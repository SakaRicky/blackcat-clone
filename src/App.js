import React, { useState } from "react";
import { Layout } from "./components/Layout";
import HomeCalendar from "./components/HomeCalendar";
import { Menu } from "./components/Menu";
import { Characters } from "./components/Characters/Characters";

function App() {
	const [mainPage, setMainPage] = useState("home");
	const [subPage, setSubPage] = useState("calendar");

	return (
		<div className="bg-[#111111] text-gray-500 p-2">
			<Layout>
				<Menu setState={setMainPage} setSubPage={setSubPage} />

				{mainPage === "home" ? (
					<HomeCalendar subPage={subPage} />
				) : (
					<Characters />
				)}
			</Layout>
		</div>
	);
}

export default App;
