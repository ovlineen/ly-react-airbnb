import React, { memo, useEffect } from "react";
import HomeWarpper from "./style";
import HomeBanner from "./components/HomeBanner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./components/HomeSectionV1";
import HomeSectionV2 from "./components/HomeSectionV2";
import HomeLongFor from "./components/HomeLongfor";
import HomeSectionV3 from "./components/HomeSectionV3";

const Home = memo(() => {
	const dispatch = useDispatch();

	const {
		goodPriceInfo,
		highScoreInfo,
		discountData,
		hotrecommendData,
		longForData,
		plusData,
	} = useSelector(
		state => ({
			goodPriceInfo: state.home.goodPriceInfo,
			highScoreInfo: state.home.HighScoreInfo,
			discountData: state.home.discountData,
			hotrecommendData: state.home.hotrecommend,
			longForData: state.home.longForData,
			plusData: state.home.plusData,
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
				<HomeLongFor infoData={longForData}></HomeLongFor>

				<HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
				<HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>

				<HomeSectionV3 infoData={plusData}></HomeSectionV3>
			</div>
		</HomeWarpper>
	);
});

export default Home;
