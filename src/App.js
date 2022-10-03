import React, { useState } from "react";
import { Layout } from "./components/Layout";
import HomeCalendar from "./components/HomeCalendar";
import { Menu } from "./components/Menu";

function App() {
	const [state, setState] = useState("home");
	return (
		<div className="bg-[#111111] text-gray-500 p-2">
			<Layout>
				<Menu setState={setState} />
				<HomeCalendar state={state} />
			</Layout>
		</div>
	);
}

export default App;
