import PropTypes from "prop-types";
import React, { memo, useCallback, useEffect, useState } from "react";
import SectionWarpperV2 from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";

const HomeSectionV2 = memo(props => {
	const { infoData } = props;

	const inittiaName = Object.keys(infoData.dest_list ?? "")[0] ?? "";
	const tabName = infoData?.dest_address?.map(item => item.name);
	const [name, setName] = useState(inittiaName);

	useEffect(() => {
		setName(inittiaName);
	}, [inittiaName]);

	const tabClickHandle = useCallback(function (index, name) {
		setName(name);
	}, []);

	return (
		<SectionWarpperV2>
			<SectionHeader
				title={infoData.title}
				subtitle={infoData.subtitle}
			></SectionHeader>
			<SectionTabs tabs={tabName} tabClick={tabClickHandle}></SectionTabs>
			<SectionRooms
				roomList={infoData.dest_list?.[name]}
				itemWidth={"33.33%"}
				itemHeight={"200px"}
			></SectionRooms>
		</SectionWarpperV2>
	);
});

HomeSectionV2.propTypes = {
	infoData: PropTypes.object,
};

export default HomeSectionV2;
