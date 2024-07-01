import lyRequest from "../index";

export function getGoodPriceInfo() {
	return lyRequest.get({
		url: "/home/goodprice",
	});
}

export function getHighScoreInfo() {
	return lyRequest.get({
		url: "/home/highscore",
	});
}

export function getHomeDiscountData() {
	return lyRequest.get({
		url: "/home/discount",
	});
}

export function getHotrecommendData() {
	return lyRequest.get({
		url:"/home/hotrecommenddest"
	})
}
