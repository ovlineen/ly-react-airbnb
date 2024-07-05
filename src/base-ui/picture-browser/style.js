import styled from "styled-components";

const BrowserWapper = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 50px 100px;
	background-color: #333;
	box-sizing: border-box;

	.closure {
		cursor: pointer;
		position: absolute;
		right: 5%;
		top: 10%;
		z-index: 333;
	}

	.carousel {
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		color: #fff;
		box-sizing: border-box;
		padding-bottom: 100px;

		.arrow {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			z-index: 222;
		}

		.btn {
			cursor: pointer;
		}

		.picture {
			position: relative;
			top: 0;
			right: 0;
			left: 0;
			max-width: 105vw;
			width: 100%;
			height: 100%;

			overflow: hidden;

			img {
				position: absolute;
				top: 0;
				right: 0;
				left: 0;
				height: 100%;
				margin: 0 auto;
				cursor: pointer;
				user-select: none;
			}
		}
	}

	.indicator {
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		height: 20%;
		display: flex;
		flex-direction: column;
		padding: 0 230px;
		z-index: 222;

		.list {
			div {
				width: 100%;
			}

			.i-content {
				display: flex;

				.pic {
					cursor: pointer;
					position: relative;
					margin-right: 20px;

					.cover {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色 */
					}

					.active {
						opacity: 0;
					}
				}

				img {
					width: 100px;
					height: 100px;
				}
			}
		}
	}
`;

export default BrowserWapper;
