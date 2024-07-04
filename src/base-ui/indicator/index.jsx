import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import IndicatorWapper from "./style";

const Indicator = memo(props => {
	const { selectIndex = 0 } = props;
	const contentRef = useRef();

	useEffect(() => {
		// 拿到传递过来第一个元素
		const selectItemEl = contentRef.current.children[selectIndex];
		// 获取它的左边的距离
		const itemLeft = selectItemEl.offsetLeft;
		// 获取元素宽度
		const itemWidth = selectItemEl.clientWidth;

		// console.log(itemLeft, itemWidth);

		// 获取父元素宽度
		const contentWidth = contentRef.current.clientWidth;
		const contentScroll = contentRef.current.scrollWidth;

		let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;
		console.log(distance);
		contentRef.current.style.transform = `translateX(${-distance}px)`;

		if (distance < 0) distance = 0;
		const totaDistance = contentScroll - contentWidth;
		if (distance > totaDistance) distance = totaDistance;
	}, [selectIndex]);

	return (
		<IndicatorWapper>
			<div className="i-content" ref={contentRef}>
				{props.children}
			</div>
		</IndicatorWapper>
	);
});

Indicator.propTypes = {
	selectIndex: PropTypes.number,
};

export default Indicator;
