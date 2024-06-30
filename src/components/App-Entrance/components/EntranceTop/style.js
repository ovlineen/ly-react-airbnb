import styled from "styled-components";

const EntarceTopWarpper = styled.div`
	height: 50px;
	background-color: #fff;
	color: ${props => props.theme.textColor.primary};
	width: 568px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	padding: 0 20px;

	.title {
		flex: 1;
		text-align: center;
		font-size: 16px;
	}

	.closure {
		cursor: pointer;
		padding: 10px;
		border-radius: 30px;
		&:hover {
			background-color: #f5f5f5;
		}
	}
`;

export default EntarceTopWarpper;
