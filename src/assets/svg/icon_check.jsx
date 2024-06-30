import React, { memo } from "react";
import styleStrToObj from "./utils";

const IconCheck = memo(() => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			aria-hidden="true"
			role="presentation"
			focusable="false"
			style={styleStrToObj(
				"display: block; fill: none; height: 16px; width: 16px; stroke: #fff; stroke-width: 4; overflow: visible;"
			)}
		>
			<path fill="none" d="m4 16.5 8 8 16-16"></path>
		</svg>
	);
});

export default IconCheck;
