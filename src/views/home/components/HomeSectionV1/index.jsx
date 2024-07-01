import PropTypes from "prop-types";
import React, { memo } from "react";
import SectionV1Warpper from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const HomeSectionV1 = memo(props => {
	const { infoData } = props;
	return (
		<SectionV1Warpper>
			<SectionHeader title={infoData.title}></SectionHeader>
			<SectionRooms roomList={infoData.list}></SectionRooms>
		</SectionV1Warpper>
	);
});

HomeSectionV1.propTypes = {
	infoData: PropTypes.object,
};

export default HomeSectionV1;
