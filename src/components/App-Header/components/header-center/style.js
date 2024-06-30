import styled from "styled-components";

export const CenterWrapper = styled.div`
	display: flex;
	width: 330px;
	height: 48px;
	border: 1px solid #eee;
	justify-content: space-between;
	align-items: center;
	color: ${props => props.theme.textColor.secondary};
	font-size: 14px;
	padding: 0 10px;
	border-radius: 30px;
	${props => props.theme.mixin.boxShadow}
	cursor: pointer;

	.text {
		padding: 0 16px;
	}

	.line {
		border-right: 1px solid #ccc;
	}

	.people {
		display: flex;
		align-items: center;
		color: #6a6a6a;

		.iconSerch {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 32px;
			height: 32px;
			border-radius: 20px;
			background-color: ${props => props.theme.color.primary};
		}
	}
`;
