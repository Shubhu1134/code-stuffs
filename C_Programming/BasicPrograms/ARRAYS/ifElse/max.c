#include<stdio.h>
int main(){
    
    int num1, num2, num3, max;
    printf("enter a number num1 : ");
    scanf("%d",&num1);

    printf("enter a number num2 : ");
    scanf("%d",&num2);

    printf("enter a number num3 : ");
    scanf("%d",&num3);

    if(num1 > num2 ){
        if(num1 > num3)
        max = num1;
    }else if (num2 > num3){
        if( num2 > num1);
        max = num2;
    } else {
        max = num3;
    }printf("highest number is : %d",max);
}