
// переворот содержимого масива arr

for(i = 0, j = arr_len - 1; i < j; i++, j--) {
	int t;
	t = arr[i]; // складываем первый елемент в t
	arr[i] = arr[j]; // заменяем первый ел последним
	arr[j] = t; // заменяем последний ел первым сохраненным в t
}

