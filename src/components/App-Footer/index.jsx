import React, { memo } from "react";
import FooterWarpper from "./style";
import footerData from "@/assets/data/footer.json";

const AppFooter = memo(() => {
	return (
		<FooterWarpper>
			<div className="container">
				<div className="top">
					{footerData.map((item, index) => {
						return (
							<ul className="list" key={index}>
								<h3 className="title">{item.name}</h3>
								{item.list.map((iten, index) => (
									<li key={index}>{iten}</li>
								))}
							</ul>
						);
					})}
				</div>
			</div>
			<div className="bottom">
				<a href="javasrcipt:;">京ICP备16017121号</a>
				<a href="javasrcipt:;">京ICP证 160773号</a>
				<a href="javasrcipt:;">京公网安备 11010502032345号</a>
				<span>安彼迎网络（北京）有限公司</span>
				<a href="javasrcipt:;">营业执照</a>
				<span>全国旅游投诉渠道 12345</span>
				<span>违法和不良信息举报邮箱 jubao@airbnb.com</span>
			</div>
		</FooterWarpper>
	);
});

export default AppFooter;
