#include<stdio.h>
int main(){

int n,e,i;
long int p;

printf("enter base : ");
scanf("%d",&n);

printf("enter the exponent : ");
scanf("%d",&e);

p=1;

for(i=1;i<e;i++){
    p = p*n;
}printf("%d to the power is %d : %ld",n,e,p);

return 0;
}