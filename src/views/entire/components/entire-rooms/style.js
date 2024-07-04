import styled from "styled-components";

const roomsWapper = styled.div`
	position: relative;
	padding: 5px 20px;

	.totaltitle {
		font-size: 22px;
		margin-bottom: 10px;
		margin-left: 10px;
	}

	.room {
		display: flex;
		flex-wrap: wrap;
	}

	> .cover {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.8);
	}
`;

export default roomsWapper;
