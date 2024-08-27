#include<stdio.h>
int main(){

    int ammount;

     scanf("%d",&ammount);

    printf("\n required notes of Rs.100:%d",ammount/100);
    printf("\n required notes of Rs.50:%d",(ammount%100)/50);
    printf("\n required notes of Rs.10:%d",((ammount%100)%50)/10);
    printf("\n reamining ammount Rs.  :%d",((ammount%100)%50)%10);

    return 0;
}