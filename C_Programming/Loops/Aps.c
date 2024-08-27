#include<stdio.h>
int main(){
    int n,d,s;
    printf("ENTER A NUMBER n:");
    scanf("%d",&n);


    printf("ENTER A NUMBWER for common diffrrence d :");
    scanf("%d",&d);

    printf("ENTER A last number s:");
    scanf("%d",&s);
    
    for(int n=n; n<=s; n=n+d) {
        printf("\n%d",n);
    }


    
}