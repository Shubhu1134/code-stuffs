#include<stdio.h>
int main(){
    
    int a,b,c,sum;
    printf("ENTER THE ANGLES A:");
    scanf("%d",&a);

    printf("ENTER THE ANGLES B :");
    scanf("%d",&b);

    printf("ENTER THE ANGLES C:");
    scanf("%d",&c);

    sum = a+b+c;

    if(sum == 180){
        printf("TRIANGLE IS VALID");
    }
    else{
        printf("TRIANGLE IS NOT VALID");
    }


}