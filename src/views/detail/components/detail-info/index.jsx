import PropTypes from "prop-types";
import React, { memo } from "react";
import InfoWapper from "./style";

const DetailInfo = memo(props => {
	const { data } = props;
	return (
		<InfoWapper>
			<div className="name">第三方接口数据不完整，故不做此模块</div>
		</InfoWapper>
	);
});

DetailInfo.propTypes = {
	data: PropTypes.object,
};

export default DetailInfo;
