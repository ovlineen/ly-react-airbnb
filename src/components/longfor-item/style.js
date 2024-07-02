import styled from "styled-components";

const LongForWapper = styled.div`
	display: flex;
	overflow: hidden;

	.longfor {
		display: flex;
		width: 100vw;
	}
	.item {
		position: relative;
		width: 200px;
		height: 250px;
		background-position: center;
		background-size: cover;
		margin-right: 10px;
		user-select: none;
		cursor: pointer;

		img {
			width: 100vw;
			height: 100vh;
		}

		.info {
			position: absolute;
			bottom: 10px;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 10px;
			color: #fff;
		}
	}
`;

export default LongForWapper;
