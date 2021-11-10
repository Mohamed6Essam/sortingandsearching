var arr = [12, 20, 5, 2, 69, 70];

function Insertionsort(arr) {
	var i, min, j;

	for (let i = 1; i < arr.length; i++) {
		min = arr[i];
		j = i - 1;

		while (j >= 0 && arr[j] > min) {
			arr[j + 1] = arr[j];
			j = j - 1;
		}

		arr[j + 1] = min;
	}
	return arr;
}
console.log(Insertionsort(arr));
