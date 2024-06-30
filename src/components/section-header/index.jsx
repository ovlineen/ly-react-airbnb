import PropTypes from "prop-types";
import React, { memo } from "react";
import HeaderWarpper from "./style";

const SectionHeader = memo(props => {
	const { title, subtitle } = props;

	return (
		<HeaderWarpper>
			<div className="title">{title}</div>
			{subtitle && <div className="subtilte">{subtitle}</div>}
		</HeaderWarpper>
	);
});

SectionHeader.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
};

export default SectionHeader;
