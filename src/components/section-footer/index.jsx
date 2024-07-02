import PropTypes from "prop-types";
import React, { memo } from "react";
import FooterWapper from "./style";
import IconMore from "@/assets/svg/icon_more";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo(props => {
	const { name = "", color = "#000" } = props;

	const navigate = useNavigate();
	function onMoreClickHandle() {
		navigate("/entire");
	}

	return (
		<FooterWapper $color={color}>
			<div className="name" onClick={onMoreClickHandle}>
				查看{name}更多信息
			</div>
			<IconMore></IconMore>
		</FooterWapper>
	);
});

SectionFooter.propTypes = {
	name: PropTypes.string,
};

export default SectionFooter;
