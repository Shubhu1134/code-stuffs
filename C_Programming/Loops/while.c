#include <stdio.h>
int main(){

    int a b,c,x;
    printf("ENTER A NUMBER A :");
    scanf("%d",&a);

    printf("ENTER A number b :");
    scanf("%d",&b);

    c=1;
    x=b;

    while(b!=0){
        c= c*a;
        b= b-1;

    }printf("%d raised to the power of  %d:%d",a,x,c);

}