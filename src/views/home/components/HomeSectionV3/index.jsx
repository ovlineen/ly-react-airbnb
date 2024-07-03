import PropTypes from "prop-types";
import React, { memo } from "react";
import SectionV3Wapper from "./style";
import SectionHeader from "@/components/section-header";
import SectionFooter from "@/components/section-footer";
import RoomItem from "@/components/room-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeSectionV3 = memo(props => {
	const { infoData } = props;
	return (
		<SectionV3Wapper>
			<SectionHeader
				title={infoData.title}
				subtitle={infoData.subtitle}
			></SectionHeader>
			<ScrollView>
				{infoData?.list?.map(item => (
					<RoomItem
						itemData={item}
						key={item.id}
						itemWidth={"250px"}
					></RoomItem>
				))}
			</ScrollView>

			<SectionFooter name={"PLUS房源"} color={"#008a8a"}></SectionFooter>
		</SectionV3Wapper>
	);
});

HomeSectionV3.propTypes = {
	infoData: PropTypes.object,
};

export default HomeSectionV3;
