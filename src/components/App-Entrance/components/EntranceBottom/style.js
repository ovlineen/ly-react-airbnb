import styled from "styled-components";

const EntranceBottomWarpper = styled.div`
	width: 568px;
	padding: 20px;
	margin-top: -8px;
	background-color: #fff;
	border-radius: 5px;
	border-top: 1px solid ${props => props.theme.borderColor.primary};
	h2 {
		font-size: 22px;
		font-weight: 400;
	}

	.frame {
		width: 520px;
		height: 48px;
		background-color: pink;
	}

	.phrase {
		margin-top: 8px;
		font-size: 14px;
	}

	.policy {
		display: flex;
		font-size: 14px;
		margin: 24px 0;
		.iconCheck {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 22px;
			height: 22px;
			background-color: ${props => props.theme.textColor.secondary};
			margin-right: 10px;
			padding: 10px;
		}
	}
`;

export default EntranceBottomWarpper;
