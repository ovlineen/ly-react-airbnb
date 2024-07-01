import React, { memo, useEffect } from "react";
import HomeWarpper from "./style";
import HomeBanner from "./components/HomeBanner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./components/HomeSectionV1";

import HomeSectionV2 from "./components/HomeSectionV2";

const Home = memo(() => {
	const dispatch = useDispatch();

	const { goodPriceInfo, highScoreInfo, discountData, hotrecommendData } =
		useSelector(
			state => ({
				goodPriceInfo: state.home.goodPriceInfo,
				highScoreInfo: state.home.HighScoreInfo,
				discountData: state.home.discountData,
				hotrecommendData: state.home.hotrecommend,
			}),
			shallowEqual
		);

	useEffect(() => {
		dispatch(fetchHomeDataAction());
	}, [dispatch]);

	return (
		<HomeWarpper>
			<HomeBanner></HomeBanner>
			<div className="container">
				<HomeSectionV2 infoData={discountData}></HomeSectionV2>
				<HomeSectionV2 infoData={hotrecommendData}></HomeSectionV2>

				<HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
				<HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>
			</div>
		</HomeWarpper>
	);
});

export default Home;
