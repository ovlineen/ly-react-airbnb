import React, { memo } from "react";
import { RightWrapper } from "./style";
import IconEarth from "@/assets/svg/icon_earth";
import IconDetails from "@/assets/svg/icon_details";
import IconUser from "@/assets/svg/icon_user";

const HeaderRight = memo(() => {
	return (
		<RightWrapper>
			<div className="more">
				<span className="register">注册</span>
				<span className="login">登录</span>
				<span>
					<IconEarth></IconEarth>
				</span>
			</div>
			<div className="profile">
				<IconDetails></IconDetails>
				<IconUser></IconUser>
			</div>
		</RightWrapper>
	);
});

export default HeaderRight;
