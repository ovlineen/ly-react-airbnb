import React, { memo, useEffect } from "react";
import HomeWarpper from "./style";
import HomeBanner from "./components/HomeBanner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionHeader from "@/components/section-header";
import SectionRooms from "../../components/section-rooms";

const Home = memo(() => {
	const dispatch = useDispatch();

	const { goodPriceInfo } = useSelector(
		state => ({
			goodPriceInfo: state.home.goodPriceInfo,
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
				<SectionHeader title={goodPriceInfo.title}></SectionHeader>
				<SectionRooms roomList={goodPriceInfo?.list}></SectionRooms>
			</div>
		</HomeWarpper>
	);
});

export default Home;
