#include <stdio.h>
void main()
{

    int i = 1;
    int *p = &i;

    printf("%p", *p);
}