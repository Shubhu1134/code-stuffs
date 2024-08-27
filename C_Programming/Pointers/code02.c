// Example to show
// pointer works in 
// C

#include <stdio.h>

int main(){

  int *ptr,c;

  c = 22;
  printf("\nAddress of c: %u\n", &c);
  printf("\nValue of c: %d\n", c);

  ptr = &c;
  printf("\nAddress of pointer ptr: %u\n", ptr);
  printf("\nValue of pointer ptr: %d\n", *ptr);
  
  c = 11;
  printf("\nAddress of pointer ptr: %u\n", ptr);
  printf("\nValue of pointer ptr: %d\n", *ptr);

  *ptr=2;
  printf("\nAddress of c: %u\n", &c);
  printf("\nValue of c: %d\n", c);

  return 0;
}

