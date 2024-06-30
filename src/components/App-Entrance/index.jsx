import React, { memo } from "react";
import EntarceWrapper from "./style";
import EntranceTop from "./components/EntranceTop";
import EntranceBottom from "./components/EntranceBottom";

const AppEntrance = memo(props => {
	return (
		<EntarceWrapper>
			<EntranceTop entrance={props.entrance}></EntranceTop>
			<EntranceBottom></EntranceBottom>
		</EntarceWrapper>
	);
});

export default AppEntrance;
