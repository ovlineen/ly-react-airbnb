import React, { memo } from "react";
import { LeftWrapper } from "./style";
import IconLogon from "@/assets/svg/icon_logon";

const HeaderLeft = memo(() => {
	return (
		<LeftWrapper>
			<IconLogon></IconLogon>
		</LeftWrapper>
	);
});

export default HeaderLeft;
