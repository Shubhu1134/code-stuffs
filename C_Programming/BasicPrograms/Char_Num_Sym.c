#include <stdio.h>

// Program to find
// the entered Data
// is Number, Character
// or a Symbol

int main(){

  char d;

  printf("\nEnter Any Character: ");
  scanf("%c", &d);

  if(d>=65 && d<=90 || d>=97 && d<=122 ){
    printf("\nThis is a Character!");
  }
  else if(d>=48 && d<=57 ){
    printf("\nThis is a Number!");
  }
  else{
    printf("\nIt's a Symbol!");
  }

  return 0;

}
