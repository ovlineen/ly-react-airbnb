import styled from "styled-components";

const FooterWarpper = styled.footer`
	.top {
		margin-top: 20px;
		padding-top: 20px;
		border-top: 1px solid #eee;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #eee;
		padding-bottom: 20px;

		.title {
			margin-bottom: 10px;
			font-size: 14px;
		}

		li {
			list-style: none;
			color: #6a6a6a;
			margin: 5px 0;
		}
	}

	.bottom {
		height: 50px;
		line-height: 50px;
		font-size: 12px;
		display: flex;
		justify-content: center;

		a,
		span {
			color: #6a6a6a;
			margin: 0 3px;
		}
	}
`;

export default FooterWarpper;
