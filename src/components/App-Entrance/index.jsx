import React, { memo, useEffect, useRef } from "react";
import EntarceWrapper from "./style";
import EntranceTop from "./components/EntranceTop";
import EntranceBottom from "./components/EntranceBottom";

const AppEntrance = memo(props => {
	useEffect(() => {
		function closureEntrance(e) {
			if (e.target.closest(".entrance")) {
				return;
			} else {
				props.entrance(false);
			}
		}

		window.addEventListener("click", closureEntrance, true);

		return () => {
			window.removeEventListener("click", closureEntrance);
		};
	}, []);

	return (
		<EntarceWrapper>
			<div className="entrance">
				<EntranceTop entrance={props.entrance}></EntranceTop>
				<EntranceBottom></EntranceBottom>
			</div>
		</EntarceWrapper>
	);
});

export default AppEntrance;
