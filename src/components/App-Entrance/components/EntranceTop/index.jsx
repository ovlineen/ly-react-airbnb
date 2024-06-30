import React, { memo } from "react";
import EntarceTopWarpper from "./style";
import IconClosure from "@/assets/svg/icon_closure";

const EntranceTop = memo(() => {
	return (
		<EntarceTopWarpper>
			<span className="closure">
				<IconClosure></IconClosure>
			</span>
			<h2 className="title">登录或注册</h2>
		</EntarceTopWarpper>
	);
});

export default EntranceTop;
