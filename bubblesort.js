// function bubbleSort(arr) {
// 	var min = [];
// 	if (arr.length) {
// 		min.push(arr.reduce(function(a, b) {
// 				return Math.min(a, b);
// 			}));
// 		arr.splice(arr.indexOf(min[min.length - 1]), 1);
// 		min = min.concat(bubbleSort(arr));
// 	} else {
// 		return min
// 	}
// 	return min
// }


function bubbleSort(arr) {
	arr.forEach(function(number) {
		swap(arr)
	})
	return arr
}

function swap(arr) {
	for (i = 0; i < arr.length; i++) {
		var x = arr[i]
		var y = arr[i+1]
		if (x > y) {
			arr[i+1] = x
			arr[i] = y
			return arr
		}
	}
	return arr
}
