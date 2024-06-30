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
		function windowHandleClick(e) {
			// 如果点击的地方是面板或者其子元素，则不关闭面板
			if (e.target.closest(".profile, .panel")) {
				return;
			}
			setShowPanel(false);
		}

		// 使用冒泡阶段监听事件
		window.addEventListener("click", windowHandleClick);

		return () => {
			window.removeEventListener("click", windowHandleClick);
		};
	}, []);

	// 点击按钮时设置相应的状态
	function btnClickHandle(setStateFunction, e) {
		e.stopPropagation(); // 阻止事件冒泡
		setStateFunction(true);
		setShowPanel(false);
	}

	function profileClickHandle(e) {
		e.stopPropagation(); // 阻止事件冒泡
		setShowPanel(true);
	}

	return (
		<RightWrapper>
			<div className="more">
				<div
					className="register text"
					onClick={e => btnClickHandle(setShowEntrance, e)}
				>
					注册
				</div>
				<div
					className="login text"
					onClick={e => btnClickHandle(setShowEntrance, e)}
				>
					登录
				</div>
				<div className="text">
					<IconEarth />
				</div>
			</div>

			<div className="profile" onClick={profileClickHandle}>
				<IconDetails />
				<IconUser />

				{showPanel && (
					<div className="panel" onClick={e => e.stopPropagation()}>
						<div className="top">
							<div
								className="text"
								onClick={e =>
									btnClickHandle(setShowEntrance, e)
								}
							>
								注册
							</div>
							<div
								className="text"
								onClick={e =>
									btnClickHandle(setShowEntrance, e)
								}
							>
								登录
							</div>
						</div>
						<div className="bottom">
							<div className="text">帮助中心</div>
						</div>
					</div>
				)}
			</div>

			{showEntrance && <AppEntrance entrance={setShowEntrance} />}
		</RightWrapper>
	);
});

export default HeaderRight;