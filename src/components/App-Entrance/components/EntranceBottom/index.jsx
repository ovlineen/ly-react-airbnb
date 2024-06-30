import React, { memo } from "react";
import EntranceBottomWarpper from "./style";
import IconCheck from "@/assets/svg/icon_check.jsx";

const EntranceBottom = memo(() => {
	return (
		<EntranceBottomWarpper>
			<h2 className="greetings">爱彼迎欢迎您</h2>
			<div className="info">
				<div className="nation frame"></div>
				<div className="phone frame"></div>
			</div>
			<p className="phrase">
				我们会致电或发送短信，以确认您的电话号码。
				费用按标准的短信和数据资费计算。 隐私政策
			</p>
			<div className="policy">
				<span className="iconCheck">
					<IconCheck></IconCheck>
				</span>
				我确认已年满 18
				周岁，且已认真阅读并同意爱彼迎的服务条款、支付服务条款、非歧视政策和隐私政策。如您居住在中国，您的信息将在中国按照中国法律（包括隐私和信息披露法律）的要求处理。
			</div>
			<div className="confirm"></div>
		</EntranceBottomWarpper>
	);
});

export default EntranceBottom;
