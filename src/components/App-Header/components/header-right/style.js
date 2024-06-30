import styled from "styled-components";

export const RightWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: right;
	color: ${props => props.theme.textColor.primary};

	.more {
		display: flex;
		align-items: center;
		.text {
			padding: 14px 18px;
			border-radius: 30px;
			cursor: pointer;

			transition: background-color 300ms ease;
			&:hover {
				background-color: #f5f5f5;
			}
		}
	}

	.profile {
		position: relative;
		display: flex;
		align-items: center;
		margin-left: 10px;
		border: 1px solid #eee;
		padding: 8px 15px;
		border-radius: 30px;
		cursor: pointer;
		${props => props.theme.mixin.boxShadow}

		.iconUser {
			margin-left: 15px;
		}

		.panel {
			position: absolute;
			top: 54px;
			right: 0;
			padding: 5px 0;
			width: 240px;
			background-color: #fff;
			border-radius: 10px;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 阴影效果 */
			font-size: 14px;
			color: ${props => props.theme.textColor.primary};

			.text {
				width: 100%;
				height: 50px;
				line-height: 50px;
				padding: 0 10px;

				&:hover {
					background-color: #f5f5f5;
				}
			}

			.top {
				display: flex;
				flex-direction: column;
				border-bottom: 1px solid #eee;
			}
		}
	}
`;
