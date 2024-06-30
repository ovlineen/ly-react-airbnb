import styled from "styled-components";

const EntranceBottomWarpper = styled.div`
	width: 568px;
	padding: 20px;
	background-color: #fff;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	border-top: 1px solid ${props => props.theme.borderColor.primary};
	h2 {
		font-size: 22px;
		font-weight: 400;
	}

	.frame {
		width: 520px;
		height: 48px;
		margin: 10px 0;
		border: 1px solid #222;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		input {
			width: 100%;
			height: 100%;
			outline: none;
			border: 1px solid #222;
			padding-left: 10px;
		}
	}

	.confirm {
		color: #fff;
		background-color: #de1262;
		border: 0;
	}

	.phrase {
		margin-top: 8px;
		font-size: 14px;
	}

	.segmentation {
		display: flex;
		align-items: center;

		&::before {
			content: "";
			width: 48%;
			height: 1px;
			background-color: rgb(221, 221, 221);
			margin-right: 10px;
		}

		&::after {
			content: "";
			width: 48%;
			height: 1px;
			background-color: rgb(221, 221, 221);
			margin-left: 10px;
		}
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
