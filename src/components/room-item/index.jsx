import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import RoomWarpper from "./style";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeDetailAction } from "@/store/modules/detail";
import IconArrowLeft from "@/assets/svg/icon-arrow-left.jsx";
import IconArrowRight from "@/assets/svg/icon-arrow-right.jsx";
import Indicator from "../../base-ui/indicator";
import classNames from "classnames";

const RoomItem = memo(props => {
	const {
		itemData,
		itemWidth = "25%",
		itemHeight = "150px",
		itemClick = false,
	} = props;

	const [selectIndex, setSelectIndex] = useState(0);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const sliderRef = useRef();

	function roomItemClikhandle(e, item) {
		if (itemClick) {
			if (e.target.closest(".btn")) {
				e.preventDefault();
				return;
			} else {
				dispatch(changeDetailAction(item));
				navigate("/detail");
			}
		} else {
			return;
		}
	}

	function controlClickHandle(isLeft = true) {
		isLeft ? sliderRef.current.next() : sliderRef.current.prev();

		let newIndex = isLeft ? selectIndex - 1 : selectIndex + 1;
		const length = itemData.picture_urls.length;
		if (newIndex < 0) newIndex = length - 1;
		if (newIndex > length - 1) newIndex = 0;

		setSelectIndex(newIndex);
	}

	return (
		<RoomWarpper
			$verifycolor={itemData?.verify_info?.text_color || "#eee"}
			$itemWidth={itemWidth}
			$itemHeight={itemHeight}
		>
			<div
				className="item"
				onClick={e => roomItemClikhandle(e, itemData)}
			>
				{itemData?.picture_urls ? (
					<div className="swiper">
						<div className="indicator">
							<Indicator selectIndex={selectIndex}>
								{itemData?.picture_urls?.map((item, index) => (
									<div className="item" key={item}>
										<span
											className={classNames("dot", {
												active: selectIndex === index,
											})}
										></span>
									</div>
								))}
							</Indicator>
						</div>
						<div className="control">
							<div
								className="btn left"
								onClick={e => controlClickHandle()}
							>
								<IconArrowLeft
									width={20}
									height={20}
								></IconArrowLeft>
							</div>
							<div
								className="btn right"
								onClick={e => controlClickHandle(false)}
							>
								<IconArrowRight
									width={20}
									height={20}
								></IconArrowRight>
							</div>
						</div>
						<Carousel dots={false} ref={sliderRef}>
							{itemData?.picture_urls?.map(item => (
								<div className="cover" key={item}>
									<img src={item} alt="" />
								</div>
							))}
						</Carousel>
					</div>
				) : (
					<div className="cover">
						<img src={itemData.picture_url} alt="" />
					</div>
				)}

				<div className="verify">
					{itemData?.verify_info?.messages.join(" · ")}
				</div>
				<div className="title" title={itemData.name}>
					{itemData.name}
				</div>

				<div className="price">{itemData.price_format}</div>
				<div className="bottom">
					<Rating
						name="simple-controlled"
						value={itemData?.star_rating ?? 5}
						readOnly
						sx={{ fontSize: "12px", color: "#008a8a" }}
						precision={0.1}
					/>
					<span className="quantity">{itemData.reviews_count}</span>
					<span className="honor">
						{itemData?.bottom_info?.content}
					</span>
				</div>
			</div>
		</RoomWarpper>
	);
});

RoomItem.propTypes = {
	itemData: PropTypes.object,
};

export default RoomItem;
