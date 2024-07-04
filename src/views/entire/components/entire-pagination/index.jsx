// import PropTypes from "prop-types";
import React, { memo } from "react";
import PaginationWapper from "./style";
import { Pagination } from "@mui/material";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchEntireDataAction } from "@/store/modules/entire";

const EntirePagination = memo(props => {
	const { currentPage, totalCount } = useSelector(
		state => ({
			currentPage: state.entire.currentPage,
			totalCount: state.entire.totalCount,
		}),
		shallowEqual
	);

	const startCount = currentPage * 20 + 1;
	const endCount = (currentPage + 1) * 20;

	const dispatch = useDispatch();
	function pageHandleChange(event, value) {
		window.scrollTo(0, 0);
		dispatch(fetchEntireDataAction(value - 1));
	}

	return (
		<PaginationWapper>
			<div className="content">
				<Pagination count={15} onChange={pageHandleChange} />
				<p className="text">
					第 {startCount} - {endCount} 个房源，共超过 {totalCount} 个
				</p>
			</div>
		</PaginationWapper>
	);
});

EntirePagination.propTypes = {};

export default EntirePagination;
