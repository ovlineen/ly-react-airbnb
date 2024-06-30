import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomWarpper from "./style";
import { Rating } from "@mui/material";

const RoomItem = memo(props => {
	const { itemData } = props;
	return (
		<RoomWarpper
			data-verifycolor={itemData?.verify_info?.text_color || "#eee"}
		>
			<div className="item">
				<div className="cover">
					<img src={itemData.picture_url} alt="" />
				</div>
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
