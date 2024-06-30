import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";
import IconEarth from "@/assets/svg/icon_earth";
import IconDetails from "@/assets/svg/icon_details";
import IconUser from "@/assets/svg/icon_user";
import AppEntrance from "@/components/App-Entrance";

const HeaderRight = memo(() => {
	const [showPanel, setShowPanel] = useState(false);
	const [showEntrance, setShowEntrance] = useState(false);

	// 副作用代码
	useEffect(() => {
		function windowHandleClick() {
			setShowPanel(false);
		}

		window.addEventListener("click", windowHandleClick, true);

		return () => {
			window.removeEventListener("click", windowHandleClick);
		};
	}, []);

	function btnClickHandle(name) {
		name(true);
	}

	return (
		<RightWrapper>
			<div className="more">
				<div className="register text">注册</div>
				<div className="login text">登录</div>
				<div className="text">
					<IconEarth></IconEarth>
				</div>
			</div>

			<div
				className="profile"
				onClick={e => btnClickHandle(setShowPanel)}
			>
				<IconDetails></IconDetails>
				<IconUser></IconUser>

				{showPanel && (
					<div className="panel">
						<div className="top">
							<div className="text">注册</div>
							<div className="text">登录</div>
						</div>
						<div className="bottom">
							<div className="text">帮助中心</div>
						</div>
					</div>
				)}
			</div>

			<AppEntrance></AppEntrance>
		</RightWrapper>
	);
});

export default HeaderRight;
