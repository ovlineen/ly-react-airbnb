import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import TabsWarpper from "./style";
import classNames from "classnames";

const SectionTabs = memo(props => {
	const { tabs = [], tabClick } = props;
	const [currentIndex, setCurrentIndex] = useState(0);

	function itemClickHandle(index, name) {
		setCurrentIndex(index);
		tabClick(index, name);
	}

	return (
		<TabsWarpper>
			{tabs.map((item, index) => (
				<div
					onClick={e => itemClickHandle(index, item)}
					key={item}
					className={classNames("tab", {
						active: index === currentIndex,
					})}
				>
					{item}
				</div>
			))}
		</TabsWarpper>
	);
});

SectionTabs.propTypes = {
	tabs: PropTypes.array,
};

export default SectionTabs;
