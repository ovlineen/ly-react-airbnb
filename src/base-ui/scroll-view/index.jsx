// import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import ViewWapper from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left.jsx";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

/* 
	胜利🤔 这真是个令人懊恼的问题呢，配合 ChatGPT 结合自己的思路写出这样的代码 
	最开始思路是这样的，子组件传递过来一个个 item 那么 我们拿到 scrollContentRef 的 children 就能拿到所有子元素的数组，
	再根索引值去匹配它的偏移量。但是在写 longfor 组件时发现了一个严重的问题。我们不能将一个个子元素传递过来。因为在个 longfor-item
	设置宽度时，如果不包裹一个父元素的话它的宽度会不生效。
	为了解决这个问题，只能在这里包裹的 Div 标签，以达到解决这个问题的办法。
*/

const ScrollView = memo(props => {
	const [showLeft, setShowLeft] = useState(false);
	const [showRight, setShowRight] = useState(false);
	const [posIndex, setPosIndex] = useState(0);
	const totalDistanceRef = useRef();

	const scrollContentRef = useRef();
	useEffect(() => {
		const scrollWidth = scrollContentRef.current.scrollWidth;
		const clientWidth = scrollContentRef.current.clientWidth;
		const totalDistance = scrollWidth - clientWidth; // 计算内容的总宽度与可见宽度的差值
		totalDistanceRef.current = totalDistance;

		setShowRight(totalDistance > 0);
	}, [props.children]);

	function leftClickHandle() {
		const newIndex = posIndex - 1;
		const newEL =
			scrollContentRef.current.querySelectorAll(".children > *")[
				newIndex
			];
		const newOffsetLeft = newEL.offsetLeft;
		scrollContentRef.current.style.transform = `translateX(-${newOffsetLeft}px)`;
		setPosIndex(newIndex);
		setShowRight(totalDistanceRef.current > newOffsetLeft);
		setShowLeft(newOffsetLeft > 0);
	}

	function rightClickHandle() {
		const newIndex = posIndex + 1;
		const newEl =
			scrollContentRef.current.querySelectorAll(".children > *")[
				newIndex
			];
		const newOffsetLeft = newEl.offsetLeft;
		scrollContentRef.current.style.transform = `translateX(-${newOffsetLeft}px)`;
		setPosIndex(newIndex);
		setShowLeft(newOffsetLeft > 0);
		setShowRight(totalDistanceRef.current > newOffsetLeft);
	}

	return (
		<ViewWapper>
			{showLeft && (
				<button className="left" onClick={leftClickHandle}>
					<IconArrowLeft></IconArrowLeft>
				</button>
			)}
			{showRight && (
				<button className="right" onClick={rightClickHandle}>
					<IconArrowRight></IconArrowRight>
				</button>
			)}

			<div className="scroll-content" ref={scrollContentRef}>
				<div className="children">{props.children}</div>
			</div>
		</ViewWapper>
	);
});

ScrollView.propTypes = {};

export default ScrollView;
