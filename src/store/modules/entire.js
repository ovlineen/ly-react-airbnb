import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEntirData } from "@/services/modules/entire";

export const fetchEntireDataAction = createAsyncThunk(
	"featchData",
	(payload, { dispatch, getState }) => {
		const currentPage = getState().entire.currentPage;
		getEntirData(currentPage * 20).then(res => {
			dispatch(changeEntireAction(res));
		});
	}
);

const entireSlice = createSlice({
	name: "entire",
	initialState: {
		currentPage: 0,
		entireData: {},
	},
	reducers: {
		changeEntireAction(state, { payload }) {
			state.entireData = payload;
		},
	},
});

export const { changeEntireAction } = entireSlice.actions;

export default entireSlice.reducer;
