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
			object-fit: cover;
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

	.swiper {
		position: relative;
		overflow: hidden;

		&:hover .control {
			opacity: 1;
		}

		.control {
			opacity: 0;
			z-index: 222;
			display: flex;
			position: absolute;
			color: #fff;
			width: 100%;
			height: 100%;
			justify-content: space-between;

			.btn {
				display: flex;
				align-items: center;
				padding: 0 10px;
				width: 20%;
				height: 170px;
				justify-content: center;
				&:hover {
					background-color: rgba(0, 0, 0, 0.1); /* 半透明黑色 */
				}
			}
		}

		.indicator {
			z-index: 22;
			position: absolute;
			right: 0;
			left: 0;
			bottom: 10px;
			display: flex;
			justify-content: center;
			width: 100%;

			.item {
				width: 25%;
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 0 5px;
			}

			.dot {
				display: inline-block;
				width: 7px;
				height: 7px;
				border-radius: 50%;
				background-color: #fff;
			}

			.active {
				width: 9px;
				height: 9px;
			}
		}
	}
`;

export default RoomWarpper;
