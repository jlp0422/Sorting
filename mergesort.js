function split(arr) {
	var halfOne;
	var halfTwo;
	var half = arr.length/2
	if (arr.length % 2 !== 0) half = half-.5
	halfOne = arr.slice(0, half)
	halfTwo = arr.slice(half, arr.length)
	return [halfOne, halfTwo]
}

function merge(arr1, arr2) {

  return arr1.concat(arr2)
}
