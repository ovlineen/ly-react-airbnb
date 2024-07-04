import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEntirData } from "@/services/modules/entire";

// 定义异步操作 fetchEntireDataAction
export const fetchEntireDataAction = createAsyncThunk(
	"fetchData",
	async (payload = 0, { dispatch, getState }) => {
		try {
			const page = payload;

			// 更新当前页面
			dispatch(changeCurrentPageAction(page));

			// 获取数据
			dispatch(changeIsLoadingAction(true));
			const res = await getEntirData(page * 20);
			// 派发同步操作，更新状态
			dispatch(changeEntireAction(res));
			dispatch(changeIsLoadingAction(false));

			// 返回数据，createAsyncThunk 会自动处理 fulfilled 状态
			return res;
		} catch (error) {
			console.error("Failed to fetch data:", error);
			// 返回错误信息
			throw error;
		}
	}
);

const entireSlice = createSlice({
	name: "entire",
	initialState: {
		currentPage: 0,
		entireData: {},
		totalCount: 0,
		isLoading: false,
	},
	reducers: {
		changeCurrentPageAction(state, { payload }) {
			state.currentPage = payload;
		},
		changeEntireAction(state, { payload }) {
			state.entireData = payload;
			state.totalCount = payload.totalCount;
		},

		changeIsLoadingAction(state, { payload }) {
			state.isLoading = payload;
		},
	},
});

export const {
	changeEntireAction,
	changeCurrentPageAction,
	changeIsLoadingAction,
} = entireSlice.actions;

export default entireSlice.reducer;
