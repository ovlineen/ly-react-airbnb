import React, { memo } from "react";
import EntarceTopWarpper from "./style";
import IconClosure from "@/assets/svg/icon_closure";

const EntranceTop = memo(props => {
	function btnclosureClick() {
		props.entrance(false);
	}

	return (
		<EntarceTopWarpper>
			<span className="closure" onClick={e => btnclosureClick()}>
				<IconClosure></IconClosure>
			</span>
			<h2 className="title">登录或注册</h2>
		</EntarceTopWarpper>
	);
});

export default EntranceTop;
