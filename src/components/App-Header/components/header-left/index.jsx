import React, { memo } from "react";
import { LeftWrapper } from "./style";
import IconLogon from "@/assets/svg/icon_logon";

const HeaderLeft = memo(() => {
	return (
		<LeftWrapper>
			<a href="./home">
				<IconLogon></IconLogon>
			</a>
		</LeftWrapper>
	);
});

export default HeaderLeft;
