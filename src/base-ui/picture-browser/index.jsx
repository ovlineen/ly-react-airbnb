import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import BrowserWapper from "./style";
import IconClose from "@/assets/svg/icon-close";
import IconArrowLeft from "@/assets/svg/icon-arrow-left.jsx";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";

const PictureBrowser = memo(props => {
	const { isShowBrowser, picture_urls } = props;
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	function arrowClickHandle(isLeft) {
		let newIndex = isLeft ? currentIndex - 1 : currentIndex + 1;
		if (newIndex < 0) newIndex = picture_urls.length - 1;
		if (newIndex > picture_urls.length - 1) newIndex = 0;
		setCurrentIndex(newIndex);
	}

	function picClickHandle(index) {
		console.log(index);
		setCurrentIndex(index);
	}

	return (
		<BrowserWapper>
			<div className="closure" onClick={e => isShowBrowser()}>
				<IconClose></IconClose>
			</div>
			<div className="carousel">
				<div className="arrow">
					<div
						className="btn left"
						onClick={e => arrowClickHandle(true)}
					>
						<IconArrowLeft width="77" height="77"></IconArrowLeft>
					</div>
					<div
						className="btn right"
						onClick={e => arrowClickHandle(false)}
					>
						<IconArrowRight width="77" height="77"></IconArrowRight>
					</div>
				</div>

				<div className="picture">
					<img src={picture_urls[currentIndex]} alt="" />
				</div>
			</div>

			<div className="indicator">
				<div className="info"></div>
				<div className="list">
					<Indicator selectIndex={currentIndex}>
						{picture_urls.map((item, index) => (
							<div
								className="pic"
								key={item}
								onClick={e => picClickHandle(index)}
							>
								<div
									className={classNames("cover", {
										active: currentIndex === index,
									})}
								></div>
								<img src={item} alt="" />
							</div>
						))}
					</Indicator>
				</div>
			</div>
		</BrowserWapper>
	);
});

PictureBrowser.propTypes = {
	isShowBrowser: PropTypes.func,
	picture_urls: PropTypes.array,
};

export default PictureBrowser;
