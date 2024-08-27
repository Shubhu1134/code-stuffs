#include<stdio.h>

int main(){

    int i,base, expo;
    long long power =1;

    printf("enter base : ");
    scanf("%d", &base);
    
    printf("enter exponant ");
    scanf("%d",&expo);

    for(int i=1; i<=expo; i++) 
    {
        power = power * base;
    }
    printf("%d^%d = %lld",base,expo,power);
    return 0;
    
}