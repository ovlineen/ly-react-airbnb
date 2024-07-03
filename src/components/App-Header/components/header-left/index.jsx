import React, { memo } from "react";
import { LeftWrapper } from "./style";
import IconLogon from "@/assets/svg/icon_logon";
import { useNavigate } from "react-router-dom";

const HeaderLeft = memo(() => {
	const navigate = useNavigate();
	function onLogoClickHandle() {
		navigate("/home");
	}

	return (
		<LeftWrapper>
			<div className="logo" onClick={onLogoClickHandle}>
				<IconLogon></IconLogon>
			</div>
		</LeftWrapper>
	);
});

export default HeaderLeft;
