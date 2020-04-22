function upwardTrend(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] == 'string') {
			return 'Strings not permitted!';
			break;
		} else if (i > 0 && arr[i] < arr[i - 1]) {
			return false;
		}
	}
	return true;
}

//Test Cases
Test.assertEquals(upwardTrend([1, 2, 3, 4, 5, 6]), true)
Test.assertEquals(upwardTrend([1, 3, 2, 5, 6, 7]), false)
Test.assertEquals(upwardTrend([1, 2, 3, 4, 5, "6", 7, 8, 9]), "Strings not permitted!")
Test.assertEquals(upwardTrend([1, 3, 5, 7, 9]), true)
Test.assertEquals(upwardTrend([10, 12, 13, 15, 20]), true)
Test.assertEquals(upwardTrend([6, 9, 11, 15, 12]), false)