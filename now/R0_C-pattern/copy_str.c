<!-- 
	фк копирует строку в отведенную область памяти
	фк принимает 
		адреса
			области памяти - destination
			строки - source

 -->
void string_copy(char *dest, const char *src)
{
	int i;
	for(i=0; src[i]; i++) {dest[i] = src[i];}
	dest[i] = 0;
	<!-- 
		превращение масива dest в корректную строку
		речь про ограничивающий ноль
	-->
}
<!-- 
	тоже самое но на указателях и нихкуя не понятно
 -->
void string_copy(char *dest, const char *src)
{
	while(*src) {
		*dest = *src;
		dest++
		src++
	}
	*dest = 0;
}
<!-- тоже нихуя не понятно -->
void string_copy(char *dest, const char *src)
{
	for(; *src; dest++, src++) *dest = *src;
	*dest = 0;
}
<!-- тоже нихуя не понятно -->
void string_copy(char *dest, const char *src)
{
	while((*dest++ = *src++));
}
