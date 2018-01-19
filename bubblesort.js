function bubbleSort(arr) {
	var min = [];
	if (arr.length) {
		min.push(arr.reduce(function(a, b) {
				return Math.min(a, b);
			}));
		arr.splice(arr.indexOf(min[min.length - 1]), 1);
		min = min.concat(bubbleSort(arr));
	} else {
		return min
	}
	return min
}
