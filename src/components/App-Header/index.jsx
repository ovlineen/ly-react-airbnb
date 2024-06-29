import React, { memo } from "react";
import { HeaderWrapper } from "./style";
import HeaderLeft from "./components/header-left";
import HeaderCenter from "./components/header-center";
import HeaderRight from "./components/header-right";

const AppHeader = memo(() => {
	return (
		<HeaderWrapper>
			<HeaderLeft></HeaderLeft>
			<HeaderCenter></HeaderCenter>
			<HeaderRight></HeaderRight>
		</HeaderWrapper>
	);
});

export default AppHeader;
