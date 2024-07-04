import styled from "styled-components";

const PicturesWapper = styled.div`
	overflow: hidden;

	.content {
		position: relative;
		width: 100vw;
		height: 500px;
		display: flex;

		&:hover {
			.backgroundLayer {
				opacity: 1;
			}

			.left:hover .backgroundLayer {
				opacity: 0 !important;
			}
		}

		.left {
			width: 50%;
			height: 100%;

			.cover {
				height: 100%;
			}

			img {
				width: 100%;
				height: 100%;
			}
		}

		.right {
			width: 50%;
			height: 100%;
			display: flex;
			flex-wrap: wrap;

			.cover {
				width: 49%;
				height: 50%;

				img {
					width: 100%;
					height: 100%;
				}
			}
		}
		.left,
		.right {
			position: relative;
			cursor: pointer;
			overflow: hidden;

			.cover {
				position: relative;
				overflow: hidden;

				&:hover {
					img {
						transition: all 800ms ease;
						transform: scale(1.2);
					}
				}
			}
		}
		.backgroundLayer {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.3);
			opacity: 0;
			transition: opacity 500ms ease;
		}
		.morePicture {
			position: absolute;
			bottom: 10px;
			right: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100px;
			height: 30px;
			background-color: #fff;
			font-size: 14px;
			cursor: pointer;
			user-select: none;
			border-radius: 5px;
		}
	}
`;

export default PicturesWapper;
