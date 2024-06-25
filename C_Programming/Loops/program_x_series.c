#include <stdio.h>
#include <math.h>

int main(){

  // program to calc
  // sin x for given x,
  // input will be x 
  // and a positive int n
  // series: x^n sin x = x - x3/3! + x^5/5! + x^7/7!...

  int i,j, x, n, odd=1;
  long int fact;

  double series;

  printf("Enter the value for x: ");
  scanf("%d", &x);

  printf("\nEnter the value for n: ");
  scanf("%d", &n);

  series = x;

  for(i=0; i<n; i++){
    odd += 2;
    fact = 1;
    if(i%2 == 0){
      for(j=1; j<=odd; j++){
        fact *= j;
      }
      series -= pow(x, odd)/fact;
      printf("\n symbol is: -");
    }
    else{
      for(j=1; j<=odd; j++){
        fact *= j;
      }
      series += pow(x, odd)/fact;
      printf("\n symbol is: +");
    }
  }

  printf("\nThe series output is: %.4lf", series);

  return 0;
}
