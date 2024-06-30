import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "../room-item";

const SectionRooms = memo(props => {
	const { roomList = [] } = props;
	return (
		<div className="room-list">
			{roomList?.slice(0, 8).map(item => (
				<RoomItem key={item.id} itemData={item}></RoomItem>
			))}
		</div>
	);
});

SectionRooms.propTypes = {
	roomList: PropTypes.array,
};

export default SectionRooms;
