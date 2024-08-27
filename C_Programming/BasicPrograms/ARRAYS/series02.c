#include<stdio.h>
int main(){
    int num,i,sum=0; 

    printf("input any number : ");
    scanf("%d",&num);

    printf("1 +");

    for(i=2; i<=num;i++)
    if(1%2==0)
    printf("1/%d +",i);
    

    for(i=1;i<=num;i++)
    sum= sum+i;


    printf("\n sum=1/%d",sum+1/sum);


}
