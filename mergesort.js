/* eslint-disable */

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
	var finalArray = []
  var left = arr1[0]
  var right = arr2[0]
  if (left < right) {
    finalArray.push(left)
    if (arr1.slice(1).length) {
      finalArray = finalArray.concat(merge(arr1.slice(1), arr2))
    } else {
      finalArray = finalArray.concat(arr2)
    }
  }
  else {
    finalArray.push(right)
    if (arr2.slice(1).length) {
      finalArray = finalArray.concat(merge(arr1, arr2.slice(1)))
    } else {
      finalArray = finalArray.concat(arr1)
    }
  }
	return finalArray
}

function mergeSort(arr) {
  return merge(split(arr))
}
