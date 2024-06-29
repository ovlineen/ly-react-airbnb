import React, { memo } from "react";
import router from "./router";
import { useRoutes } from "react-router-dom";
import AppHeader from "./components/App-Header";
import AppFooter from "./components/App-Footer";

const App = memo(() => {
	return (
		<div className="app">
			<AppHeader></AppHeader>
			<main>{useRoutes(router)}</main>
			<AppFooter></AppFooter>
		</div>
	);
});

export default App;
