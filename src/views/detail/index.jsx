import React, { memo } from "react";
import DetailWapper from "./style";
import DetailPictures from "./components/detail-pictures";
import DetailInfo from "./components/detail-info";
import { shallowEqual, useSelector } from "react-redux";

const Detail = memo(() => {
	const { detail } = useSelector(
		state => ({
			detail: state.detail.detail,
		}),
		shallowEqual
	);

	return (
		<DetailWapper>
			<DetailPictures data={detail}></DetailPictures>
			<div className="container">
				<DetailInfo data={detail}></DetailInfo>
			</div>
		</DetailWapper>
	);
});

export default Detail;
