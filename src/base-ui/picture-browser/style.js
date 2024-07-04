import styled from "styled-components";

const BrowserWapper = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #333;

	.closure {
		cursor: pointer;
		position: absolute;
		right: 5%;
		top: 10%;
		z-index: 222;
	}

	.carousel {
		position: relative;
		width: 100%;
		height: 100%;
		justify-content: space-between;
		align-items: center;
		color: #fff;

		.arrow {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.btn {
			cursor: pointer;
		}

		.picture {
			position: relative;
			width: 100%;
			max-width: 105vw;
			height: 100%;
			overflow: hidden;
			z-index: 111;

			img {
				padding: 6.875rem;
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
`;

export default BrowserWapper;
