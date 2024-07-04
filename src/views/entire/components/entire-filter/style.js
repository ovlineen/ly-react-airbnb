import styled from "styled-components";

const FilterWapper = styled.div`
	margin: 10px 0;
	border-bottom: 1px solid #eee;

	.filter {
		display: flex;
		margin-left: 30px;
		margin-bottom: 10px;

		.filterItem {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 5px 10px;
			border: 1px solid #d8d8d8;
			margin-right: 5px;
			user-select: none;
			cursor: pointer;
		}

		.filterActive {
			color: #fff;
			background-color: ${props => props.theme.color.secondary};
		}
	}
`;

export default FilterWapper;
