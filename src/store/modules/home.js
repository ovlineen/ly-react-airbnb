import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	getGoodPriceInfo,
	getHighScoreInfo,
	getHomeDiscountData,
	getHotrecommendData,
	getLongforData,
	getHomeplusData,
} from "@/services/modules/home";

export const fetchHomeDataAction = createAsyncThunk(
	"feachData",
	(payload, { dispatch }) => {
		getGoodPriceInfo().then(res => {
			dispatch(changeGoodPriceInfoAction(res));
		});
		getHighScoreInfo().then(res => {
			dispatch(changeHighScoreInfoAction(res));
		});

		getHomeDiscountData().then(res => {
			dispatch(changeDiscountDataAction(res));
		});

		getHotrecommendData().then(res => {
			dispatch(changeHotRecommendAction(res));
		});

		getLongforData().then(res => {
			dispatch(changeLongForAction(res));
		});

		getHomeplusData().then(res => {
			dispatch(changeHomePlusAction(res));
		});
	}
);

const homeSlice = createSlice({
	name: "home",
	initialState: {
		goodPriceInfo: {},
		HighScoreInfo: {},
		discountData: {},
		hotrecommend: {},
		longForData: {},
		plusData: {},
	},
	reducers: {
		changeGoodPriceInfoAction(state, { payload }) {
			state.goodPriceInfo = payload;
		},

		changeHighScoreInfoAction(state, { payload }) {
			state.HighScoreInfo = payload;
		},

		changeDiscountDataAction(state, { payload }) {
			state.discountData = payload;
		},

		changeHotRecommendAction(state, { payload }) {
			state.hotrecommend = payload;
		},

		changeLongForAction(state, { payload }) {
			state.longForData = payload;
		},

		changeHomePlusAction(state, { payload }) {
			state.plusData = payload;
		},
	},
});

export const {
	changeGoodPriceInfoAction,
	changeHighScoreInfoAction,
	changeDiscountDataAction,
	changeHotRecommendAction,
	changeLongForAction,
	changeHomePlusAction,
} = homeSlice.actions;

export default homeSlice.reducer;
