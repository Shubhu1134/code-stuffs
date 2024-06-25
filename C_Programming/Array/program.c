#include <stdio.h>

int main(){

  // Program to test some
  // array basics
  
  int i;
  char some[10];

  some[0] = '1';
  some[1] = '2';
  some[3] = '3';
  some[4] = '4';
  some[5] = '5';
  some[6] = '6';

  for(i=0; i<7; i++){
    printf("%d index value is: %d\n", i, some[i] * 2);
  }

  return 0;
}
