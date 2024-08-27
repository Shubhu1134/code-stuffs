// Example to demonstrate
// Pointers in C

#include <stdio.h>

int main(){

  int *ptr,a;

  a = 10;

  ptr = &a;

  printf("Value of a is: %d", a);
  printf("\nAdress of a is: %u", &a);

  printf("Value of ptr is: %u", ptr);
  printf("\nAddress of a is: %d", *ptr);

  return 0;
}
