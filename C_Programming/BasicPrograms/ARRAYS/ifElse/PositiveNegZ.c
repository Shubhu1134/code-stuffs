#include<stdio.h>
int main(){

    int num;
    printf(" enter a number : ");
    scanf("%d",&num);

    if(num > 0){
        printf("number is positive %d",num);
    }else if (num < 0){
        printf("number is negative %d",num);
    }else{
        printf("number you entered is 0 \n ");
    }
    return 0;

}