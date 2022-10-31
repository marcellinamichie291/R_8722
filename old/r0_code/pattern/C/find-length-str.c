// выявление длинны строки

int string_length(const char *str)
{
	int i;
	for(i=0;str[i];i++){}
	return i;
}

str[i] это тоже самое что и *(str+i)

// и тоже самое

int string_length(const char *str)
{
	const char *p;
	for(p = str; *p; p++){}
	return p - str;
}
// не понятно



