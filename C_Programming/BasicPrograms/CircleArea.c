#include <stdio.h>
int main(){

int r;

float area,pi=3.141;

printf ("enter value of radius: ");
scanf ("%d", &r);

area = pi*r*r;
//area of circle 

printf ("r:%d area:%.f \n",r,area);
}