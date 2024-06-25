#include<stdio.h>
int main(){

    int count;
    long long num;

    printf("ENTER A NIUMBER :");
    scanf("%lld",&num);

    do{
        count++;

        num = num/10;
    
    }while(num!=0);
    printf("total digits :%d",count);
    return 0;


}