// import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import FilterWapper from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";

const EntireFilter = memo(props => {
	const [selectItem, setSelectItem] = useState([]);

	function filterItemClickhandle(item) {
		const newItem = [...selectItem];

		if (newItem.includes(item)) {
			const index = newItem.findIndex(filterItem => filterItem === item);
			newItem.splice(index, 1);
		} else {
			newItem.push(item);
		}
		setSelectItem(newItem);
	}

	return (
		<FilterWapper>
			<div className="filter">
				{filterData.map(item => (
					<div
						key={item}
						onClick={e => filterItemClickhandle(item)}
						className={classNames("filterItem", {
							filterActive: selectItem.includes(item),
						})}
					>
						{item}
					</div>
				))}
			</div>
		</FilterWapper>
	);
});

// EntireFilter.propTypes = {};

export default EntireFilter;
