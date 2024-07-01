import styled from "styled-components";

const EntarceWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色 */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 222;
`;

export default EntarceWrapper;
