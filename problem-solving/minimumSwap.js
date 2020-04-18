/*
Converting One Binary String to Another
Write a function that returns the minimum number of swaps to convert the first binary string into the second.

Examples
minSwaps("1100", "1001") ➞ 1

minSwaps("110011", "010111") ➞ 1

minSwaps("10011001", "01100110") ➞ 4
Notes
Both binary strings will be of equal length.
Both binary strings will have an equal number of zeroes and ones.
A swap is switching two elements in a string (swaps do not have to be adjacent).
*/

function minSwaps(s1, s2) {
		var numberOfSwap = 0;
		for(let i = 0; i<s1.length; i++) {
					if(s1[i] !== s2[i]) {
									numberOfSwap++;
								}
				}
		return numberOfSwap/2;
}

Test.assertEquals(minSwaps("1001", "1001"), 0)
Test.assertEquals(minSwaps("1100", "1001"), 1)
Test.assertEquals(minSwaps("110011", "010111"), 1)
Test.assertEquals(minSwaps("1100", "0011"), 2)
Test.assertEquals(minSwaps("110011", "001111"), 2)
Test.assertEquals(minSwaps("10011001", "01100101"), 3)
Test.assertEquals(minSwaps("11111000001100", "10110010100110"), 3)
Test.assertEquals(minSwaps("01100100100111", "10110010100110"), 3)
Test.assertEquals(minSwaps("11110011001", "01100110111"), 3)
Test.assertEquals(minSwaps("100110001", "010100110"), 3)
Test.assertEquals(minSwaps("100101011", "011001101"), 3)
Test.assertEquals(minSwaps("10011001", "01100110"), 4)
