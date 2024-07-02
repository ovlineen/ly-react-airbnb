import PropTypes from "prop-types";
import React, { memo } from "react";
import LongForWapper from "./style";
import ScrollView from "../../base-ui/scroll-view";

const LongForItem = memo(props => {
	const { itemData } = props;
	return (
		<LongForWapper>
			<ScrollView>
				{itemData?.map(item => (
					<div
						className="item"
						key={item.picture_url}
						style={{
							backgroundImage: `url(${item.picture_url})`,
						}}
					>
						<div className="info">
							<h3 className="title">{item.city}</h3>
							<p className="price">{item.price}</p>
						</div>
					</div>
				))}
			</ScrollView>
		</LongForWapper>
	);
});

LongForItem.propTypes = {
	itemData: PropTypes.array,
};

export default LongForItem;
