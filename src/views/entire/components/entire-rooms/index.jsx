import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomsWapper from "./style";
import RoomItem from "@/components/room-item";
import { shallowEqual, useSelector } from "react-redux";

const EntireRooms = memo(props => {
	const { itemData, totalCount } = props;

	const { isLoading } = useSelector(
		state => ({
			isLoading: state.entire.isLoading,
		}),
		shallowEqual
	);

	return (
		<RoomsWapper>
			<h2 className="totaltitle">{totalCount}多处住所</h2>
			<div className="room">
				{itemData?.map(item => (
					<RoomItem
						itemData={item}
						key={item.id}
						itemWidth={"20%"}
						itemHeight={"170px"}
						itemClick={true}
					></RoomItem>
				))}
			</div>

			{isLoading && <div className="cover"></div>}
		</RoomsWapper>
	);
});

EntireRooms.propTypes = {
	totalCount: PropTypes.number,
	itemData: PropTypes.array,
};

export default EntireRooms;
