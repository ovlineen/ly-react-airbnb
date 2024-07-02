import styled from "styled-components";

const FooterWapper = styled.div`
	display: flex;
	font-size: 14px;
	color: ${props => props.$color};
	margin-bottom: 15px;

	div {
		cursor: pointer;
	}

	.iconMore {
		display: flex;
		margin-left: 5px;
		align-items: center;
	}
`;

export default FooterWapper;
