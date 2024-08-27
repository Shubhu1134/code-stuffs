#include <stdio.h>
int main(){

    int qyt,dis=0;
    float total,rate;

    printf("\n Quantity of items:");
    scanf("%d",&qyt);

    printf("\n Rate of the Item:");
    scanf("%f",&rate);

    if(qyt>=1000){
        dis = 10;
        total=(qyt*rate)-(qyt*rate*10/100);
        printf("TOTAL EXPENSES=RS:%f",total);
    }
    if(qyt<1000){
        dis=0;
        total=(qyt*rate);
        printf("TOTAL EXPENSES=RS:%f",total);
    }


    
    

}