import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// 样式
import "normalize.css";
import "./assets/css/index.less";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Suspense fallback="loading">
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</Suspense>
	</React.StrictMode>
);
