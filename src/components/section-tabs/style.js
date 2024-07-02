import styled from "styled-components";

const TabsWarpper = styled.div`
	display: flex;
	margin: 20px 0;
	font-size: 14px;

	.tab {
		margin-right: 10px;
		padding: 8px 20px;
		white-space: nowrap;
		border: 1px solid #d8d8d8;
		cursor: pointer;
		${props => props.theme.mixin.boxShadow}
		user-select: none;
	}
	.active {
		border: 1px solid transparent;
		color: #fff;
		background-color: ${props => props.theme.color.secondary};
	}
`;

export default TabsWarpper;
