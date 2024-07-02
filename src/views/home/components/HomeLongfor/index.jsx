import PropTypes from "prop-types";
import React, { memo } from "react";
import LongForWapper from "./style";
import SectionHeader from "@/components/section-header";
import LongForItem from "@/components/longfor-item";

const HomeLongFor = memo(props => {
	const { infoData } = props;
	return (
		<LongForWapper>
			<SectionHeader
				title={infoData.title}
				subtitle={infoData.subtitle}
			></SectionHeader>
			<LongForItem itemData={infoData.list}></LongForItem>
		</LongForWapper>
	);
});

HomeLongFor.propTypes = {
	infoData: PropTypes.object,
};

export default HomeLongFor;
