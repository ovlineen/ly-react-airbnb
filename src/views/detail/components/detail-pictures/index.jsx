import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import PicturesWapper from "./style";
import PictureBrowser from "@/base-ui/picture-browser";

const DetailPictures = memo(props => {
	const { data } = props;
	const [showBrowser, setShowBrowser] = useState(false);

	return (
		<PicturesWapper>
			<div className="content">
				<div className="left">
					<div className="cover">
						<div className="backgroundLayer"></div>
						<img src={data?.picture_urls[0]} alt="" />
					</div>
				</div>
				<div className="right">
					{data?.picture_urls.slice(1, 5).map(item => (
						<div className="cover" key={item}>
							<div className="backgroundLayer"></div>
							<img src={item} alt="" />
						</div>
					))}
				</div>

				<div
					className="morePicture"
					onClick={e => setShowBrowser(true)}
				>
					显示更多图片
				</div>
			</div>

			{showBrowser && (
				<PictureBrowser
					isShowBrowser={setShowBrowser}
					picture_urls={data?.picture_urls}
				></PictureBrowser>
			)}
		</PicturesWapper>
	);
});

DetailPictures.propTypes = {
	data: PropTypes.object,
};

export default DetailPictures;
