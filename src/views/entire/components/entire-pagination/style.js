import styled from "styled-components";

const PaginationWapper = styled.div`
	margin: 10px 0;
	display: flex;
	justify-content: center;
	.MuiPaginationItem-sizeMedium {
		margin: 0 5px;
	}
	.css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
		background-color: #222;
		color: #fff;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		.text {
			margin-top: 20px;
			font-size: 14px;
			color: ${props => props.theme.textColor.primary};
		}
	}


`;

export default PaginationWapper;
