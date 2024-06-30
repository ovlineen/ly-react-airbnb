import React, { memo } from "react";
import EntarceWrapper from "./style";
import EntranceTop from "./components/EntranceTop";
import EntranceBottom from "./components/EntranceBottom";

const AppEntrance = memo(() => {
	return (
		<EntarceWrapper>
			<EntranceTop></EntranceTop>
			<EntranceBottom></EntranceBottom>
		</EntarceWrapper>
	);
});

export default AppEntrance;
