#include <stdio.h>

int main(){

  // program to find
  // factorial
  
  int i, n;
  long int fact = 1;

  printf("Enter the number: ");
  scanf("%d", &n);

  for(i=1; i<=n; i++){
    fact *= i;
  }

  printf("The factorial of %d is: %ld", n,fact);

  return 0;
}
