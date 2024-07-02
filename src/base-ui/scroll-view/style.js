import styled from "styled-components";

const ViewWapper = styled.div`
	position: relative;
	overflow: hidden;

	button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		border: 0;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
		z-index: 111;
		${props => props.theme.mixin.boxShadow}
		width: 28px;
		height: 28px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
	}

	.left {
		left: 0;
	}

	.right {
		right: 0;
	}

	.children {
		display: flex;
	}

	.scroll-content {
		display: flex;
		width: 100%;
		transition: all 250ms ease;
	}
`;

export default ViewWapper;
