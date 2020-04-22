function isPositiveDominant(a) {
	let pos = 0;
	let neg = 0;
	let tmp = [];
	for (let i = 0; i < a.length; i++) {
		if (!tmp.includes(a[i])) {
			if (a[i] > 0) {
				pos += 1;
			} else if (a[i] < 0) {
				neg += 1;
			}
			tmp.push(a[i]);
		}
	}
	return (pos > neg ? true : false);
}

Test.assertEquals(isPositiveDominant([1, 1, 1, 1, -3, -4]), false)
Test.assertEquals(isPositiveDominant([5, 99, 832, -3, -4]), true)
Test.assertEquals(isPositiveDominant([5, 0]), true)
Test.assertEquals(isPositiveDominant([0, -4, -1]), false)
Test.assertEquals(isPositiveDominant([1, 2, 3, -1]), true)
Test.assertEquals(isPositiveDominant([1, 0, 0, -1]), false)
Test.assertEquals(isPositiveDominant([5, 4, 3, 0, 0, -1, -1, -2, -2]), true)
Test.assertEquals(isPositiveDominant([52, 52, 52, -3, 2, 2, 2, -4]), false)
Test.assertEquals(isPositiveDominant([3, 3, 3, 3, -1, -1, -1]), false)