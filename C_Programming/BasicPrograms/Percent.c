#include <stdio.h>
int main(){
    int a,b,c,d,e,percent;
    percent =(a+b+c+d+e)/5;
    printf("enter the marks of subject a:");
    scanf("%d",&a);
    printf("enter the marks of subject b :");
    scanf("%d",&b);
    printf("enter the marks of subject c :");
    scanf("%d",&c);
    printf("enter the marks of subject d :");
    scanf("%d",&d);
    printf("enter the marks of subject e:");
    scanf("%d",&e);

    //percent =(a+b+c+d+e)/5;

    if (percent>=50){
        printf("Pass");
    }

    else{
        printf("BETTER LUCK TRY NEXT TIME: YOU ARE FAILED");
    }


}


