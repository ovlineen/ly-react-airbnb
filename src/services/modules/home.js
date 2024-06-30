import lyRequest from "../index";

export function getGoodPriceInfo() {
	return lyRequest.get({
		url: "/home/goodprice",
	});
}
