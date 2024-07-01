import styled from "styled-components";

const RoomWarpper = styled.div`
	padding: 0 8px;
	width: ${props => props.$itemWidth};
	margin-bottom: 10px;
	color: #484848;

	.item {
		cursor: pointer;
	}

	.cover {
		width: 100%;
		height: ${props => props.$itemHeight};
		margin-bottom: 5px;

		img {
			width: 100%;
			height: 100%;
		}
	}

	.verify {
		font-size: 14px;
		color: ${props => props.verifyColor};
	}

	.title {
		margin: 10px 0;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.price {
		margin: 5px 0;
	}

	.bottom {
		font-size: 14px;
		.quantity {
			margin: 0 5px;
		}
	}
`;

export default RoomWarpper;
