import lyRequest from "../request";

export function getEntirData(offset = 0, size = 20) {
	return lyRequest.get({
		url: "entire/list",
		parmas: {
			offset,
			size,
		},
	});
}
