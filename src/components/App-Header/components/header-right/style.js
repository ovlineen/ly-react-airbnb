import styled from "styled-components";

export const RightWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: right;
	color: ${props => props.theme.textColor.primary};

	.more {
		display: flex;
		align-items: center;

		span {
			height: 18px;
			line-height: 18px;
			padding: 12px 15px;
			border-radius: 22px;
			cursor: pointer;
			&:hover {
				background-color: #f5f5f5;
			}
		}
	}

	.profile {
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
	}
`;
