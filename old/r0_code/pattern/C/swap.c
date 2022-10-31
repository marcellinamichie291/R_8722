// C обмен значениями между переменными

void swap(int *a, int *b) 
{
	int t;
	t = *a;
	*a = *b;
	*b = t;
}
	// вызов
	swap(&x, &y);