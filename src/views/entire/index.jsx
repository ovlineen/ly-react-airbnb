import React, { memo, useEffect } from "react";
import { EntireWapper } from "./style";
import EntireFilter from "./components/entire-filter";
import EntireRooms from "./components/entire-rooms";
import EntirePagination from "./components/entire-pagination";
import { useDispatch } from "react-redux";
import { fetchEntireDataAction } from "@/store/modules/entire";

const Entire = memo(() => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchEntireDataAction());
	}, [dispatch]);

	return (
		<EntireWapper>
			<EntireFilter></EntireFilter>
			<EntireRooms></EntireRooms>
			<EntirePagination></EntirePagination>
		</EntireWapper>
	);
});

export default Entire;
