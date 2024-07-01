import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	getGoodPriceInfo,
	getHighScoreInfo,
	getHomeDiscountData,
	getHotrecommendData,
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
	}
);

const homeSlice = createSlice({
	name: "home",
	initialState: {
		goodPriceInfo: {},
		HighScoreInfo: {},
		discountData: {},
		hotrecommend: {},
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
	},
});

export const {
	changeGoodPriceInfoAction,
	changeHighScoreInfoAction,
	changeDiscountDataAction,
	changeHotRecommendAction,
} = homeSlice.actions;

export default homeSlice.reducer;
