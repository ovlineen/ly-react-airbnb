import React, { memo } from "react";
import router from "./router";
import { useRoutes } from "react-router-dom";

const App = memo(() => {
	return (
		<div className="app">
			<header>header</header>
			<main>{useRoutes(router)}</main>
			<footer>footer</footer>
		</div>
	);
});

export default App;
