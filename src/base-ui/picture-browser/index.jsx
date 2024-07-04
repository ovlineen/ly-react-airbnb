import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import BrowserWapper from "./style";
import IconClose from "@/assets/svg/icon-close";
import IconArrowLeft from "@/assets/svg/icon-arrow-left.jsx";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const PictureBrowser = memo(props => {
	const { isShowBrowser, picture_urls } = props;
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	return (
		<BrowserWapper>
			<div className="closure" onClick={e => isShowBrowser()}>
				<IconClose></IconClose>
			</div>
			<div className="carousel">
				<div className="arrow">
					<div className="btn left">
						<IconArrowLeft width="77" height="77"></IconArrowLeft>
					</div>
					<div className="btn right">
						<IconArrowRight width="77" height="77"></IconArrowRight>
					</div>
				</div>

				<div className="picture">
					<img src={picture_urls[currentIndex]} alt="" />
				</div>
			</div>

			<div className="indicator"></div>
		</BrowserWapper>
	);
});

PictureBrowser.propTypes = {
	isShowBrowser: PropTypes.func,
	picture_urls: PropTypes.array,
};

export default PictureBrowser;
