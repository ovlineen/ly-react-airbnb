import React, { memo } from "react";
import { CenterWrapper } from "./style";
import IconSearch from "@/assets/svg/icon_search";

const HeaderCenter = memo(() => {
	return (
		<CenterWrapper>
			<div className="text line">任何地方</div>
			<div className="text line">任意一周</div>
			<div className="people">
				<span className="text">添加人数</span>
				<div className="iconSerch">
					<IconSearch></IconSearch>
				</div>
			</div>
		</CenterWrapper>
	);
});

export default HeaderCenter;
