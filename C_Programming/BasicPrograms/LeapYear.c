#include <stdio.h>
int main(){

    int a;

printf("ENTER THE YEAR DIGITS :");
scanf("%d",&a);

if(a%4==0){
    printf("THIS IS A LEAP YEAR");
}
else{
    printf("this is not a leap year");
}
}