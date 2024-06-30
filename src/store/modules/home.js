import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGoodPriceInfo } from "../../services/modules/home";

export const fetchHomeDataAction = createAsyncThunk("feachData", async () => {
	const res = await getGoodPriceInfo();
	return res;
});

const homeSlice = createSlice({
	name: "home",
	initialState: {
		goodPriceInfo: {}, // 初始状态
	},
	reducers: {
		changeGoodPriceInfoAction(state, { payload }) {
			state.goodPriceInfo = payload;
		},
	},

	extraReducers: builder => {
		builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
			state.goodPriceInfo = payload;
		});
	},
});

export default homeSlice.reducer;
