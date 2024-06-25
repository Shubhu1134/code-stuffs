#include <stdio.h>

int main(){

  // Program to 
  // Check the Collinearity
  // of three points

  int x1,y1,x2,y2,x3,y3;

  printf("\nEnter the Coordinates for (x1,y1): ");
  scanf("%d%d",&x1,&y1);
  printf("\nEnter the Coordinates for (x2,y2): ");
  scanf("%d%d",&x2,&y2);
  printf("\nEnter the Coordinates for (x3,y3): ");
  scanf("%d%d",&x3,&y3);

  if((y2-y1)/(x2-x1) == (y3-y2)/(x3-x2)){
    printf("\nThe Three points are Collinear!");
  }
  else{
    printf("\nThe Three points are not Collinear!");
  }

  return 0;
}
