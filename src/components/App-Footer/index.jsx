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
				<a
					href="https://beian.miit.gov.cn/"
					target="_blank"
					rel="noopener noreferrer"
				>
					京ICP备16017121号
				</a>
				<a
					href="https://z1.muscache.cn/pictures/carson/carson-1630514828733-435235f3/original/7c3906bf-e700-43a2-bc1e-38d8fb2f01cb.png"
					target="_blank"
					rel="noopener noreferrer"
				>
					京ICP证 160773号
				</a>
				<a
					href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502032345"
					target="_blank"
					rel="noopener noreferrer"
				>
					京公网安备 11010502032345号
				</a>
				<span>安彼迎网络（北京）有限公司</span>
				<a
					href="https://zzlz.gsxt.gov.cn/businessCheck/verifKey.do?showType=p&amp;serial=91110105MA003A481G-SAIC_SHOW_10000091110105MA003A481G1679980493194&amp;signData=MEYCIQDz/atwLJBCy8/tQW9ebGuoA+1etBYL/KpjQTCJL2bTFQIhAKgrAzJOcfltfxrKALrq8ayM/pVNSuKJg6N2oy6Q40ps"
					target="_blank"
					rel="noopener noreferrer"
				>
					营业执照
				</a>
				<span>全国旅游投诉渠道 12345</span>
				<span>违法和不良信息举报邮箱 jubao@airbnb.com</span>
			</div>
		</FooterWarpper>
	);
});

export default AppFooter;
