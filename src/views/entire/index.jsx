import React, { memo, useEffect } from "react";
import { EntireWapper } from "./style";
import EntireFilter from "./components/entire-filter";
import EntireRooms from "./components/entire-rooms";
import EntirePagination from "./components/entire-pagination";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchEntireDataAction } from "@/store/modules/entire";

const Entire = memo(() => {
	const dispatch = useDispatch();

	const { entireData } = useSelector(
		state => ({
			entireData: state.entire.entireData,
		}),
		shallowEqual
	);

	useEffect(() => {
		dispatch(fetchEntireDataAction());
	}, [dispatch]);

	return (
		<EntireWapper>
			<EntireFilter></EntireFilter>
			<EntireRooms
				itemData={entireData?.list}
				totalCount={entireData.totalCount}
			></EntireRooms>
			<EntirePagination
			></EntirePagination>
		</EntireWapper>
	);
});

export default Entire;
