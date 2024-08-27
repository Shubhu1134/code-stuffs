#include <stdio.h>

int main(){

  int *ptr, a;

  a=10;

  ptr = &a;

  printf("The adress of a is: %p\n", &a);
  printf("The value of a is: %d\n", a);

  printf("The adress of a is: %p\n", ptr);
  printf("The value of a is: %d\n", *ptr);

}
