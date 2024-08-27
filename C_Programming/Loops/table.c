#include<stdio.h>
int main(){
    int n;
    printf("enter a number :");
    scanf("%d",&n);

    for (int n=n; n>0; n=n+(n*1)){
        printf("\n %d",n);
     }
return 0;    
}